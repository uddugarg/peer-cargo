# Peer-Cargo Setup Guide

This guide will help you set up the Peer-Cargo application locally for development purposes.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- **Node.js** (v18.x or higher)
- **npm** or **pnpm** (recommended)
- **Docker** and **Docker Compose** (for running PostgreSQL and Redis locally)
- **Git**

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-org/peer-cargo.git
cd peer-cargo
```

## Step 2: Environment Setup

1. Copy the example environment file to create your local environment file:

```bash
cp .env.example .env.local
```

2. Update the `.env.local` file with your specific configuration values:
   - Database connection string
   - Clerk authentication keys
   - AWS credentials (if using S3)
   - Stripe keys (if implementing payments)

## Step 3: Install Dependencies

Using npm:

```bash
npm install
```

Or, using pnpm (recommended for faster installation):

```bash
pnpm install
```

## Step 4: Start the Database Services

Start PostgreSQL and Redis using Docker Compose:

```bash
docker-compose up -d
```

This will start PostgreSQL and Redis in detached mode.

## Step 5: Database Setup

Initialize the database schema and seed data:

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations to create database schema
npm run prisma:migrate

# Seed the database with initial data
npm run prisma:seed
```

## Step 6: Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Step 7: Access Prisma Studio (Optional)

If you want to view and manage your database through Prisma Studio's GUI:

```bash
npm run prisma:studio
```

Prisma Studio will be available at [http://localhost:5555](http://localhost:5555).

## Project Structure

The project follows a structured organization:

- `/app`: Next.js App Router pages
- `/components`: Reusable React components
- `/prisma`: Database schema and migrations
- `/lib`: Utility functions and shared code
- `/public`: Static assets
- `/microservices`: Individual service implementations

## Authentication Configuration

For authentication with Clerk to work correctly:

1. Create a Clerk account at [https://clerk.dev](https://clerk.dev)
2. Create a new application in the Clerk dashboard
3. Add the following redirect URLs in your Clerk application settings:
   - `http://localhost:3000/api/auth/callback/clerk`
   - `http://localhost:3000/sign-in/callback`
   - `http://localhost:3000/sign-up/callback`
4. Copy the API keys from your Clerk dashboard to the `.env.local` file

## Database Schema

The database schema is defined in `prisma/schema.prisma`. The main models include:

- `User`: User profiles
- `GlidePath`: Travel itineraries
- `DropParcel`: Delivery requests
- `Match`: Connections between GlidePaths and DropParcels
- `CargoQuest`: Finalized delivery jobs
- `Message`: Chat communications

## Troubleshooting

### Database Connection Issues

If you encounter database connection issues:

1. Make sure Docker is running
2. Check if PostgreSQL container is running: `docker ps`
3. Verify that the connection string in `.env.local` is correct
4. Try restarting the database container: `docker-compose restart postgres`

### Authentication Issues

If you encounter authentication issues:

1. Verify your Clerk API keys in `.env.local`
2. Ensure all required environment variables for Clerk are set
3. Check that your Clerk application is properly configured with the correct redirect URLs

### Clearing the Database

To reset your database to a clean state:

```bash
npx prisma migrate reset
```

This will drop the database and reapply all migrations, then run the seed script.

## Deployment

For production deployment, follow these steps:

1. Build the application:

```bash
npm run build
```

2. Configure your production environment variables
3. Deploy to your preferred hosting provider (AWS, Vercel, etc.)

## Next Steps

After successfully setting up the project, you can:

1. Explore the codebase to understand the application structure
2. Create a new branch for your feature development
3. Set up CI/CD pipelines for automated testing and deployment
4. Configure additional services like Stripe for payments or AWS S3 for file storage
