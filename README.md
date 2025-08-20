# 📖 Digital Guestbook

A SvelteKit + PostgreSQL deployment sample. This modern guestbook application demonstrates how to build and deploy full-stack web applications with a PostgreSQL database.

## Purpose

This repository serves as a deployment sample, showcasing:

- How to structure a SvelteKit application for deployment
- Integration with PostgreSQL for database operations
- Best practices for environment configuration
- Production-ready code patterns and architecture

## Features

- 📝 **Digital Guestbook** - Interactive message board for visitors
- 🚀 **SvelteKit** - Full-stack framework with SSR/SSG
- 🔧 **TypeScript** - Type safety throughout
- 🎨 **Tailwind CSS** - Beautiful, responsive design
- 🗄️ **PostgreSQL** - Robust relational database
- 🏗️ **Component Architecture** - Reusable UI components
- 📱 **Mobile-First** - Works perfectly on all devices

## Quick Start

1. **Clone and install dependencies:**

   ```bash
   git clone <your-repo>
   cd sveltekit-sample
   bun install
   ```

2. **Set up PostgreSQL:**
   - Install PostgreSQL locally or use a cloud provider
   - Create a new database for the application
   - Copy `.env.example` to `.env` and fill in your database URL
   - Run the schema setup:

   ```bash
   psql -d your_database_name -f schema.sql
   ```

3. **Run the development server:**
   ```bash
   bun run dev
   ```

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── Header.svelte          # Page header component
│   │   ├── Navigation.svelte      # Site navigation
│   │   ├── MessageCard.svelte     # Individual message display
│   │   ├── MessageForm.svelte     # Guestbook entry form
│   │   └── FeatureCard.svelte     # Feature showcase card
│   ├── database.ts         # PostgreSQL client setup
│   └── index.ts            # Component exports
├── routes/
│   ├── +layout.svelte      # Root layout with navigation
│   ├── +page.svelte        # Guestbook home page
│   ├── +page.server.ts     # Server-side data loading & form actions
│   ├── about/
│   │   └── +page.svelte    # About page
│   └── api/
│       └── messages/
│           └── +server.ts  # REST API endpoints for messages
└── app.html                # HTML template
```

## Environment Variables

Create a `.env` file with the following required variables:

```env
# PostgreSQL Configuration (Required)
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# Optional Environment Variables
NODE_ENV=development
PORT=3000
```

**Required Variables:**

- `DATABASE_URL` - Your PostgreSQL connection string

**Optional Variables:**

- `NODE_ENV` - Environment mode (development, production)
- `PORT` - Port number for the application (defaults to 3000)

## Database Schema

The guestbook uses a messages table with optional fields for rich entries:

```sql
CREATE TABLE guestbook_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  location TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Deployment

This app is configured for deployment with the Node.js adapter. For other platforms:

1. **Vercel/Netlify:** Change adapter in `svelte.config.js`
2. **Docker:** Use the Node.js adapter (already configured)
3. **Static:** Switch to `@sveltejs/adapter-static` for static sites

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Run TypeScript checks
- `bun run lint` - Lint code
- `bun run format` - Format code

## Learn More

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
