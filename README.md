# Export Camp

export camp is a project assignment for "design web" from informatics study program.

This project is generated using the official [Nuxt UI Starter](https://nuxt.new/) and has been enhanced with additional dependencies and configurations. It serves as a minimal starting point for building applications with Nuxt 3.

For further details, refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

## Features

- Built with Nuxt 3
- Integrates @nuxt/ui, @pinia/nuxt, and @sidebase/nuxt-auth modules
- Includes ESLint for linting and code formatting
- Full TypeScript support with type checking via vue-tsc
- - new package nuxt-icons (not nuxt-icon) for importing svg purpose, not to be confused with nuxt-icon that also used in this project as icon library

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server at `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

```

Preview the production build locally:

```bash
# npm
npm run preview

```

## Additional Scripts

This project includes several useful scripts:

- **Linting**: `pnpm lint` (runs ESLint for code linting)
- **Code Formatting**: `pnpm format` (fixes code format using ESLint)
- **Type Checking**: `pnpm typecheck` (runs type checking with vue-tsc and nuxi)
