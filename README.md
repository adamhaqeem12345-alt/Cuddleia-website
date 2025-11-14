# Next.js + Tailwind + PostgreSQL + Vercel Project

A modern full-stack web application built with Next.js, Tailwind CSS, Node.js API routes, and PostgreSQL database, ready for deployment on Vercel.

## Tech Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Next.js API Routes (Node.js)
- **Database**: PostgreSQL
- **Deployment**: Vercel

## Prerequisites

- Node.js 20 or higher
- PostgreSQL 12 or higher
- npm or yarn package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and update with your values:

```bash
cp .env.example .env.local
```

Update `.env.local` with your PostgreSQL connection string:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Set up the database

#### Option A: Quick Start with Docker (Recommended)

Use the provided script to set up everything:

```bash
./scripts/start-dev.sh
```

This script will:
- Start PostgreSQL with Docker Compose
- Wait for the database to be ready
- Run migrations automatically
- Display helpful next steps

#### Option B: Manual Docker Setup

Start PostgreSQL using Docker Compose:

```bash
docker-compose up -d
```

The database will automatically run the migrations on first start.

To seed the database:

```bash
docker-compose exec postgres psql -U postgres -d mydatabase -f /docker-entrypoint-initdb.d/../seed.sql
```

Or manually:

```bash
psql -h localhost -U postgres -d mydatabase -f db/seed.sql
```

#### Option C: Using existing PostgreSQL installation

Run the migration to create the database schema:

```bash
psql -U your_username -d your_database -f db/migrations/001_create_users_table.sql
```

Optionally, seed the database with sample data:

```bash
psql -U your_username -d your_database -f db/seed.sql
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/
│   ├── api/                 # API routes
│   │   ├── health/          # Health check endpoint
│   │   └── users/           # User CRUD endpoints
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── db/
│   ├── migrations/          # Database migration scripts
│   └── seed.sql             # Database seed data
├── lib/
│   ├── api-response.ts      # API response utilities
│   └── db.ts                # Database connection and query utilities
├── scripts/
│   └── start-dev.sh         # Development setup script
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/                  # Static files
├── .env.example             # Example environment variables
├── .env.local               # Local environment variables (not in git)
├── docker-compose.yml       # Docker Compose configuration for PostgreSQL
├── middleware.ts            # Next.js middleware for security headers
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Vercel deployment configuration
```

## API Endpoints

### Health Check

- `GET /api/health` - Check API and database connectivity

### Users

- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/[id]` - Get a user by ID
- `PUT /api/users/[id]` - Update a user by ID
- `DELETE /api/users/[id]` - Delete a user by ID

### Example API Usage

#### Create a user

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Smith","email":"alice@example.com"}'
```

#### Get all users

```bash
curl http://localhost:3000/api/users
```

#### Get a specific user

```bash
curl http://localhost:3000/api/users/1
```

#### Update a user

```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Johnson"}'
```

#### Delete a user

```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## Database Schema

### Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Link your project to Vercel:

```bash
vercel link
```

3. Add your database URL as an environment variable in Vercel:

```bash
vercel env add DATABASE_URL
```

Or add it through the Vercel dashboard at Project Settings > Environment Variables.

4. Deploy:

```bash
vercel --prod
```

### Database Setup on Vercel

For production, you can use:

- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Neon](https://neon.tech/)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)
- Any other PostgreSQL provider

Make sure to run your migrations on the production database before deploying.

## Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Building for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Vercel Documentation](https://vercel.com/docs)

## License

MIT
