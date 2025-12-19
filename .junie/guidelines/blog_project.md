# Technical Blog Project Guidelines

## Overview

This project is a technical blog built using **Deno** and **Fresh v2**. The blog
renders content from Markdown files and includes an "About Me" section.

## Tech Stack & Documentation

- **Runtime**: [Deno](https://docs.deno.com/)
- **Framework**:
  [Fresh v2 Documentation](https://fresh.deno.dev/docs/introduction)
- **Styling**: Tailwind CSS (standard for Fresh)
- **Content**: Markdown (GFM) via [Deno GFM](https://jsr.io/@deno/gfm)

## Project Structure

Adhere to the following directory structure to maintain organization:

- `static/styles.css`: Tailwind CSS entry point.
- `main.ts`: Entry point for the server, handles Fresh and Tailwind
  initialization.
- `static/`: Static assets (images, favicon, etc.).
- `content/posts/`: Markdown files for blog articles.
- `components/`: Reusable Preact components.
- `islands/`: Interactive client-side components.
- `routes/`: Fresh routes using the v2 composable pattern (e.g., `_app.tsx`,
  `index.tsx`).
- `utils/`: Helper functions (e.g., Markdown parsing, file handling).

## Configuration

- **deno.json**: Manage dependencies via the `imports` field and define project
  tasks.

## Fresh v2.2 Patterns

- **App Instance**: The server is initialized in `main.ts` using `new App()`.
- **Routes**: Routes are automatically loaded from the `routes/` directory using
  `app.fsRoutes()`.
- **Tailwind v4**: Configured via `static/styles.css` using `@theme`. Applied in
  `main.ts` using `@fresh/plugin-tailwind`. Requires `nodeModulesDir: "auto"` in
  `deno.json` for proper resolving of `@import "tailwindcss";`.
- **Builder Pattern**: Uses the `Builder` from `@fresh/core/dev` in `main.ts`
  for development and production builds.
- **Node Modules**: `nodeModulesDir: "auto"` is enabled in `deno.json` to
  support Tailwind v4's PostCSS resolution.
- **Route Definition**: Routes use the `createDefine().page()` pattern for
  server-side rendering and data fetching.
- **Error Handling**: Use `HttpError` from `@fresh/core` to handle 404s and
  other HTTP errors within routes.

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
- Use `jsr:@std/front-matter` (e.g., the `any` or `yaml` submodules) for parsing
  metadata.
- Use `jsr:@deno/gfm` for rendering Markdown to HTML.

### Planned Articles

The blog will initially focus on the following topics:

- How I got to be a technical lead after just five years of work experience
- The most important things I learned during my work as technical lead
- My new Role Of Solution Architect is completely different than I expected
- How we combine Scrum with just two weeks of guarantees and quarterly planning
- Things I had to learn the hard way while coding

## Testing Rules

- **Naming**: Use the `.test.ts` suffix for all test files.
- **Location**: Place logic tests alongside the file they test or in a dedicated
  `tests/` folder if they are integration tests.
- **Assertions**: Use `jsr:@std/assert` for all assertions.
- **Command**: Run tests using `deno task test -A --coverage`.
- **What to test**: I want that each file containing code is at least unit
  tested. Add integration tests where you think it is useful.
- **Coverage**: Run a coverage report each time you adjust tests. Try to keep
  the coverage for each file above 80%.
- Try to avoid writing snapshot tests unless absolutely necessary.

## Development Guidelines

- **Fresh v2 Patterns**: Leverage the new composable routing and island
  architecture.
- **Performance**: Minimize client-side JS; use islands only for interactive
  elements (e.g., search, theme toggle).
- **TypeScript**: Use strict TypeScript. Avoid `any`. Prefer interfaces over
  types for public APIs.
- **Styling**: Use Tailwind CSS utility classes. Avoid custom CSS files unless
  strictly necessary.
- **Imports**: Always prefer JSR or standard Deno modules (`@std`). Map them in
  `deno.json`.

## Key Tasks

- `deno task dev`: Start the development server with hot reloading.
- `deno task check`: Run type checking and linting.
- `deno task test`: Run the test suite.

## Maintenance

- **Ignore Files**: Regularly maintain `.gitignore` and `.aiignore` files to
  ensure they are up-to-date with the project structure and sensitive files.
- **IDE Context**: Allow AI access to non-sensitive IDE configuration files
  (like those in `.idea/` that are not ignored by its internal `.gitignore`) to
  provide better project context. Respect internal IDE ignore files instead of
  blocking the entire directory at the root level.
- **Guideline Evolution**: After each prompt or change applied to the codebase,
  revisit this guidelines file and add any important information, architectural
  decisions, or new patterns that emerged during the work.
- **Formatting**: Use `deno fmt` to format all files. Apply this each time you
  modify files in the project.
- **Test**: Each time, after you mofify files in the project, take care to add
  or mofify tests and uphold the coverage goal.
- **Linting**: Each time you modify files, run `deno lint` to ensure your code
  is compliant with the project's linting rules.

## UI & UX Guidelines

### Theme & Aesthetic

- **Vibe**: Professional but playful (Modern Minimalist with "Soft Pop"
  accents).
- **Dark Mode**: Support both system preference (`prefers-color-scheme`) and
  manual toggle via an Island component. Use `class` strategy in Tailwind.

  #### Dark Mode Implementation
  - **Strategy**: Uses Tailwind CSS `class` strategy.
  - **Configuration**: Enabled in `static/styles.css` via
    `@variant dark (&:where(.dark, .dark *));`.
  - **Persistence**: Theme preference is stored in `localStorage` as `theme`
    and synchronized with a `theme` cookie for SSR support.
  - **SSR Integration**: `routes/_app.tsx` reads the `theme` cookie from request
    headers to apply the `.dark` class during server-side rendering. This
    provides a perfectly flash-free experience for returning users.
  - **Flash Prevention**: For first-time users or mismatched states, a small
    external script (`static/theme-init.js`) is loaded in the `<head>` to
    apply the theme before the body is rendered.
  - **No dangerouslySetInnerHTML**: Initialization logic is moved to an
    external script file to avoid using `dangerouslySetInnerHTML` in the
    main application shell, improving code cleanliness and following best
    practices.
  - **Toggle**: Managed by the `ThemeToggle` island, which syncs the state
    between `localStorage`, `document.cookie`, and the DOM.

  #### Colors
  - **Primary Accents**: Use a "Duo of Pastels" (Blue, Pink) sparingly for
    interaction elements (hover states, active links, tags).
  - **Light Mode**: High-contrast text on off-white/cream backgrounds. Use
    pastel shadows or thin borders for cards.
  - **Dark Mode**: Softened whites on deep navy/charcoal. Use desaturated
    versions of the pastel palette for accents to maintain accessibility.

  #### General UI/UX Guidelines
  - **Consistency**: All pages (`/`, `/about-me`, `/posts/[slug]`) must share:
    - A consistent **Navigation Bar** with the theme toggle.
    - Unified **Typography**: Sans-serif for UI/Headers, Monospace for code
      snippets.
  - **Responsiveness**: "Mobile-First" approach. Ensure touch targets are large
    enough and layouts stack gracefully on small screens.
  - **Interactivity**: Use subtle transitions (e.g.,
    `transition-colors duration-200`) for a polished feel.
  - **Accessibility**: Ensure all pages are accessible (WCAG up to AA).
  - **Uniqueness**: Ensure that the project has one or two unique design
    elements like a specially formed border, background (e.g. as a reference to
    code), or some other styling feature, that is consistent on every page and
    helps to differentiate the blog from others.
