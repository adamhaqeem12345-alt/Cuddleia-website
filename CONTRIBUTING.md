# Contributing Guide

Thank you for your interest in contributing to this project!

## Development Workflow

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Set up your environment: `cp .env.example .env.local`
5. Start the database: `./scripts/start-dev.sh`
6. Start the dev server: `npm run dev`

### Making Changes

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test your changes locally
4. Run type checking: `npm run type-check`
5. Run linting: `npm run lint`
6. Build the project: `npm run build`
7. Commit your changes with a clear message
8. Push to your fork
9. Create a Pull Request

## Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add types for all function parameters and return values
- Keep functions small and focused on a single task

## API Routes

When creating new API routes:

- Follow RESTful conventions
- Use appropriate HTTP methods (GET, POST, PUT, DELETE)
- Return consistent JSON responses
- Include proper error handling
- Add input validation
- Document the endpoint in the README

Example API route structure:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    );
  }
}
```

## Database

### Adding Migrations

1. Create a new migration file in `db/migrations/`
2. Use the naming convention: `XXX_description.sql`
3. Write SQL for both creation and rollback
4. Test the migration locally
5. Document any new tables or columns

### Database Best Practices

- Always use parameterized queries to prevent SQL injection
- Add indexes for frequently queried columns
- Use transactions for multi-step operations
- Keep database logic in the `lib/db.ts` file

## Testing

Before submitting a PR:

1. Test all affected API endpoints
2. Verify the changes work with a fresh database
3. Test both success and error cases
4. Check that existing functionality still works

## Commit Messages

Use clear, descriptive commit messages:

- `feat: add user profile endpoint`
- `fix: resolve database connection issue`
- `docs: update API documentation`
- `refactor: simplify query logic`
- `test: add user API tests`

## Pull Request Process

1. Update the README.md if you've added new features
2. Update the SETUP_CHECKLIST.md if setup steps changed
3. Ensure all checks pass
4. Request review from maintainers
5. Address any feedback
6. Once approved, your PR will be merged

## Questions?

If you have questions or need help, please:

- Check the README.md
- Review existing issues and PRs
- Open a new issue for discussion

Thank you for contributing!
