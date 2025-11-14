# Quick Start Guide

Get up and running in 5 minutes!

## Prerequisites

- Node.js 20+ installed
- Docker installed (for database)

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

### 3. Start Database & Server
```bash
# Option A: Use automated script
./scripts/start-dev.sh
npm run dev

# Option B: Manual start
docker-compose up -d
npm run dev
```

### 4. Open Browser
Visit: http://localhost:3000

## Verify Installation

### Check API Health
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-11-14T00:00:00.000Z",
  "database": "connected"
}
```

### Test User API
```bash
# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'

# Get all users
curl http://localhost:3000/api/users
```

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run type-check   # Check TypeScript
npm run lint         # Check code style

docker-compose up -d    # Start database
docker-compose down     # Stop database
docker-compose logs     # View database logs
```

## Need Help?

- Read [README.md](./README.md) for detailed documentation
- Check [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md) for troubleshooting
- Review [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for architecture details

## Next Steps

1. Explore the API endpoints at http://localhost:3000
2. Check the database with: `docker-compose exec postgres psql -U postgres -d mydatabase`
3. Modify `app/page.tsx` to customize the home page
4. Add new API routes in `app/api/`
5. Deploy to Vercel when ready!

Happy coding! 🚀
