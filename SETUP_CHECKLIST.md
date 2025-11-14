# Setup Checklist

Use this checklist to ensure your project is properly configured.

## Local Development Setup

- [ ] Node.js 20+ installed
- [ ] Docker installed (for PostgreSQL)
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` file created from `.env.example`
- [ ] PostgreSQL running (`docker-compose up -d` or `./scripts/start-dev.sh`)
- [ ] Database migrations applied
- [ ] Development server runs successfully (`npm run dev`)
- [ ] API health check works (`http://localhost:3000/api/health`)

## Code Quality

- [ ] TypeScript compiles without errors (`npm run type-check`)
- [ ] Linter passes (`npm run lint`)
- [ ] Production build works (`npm run build`)

## Production Deployment (Vercel)

- [ ] Vercel account created
- [ ] Project linked to Vercel (`vercel link`)
- [ ] PostgreSQL database provisioned (Vercel Postgres, Neon, Supabase, etc.)
- [ ] `DATABASE_URL` environment variable added to Vercel
- [ ] Database migrations run on production database
- [ ] Test deployment successful
- [ ] API endpoints working in production
- [ ] Custom domain configured (optional)

## Database Setup

- [ ] PostgreSQL instance running
- [ ] Database created
- [ ] Users table created (migration applied)
- [ ] Seed data loaded (optional)
- [ ] Connection string configured in environment variables
- [ ] SSL enabled for production connections

## Security

- [ ] Environment variables not committed to git
- [ ] `.env.local` in `.gitignore`
- [ ] Production database uses strong password
- [ ] Database connection uses SSL in production
- [ ] API security headers configured (middleware.ts)
- [ ] CORS settings reviewed if needed

## Testing

- [ ] API health endpoint responds correctly
- [ ] Create user endpoint works
- [ ] List users endpoint works
- [ ] Get single user endpoint works
- [ ] Update user endpoint works
- [ ] Delete user endpoint works
- [ ] Error handling works correctly

## Documentation

- [ ] README.md updated with project-specific information
- [ ] GitHub repository URL updated in README
- [ ] API endpoints documented
- [ ] Environment variables documented
- [ ] Team members have access to necessary credentials

## Optional Enhancements

- [ ] Add authentication (NextAuth.js, Clerk, etc.)
- [ ] Add more database tables and relationships
- [ ] Implement pagination for list endpoints
- [ ] Add input validation library (Zod, Yup)
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Add automated tests (Jest, Playwright)
- [ ] Configure CI/CD pipeline
- [ ] Add API rate limiting
- [ ] Implement caching strategy
- [ ] Add database backup strategy
