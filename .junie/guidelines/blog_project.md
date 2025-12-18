# Technical Blog Project Guidelines

## Overview
This project is a technical blog built using **Deno** and **Fresh v2**. The blog renders content from Markdown files and includes an "About Me" section.

## Tech Stack & Documentation
- **Runtime**: [Deno](https://docs.deno.com/)
- **Framework**: [Fresh v2 Documentation](https://fresh.deno.dev/docs/introduction)
- **Styling**: Tailwind CSS (standard for Fresh)
- **Content**: Markdown (GFM) via [Deno GFM](https://jsr.io/@deno/gfm)

## Project Structure
Adhere to the following directory structure to maintain organization:
- `fresh.config.ts`: Main configuration file for Fresh v2.
- `main.ts`: Entry point for the server.
- `static/`: Static assets (images, favicon, etc.).
- `content/posts/`: Markdown files for blog articles.
- `components/`: Reusable Preact components.
- `islands/`: Interactive client-side components.
- `routes/`: Fresh routes using the v2 composable pattern (e.g., `_app.tsx`, `index.tsx`).
- `utils/`: Helper functions (e.g., Markdown parsing, file handling).

## Configuration
- **fresh.config.ts**: Define plugins (like Tailwind) and other Fresh-specific configurations.
- **deno.json**: Manage dependencies via the `imports` field and define project tasks.

## Content Management
### Markdown Articles
- Store articles in `content/posts/` as `.md` files.
- Use YAML front-matter for metadata:
  ```yaml
  ---
  title: My First Post
  published_at: 2025-12-18
  description: An introduction to my blog.
  tags: [deno, fresh]
  ---
  ```
- Use `jsr:@std/front-matter` (e.g., the `any` or `yaml` submodules) for parsing metadata.
- Use `jsr:@deno/gfm` for rendering Markdown to HTML.

## Testing Rules
- **Naming**: Use the `.test.ts` suffix for all test files.
- **Location**: Place logic tests alongside the file they test or in a dedicated `tests/` folder if they are integration tests.
- **Assertions**: Use `jsr:@std/assert` for all assertions.
- **Command**: Run tests using `deno task test`.

## Development Guidelines
- **Fresh v2 Patterns**: Leverage the new composable routing and island architecture.
- **Performance**: Minimize client-side JS; use islands only for interactive elements (e.g., search, theme toggle).
- **TypeScript**: Use strict TypeScript. Avoid `any`. Prefer interfaces over types for public APIs.
- **Styling**: Use Tailwind CSS utility classes. Avoid custom CSS files unless strictly necessary.
- **Imports**: Always prefer JSR or standard Deno modules (`@std`). Map them in `deno.json`.

## Key Tasks
- `deno task dev`: Start the development server with hot reloading.
- `deno task check`: Run type checking and linting.
- `deno task test`: Run the test suite.

## Maintenance
- **Ignore Files**: Regularly maintain `.gitignore` and `.aiignore` files to ensure they are up-to-date with the project structure and sensitive files.
- **IDE Context**: Allow AI access to non-sensitive IDE configuration files (like those in `.idea/` that are not ignored by its internal `.gitignore`) to provide better project context. Respect internal IDE ignore files instead of blocking the entire directory at the root level.
