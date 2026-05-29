README.md
# Civic Pulse

A static single-page **React** app, scaffolded with **Vite**.  
Written in **JavaScript**.

## Stack
- React (plain JavaScript — no TypeScript)
- Vite for the dev server and bundling
- Outputs to a static `dist/` folder

## Quick start

```bash
# Install dependencies (run inside the project folder)
npm install
```

# Spin up the dev server
```bash
npm run dev
```

Then open whatever URL Vite prints (usually http://localhost:5173/).

Build (Static)

## Production build

Compile the static bundle:

```bash
npm run build
```

The output lands in `dist/` — drop that folder onto any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

If you want to sanity-check the production build locally before shipping:

```bash
npm run preview
```

Project Structure
.
├─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
└─ vite.config.js

Notes

Plain JavaScript React (no TypeScript anywhere).

No backend involved — this is purely a static SPA.

Tweak styles in src/index.css and content in src/App.jsx.


---

## How to actually use this
1. Swap in the `src/App.jsx` and `src/index.css` shown above.
2. Optional — update the title and meta tags in `index.html`.
3. From the project root:
   ```bash
   npm run dev


When you're ready to deploy:

npm run build
npm run preview  # optional — check the built bundle before shipping
