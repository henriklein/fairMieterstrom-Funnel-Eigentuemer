# Preventing the previous Vercel build failures

The failed build log showed two separate problems:

1. **Font imports from `geist/font`** – The layout attempted to import `Geist` and `Geist_Mono` directly from `geist/font`. Those names are not exported from the package in Tailwind v4 projects, so the bundler replaced them with runtime stubs that threw `Attempted import error` and `TypeError: (0, l.Geist) is not a function`. Always import the officially exported font helpers instead:
   ```ts
   import { GeistSans } from "geist/font/sans"
   import { GeistMono } from "geist/font/mono"
   ```
   Add their `.variable` class names to `<html>` and apply `font-sans` on the `<body>` so the CSS custom properties resolve correctly. Avoid calling the helpers as functions; just spread the `.variable` class string.

2. **Using `border-border`** – Tailwind CSS v4 no longer recognizes color utilities that are not defined by the default design tokens. Because `border-border` is not generated, PostCSS aborted with `Cannot apply unknown utility class "border-border"`. Replace that utility with either `border`/`border-[color]` classes or plain CSS that reads the `--border` design token, e.g.:
   ```tsx
   className="border"  // relies on --color-border from globals.css
   ```
   or
   ```css
   border: 1px solid var(--border);
   ```
   Keeping all custom colors inside CSS variables in `app/globals.css` guarantees the build can resolve the styling without extra Tailwind config.

Following the two rules above keeps the project compatible with the Tailwind v4 + Next.js 14 toolchain that Vercel runs during `bun run build`.
