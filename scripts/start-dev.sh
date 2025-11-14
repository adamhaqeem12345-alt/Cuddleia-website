#!/bin/bash

echo "🚀 Starting development environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Start PostgreSQL
echo "📦 Starting PostgreSQL with Docker Compose..."
docker-compose up -d

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
until docker-compose exec -T postgres pg_isready -U postgres > /dev/null 2>&1; do
    sleep 1
done

echo "✅ PostgreSQL is ready!"

# Check if tables exist
echo "🔍 Checking database schema..."
TABLE_EXISTS=$(docker-compose exec -T postgres psql -U postgres -d mydatabase -tAc "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users');")

if [ "$TABLE_EXISTS" = "t" ]; then
    echo "✅ Database tables already exist"
else
    echo "📝 Creating database tables..."
    docker-compose exec -T postgres psql -U postgres -d mydatabase < db/migrations/001_create_users_table.sql
    echo "✅ Database tables created"
fi

echo ""
echo "🎉 Development environment is ready!"
echo ""
echo "Run the following commands:"
echo "  npm run dev        # Start Next.js development server"
echo "  docker-compose logs postgres  # View PostgreSQL logs"
echo "  docker-compose down           # Stop PostgreSQL"
echo ""
