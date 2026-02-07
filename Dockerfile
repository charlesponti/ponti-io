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

# Set environment variables inside Docker
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

# Update healthcheck to 127.0.0.1
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:8080', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

EXPOSE 8080

CMD ["node", "./dist/server/entry.mjs"]