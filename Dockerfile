# Build stage
FROM node:lts-alpine AS builder

WORKDIR /app

# Copy the files to the container image
COPY package*.json ./

# Install packages
RUN npm ci

# Copy local code to the container image.
COPY . ./

# Build the app.
RUN npm run build

# Runtime stage
FROM node:lts-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY package*.json ./
RUN npm ci --only=production

# Copy built application from builder
COPY --from=builder /app/dist ./dist

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Serve the app on port 8080
EXPOSE 8080

CMD ["node", "./dist/server/entry.mjs"]