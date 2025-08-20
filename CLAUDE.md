# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Development Commands

```bash
# Development
npm run dev                    # Start development server
npm run build                  # Build for production  
npm run start                  # Start production server
npm run preview                # Preview production build

# Code Quality
npm run check                  # TypeScript type checking
npm run check:watch            # TypeScript type checking in watch mode
npm run lint                   # Run ESLint and Prettier checks
npm run format                 # Format code with Prettier

# Database Setup
npm run db:setup                       # Initialize database schema (requires DATABASE_URL env var)
psql -d database_name -f schema.sql    # Alternative: direct psql command
```

## Architecture Overview

This is a SvelteKit + PostgreSQL guestbook application with the following key architectural patterns:

### Database Layer (`src/lib/database.ts`)
- Uses `pg` PostgreSQL client with connection pooling
- `MessageService` class provides data access methods
- Type-safe interfaces: `GuestbookMessage` and `MessageInsert`
- SSL configuration for production environments

### Server-Side Logic (`src/routes/+page.server.ts`)
- Load function fetches messages with error handling
- Form actions handle message creation with validation
- Input sanitization and length limits (name: 100 chars, message: 500 chars)

### Component Structure
- Reusable UI components in `src/lib/components/`
- `MessageCard.svelte` - displays individual guestbook entries
- `MessageForm.svelte` - form for creating new entries
- `Header.svelte`, `Navigation.svelte` - layout components

### Database Schema
- Single table: `guestbook_messages`
- Required fields: `name`, `message`
- Optional fields: `email`, `location`, `website`
- Indexed on `created_at` for performance

## Environment Configuration

Required environment variable:
- `DATABASE_URL` - PostgreSQL connection string

The application automatically configures SSL for production environments and includes proper connection pooling.

## Package Management
The project has merge conflict markers in package.json. Resolve these before development:
- Uses npm as the package manager (despite README mentioning bun)
- Node.js adapter configured for deployment
- Tailwind CSS v4 for styling
- TypeScript with strict mode enabled