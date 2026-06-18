# CILL — Centre for Independent Language Learning

A static, multi-page learning website that hosts CILL teaching notes so students
can read them online instead of printing pages or downloading large PDFs.

It is a **work resource for CILL**. The site is organised by semester, with
modules nested under each semester, plus a top-level Resources branch.

In this pass, **LAN4104 — Professional Workplace Communication: Pitching and
Persuasive Presentation** is fully populated (overview, Units 1–6, and a
Reference/revision page). Every other module and every Resources sub-page is a
working, navigable “Content coming soon” stub.

## Viewing the site

It is plain static HTML/CSS/JS — no build step is needed to view it.

- **Locally:** open `index.html` in a browser (double-click).
- **GitHub Pages:** enable Pages for this repository (serve from the default
  branch / root). All links are relative, so it works from any sub-path.

There is no backend, database, login, or build server. No `localStorage`,
`sessionStorage`, or cookies are used — any in-page state (e.g. the unit
“mark as read” strip) lives in memory only and resets on refresh.

## Editing the content

Pages are authored with a tiny Node generator for DRY layout and a single
navigation source of truth. The generator is **only** used at authoring time;
the committed `.html` files are the deliverable.

- `data/structure.json` — the semester → module map (nav + listings derive from it).
- `build/units.js` — the LAN4104 unit notes and the Reference page content.
- `build/generate.js` — templates (header, footer, breadcrumb, cards, callouts…).

Regenerate the static pages after editing:

```bash
node build/generate.js
```

## Layout

```
/
├── index.html              CILL hub
├── about.html
├── assets/css/styles.css   design tokens + component library
├── assets/js/main.js       nav toggle + in-memory progress (no storage)
├── semesters/              semester-1/2/3.html
├── modules/
│   ├── lan4104/            index + unit-1…6 + reference  (FULLY BUILT)
│   └── *.html              stubs for the other module codes
├── resources/              index + four stub sub-pages
├── data/structure.json     single source of truth for navigation
└── build/                  authoring-time generator (not required to view)
```

British English throughout. Mobile-first and responsive to 360px; semantic
headings, keyboard-navigable nav, and AA-contrast colours.
