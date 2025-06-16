# Fly.io Deployment Setup ✈️

Your Next.js app is configured to deploy to Fly.io with persistent SQLite storage.

## Configuration Files

### Essential Files:
- `fly.toml` - Fly.io deployment configuration
- `Dockerfile` - Container build instructions
- `db/index.ts` - SQLite database connection (environment-aware)
- `db/schema.ts` - Drizzle schema definition
- `drizzle.config.ts` - Drizzle configuration

### Data Management:
- `_data/populate.ts` - Data population script
- `_data/covid.db` - Local SQLite database (107MB)
- `_data/owid-covid-data.csv` - Source CSV data (100MB)

## Available Commands

```bash
# Local Development
npm run dev                    # Start development server
npm run db:populate            # Populate local database
npm run db:studio              # Open Drizzle Studio

# Schema Management  
npm run db:generate            # Generate Drizzle migrations
npm run db:migrate             # Apply schema changes

# Deployment
npm run build                  # Build Next.js app
npm run deploy                 # Deploy to Fly.io
```

## Deployment Instructions

### 1. Install Fly CLI
```bash
# macOS
brew install flyctl

# Or download from https://fly.io/docs/getting-started/installing-flyctl/
```

### 2. Login to Fly.io
```bash
fly auth login
```

### 3. Create Fly App (first time)
```bash
fly apps create ponti-io
```

### 4. Create Persistent Volume for Database
```bash
# Create 1GB volume in Chicago (ord)
fly volumes create covid_data --size 1 --region ord
```

### 5. Set up GitHub Actions (Optional)

For automatic deployments on every push to main:

1. **Get your Fly.io API token:**
   ```bash
   fly auth token
   ```

2. **Add GitHub Secret:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `FLY_API_TOKEN`
   - Value: (paste the token from step 1)

3. **The workflow will automatically:**
   - Run tests and linting on every push/PR
   - Deploy to Fly.io when tests pass on main branch

### 6. Deploy
```bash
# Manual deployment
npm run deploy

# Or push to main branch for automatic deployment via GitHub Actions
git push origin main
```

### 6. Copy Database to Production (first time)
```bash
# Connect to your app
fly ssh console

# Create the database directory
mkdir -p /data

# Exit and copy your local database
fly ssh sftp shell
put _data/covid.db /data/covid.db
exit
```

## How It Works

### Environment Detection
The app automatically detects the environment:

```typescript
// In production (Fly.io): DATABASE_PATH=/data/covid.db  
// In development: uses _data/covid.db
const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), "_data/covid.db");
```

### Persistent Storage
- **Local Development**: Uses `_data/covid.db`
- **Production**: Uses `/data/covid.db` (mounted Fly volume)
- **Database persists** across deployments and restarts

### Performance Benefits
- ✅ **Ultra-fast queries** (local SQLite file)
- ✅ **No external database costs**
- ✅ **Simple deployment**
- ✅ **Perfect for read-heavy COVID data**

## Monitoring & Management

### Check App Status
```bash
fly status
```

### View Logs
```bash
fly logs
```

### Access Database
```bash
fly ssh console
sqlite3 /data/covid.db
```

### Scale App
```bash
fly scale count 2  # Run 2 instances
fly scale memory 2048  # Use 2GB RAM
```

## Cost Estimation

**Typical monthly costs:**
- **App Instance**: ~$5-10/month (shared CPU, 1GB RAM)
- **Storage Volume**: ~$0.15/month (1GB)
- **Total**: ~$5-10/month

Much cheaper than managed database solutions!

## Troubleshooting

### Database Issues
```bash
# Connect and check database
fly ssh console
ls -la /data/
sqlite3 /data/covid.db ".tables"
```

### App Issues
```bash
# Check logs
fly logs

# Restart app
fly restart
```

Your app is ready for Fly.io deployment! 🚀
