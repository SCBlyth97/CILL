/* CILL static-site generator.
   Run:  node build/generate.js
   Outputs plain HTML to the repo root. The generator exists for DRY authoring;
   it is NOT needed to *view* the site — the committed output is plain static
   files that open by double-clicking or via GitHub Pages with zero config.

   Navigation is generated from data/structure.json (single source of truth).
   All links are RELATIVE so the site works from file:// and from any GitHub
   Pages sub-path. No storage APIs are emitted anywhere. */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const structure = JSON.parse(fs.readFileSync(path.join(ROOT, "data/structure.json"), "utf8"));
const units = require("./units.js"); // LAN4104 unit bodies + reference data

const SITE = "CILL";
const SITE_FULL = "Centre for Independent Language Learning";
const YEAR = new Date().getFullYear();

/* ---- helpers ---- */
function rel(depth) { return depth === 0 ? "" : "../".repeat(depth); }
function write(outPath, html) {
  const full = path.join(ROOT, outPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
  console.log("  wrote", outPath);
}
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

/* ---- header / nav (generated from structure.json) ---- */
function header(r, currentKey) {
  const semItems = structure.semesters.map(s =>
    `<li><a href="${r}semesters/${s.id}.html"${currentKey === s.id ? ' aria-current="page"' : ""}>${s.name}</a></li>`
  ).join("");
  return `<header class="site-header">
    <div class="container">
      <a class="brand" href="${r}index.html" aria-label="${SITE} home">
        <span class="logo" aria-hidden="true">CILL</span>
        <span>CILL<span class="brand-full">${SITE_FULL}</span></span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">
        <span class="bars" aria-hidden="true"></span> Menu
      </button>
      <nav class="primary-nav" id="primary-nav" aria-label="Primary" hidden>
        <ul>
          <li><a href="${r}index.html"${currentKey === "home" ? ' aria-current="page"' : ""}>Home</a></li>
          <li class="has-submenu">
            <button type="button" class="submenu-label" aria-expanded="false">Semesters <span class="caret" aria-hidden="true"></span></button>
            <ul class="submenu">${semItems}</ul>
          </li>
          <li><a href="${r}resources/index.html"${currentKey === "resources" ? ' aria-current="page"' : ""}>Resources</a></li>
          <li><a href="${r}about.html"${currentKey === "about" ? ' aria-current="page"' : ""}>About</a></li>
        </ul>
      </nav>
    </div>
  </header>`;
}

function footer(r) {
  return `<footer class="site-footer">
    <div class="container">
      <div class="foot-grid">
        <div>
          <strong>${SITE} — ${SITE_FULL}</strong>
          <span class="dots" aria-hidden="true"><span></span><span></span><span></span></span>
          <div><small>For CILL students · © ${YEAR} ${SITE_FULL}</small></div>
        </div>
        <a href="#top">↑ Back to top</a>
      </div>
    </div>
  </footer>`;
}

function breadcrumb(r, trail) {
  const items = trail.map((t, i) => {
    const last = i === trail.length - 1;
    if (last || !t.href) return `<li aria-current="page">${esc(t.label)}</li>`;
    return `<li><a href="${r}${t.href}">${esc(t.label)}</a></li>`;
  }).join("");
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><div class="container"><ol>${items}</ol></div></nav>`;
}

function page({ depth, currentKey, title, description, trail, body, mainClass = "" }) {
  const r = rel(depth);
  const crumbs = trail ? breadcrumb(r, trail) : "";
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} · ${SITE}</title>
  <meta name="description" content="${esc(description || "")}">
  <link rel="stylesheet" href="${r}assets/css/styles.css">
</head>
<body id="top">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header(r, currentKey)}
  ${crumbs}
  <main id="main" class="${mainClass}">
${body}
  </main>
  ${footer(r)}
  <script src="${r}assets/js/main.js" defer></script>
</body>
</html>`;
}

/* ===================================================================
   PAGE BUILDERS
   =================================================================== */

/* ---- Hub / home ---- */
function buildHome() {
  const semCards = structure.semesters.map(s => {
    const live = s.modules.filter(m => structure.modules[m].status === "live").length;
    const count = s.modules.length;
    return `<a class="card" href="semesters/${s.id}.html">
      <span class="tag tag--ghost">${s.name}</span>
      <h3>${s.name}</h3>
      <p>${count} modules${live ? ` · ${live} with notes online` : ""}.</p>
      <span class="card-foot muted">Browse modules →</span>
    </a>`;
  }).join("");

  const resCards = structure.resources.map(x =>
    `<a class="card card--muted" href="${x.href}">
      <h3>${esc(x.name)}</h3>
      <span class="badge badge--soon">Coming soon</span>
    </a>`
  ).join("");

  const body = `
  <section class="hero">
    <div class="container">
      <span class="tag">CILL</span>
      <h1>CILL — Centre for Independent Language Learning</h1>
      <p class="lead">Teaching notes you can read on your phone. Browse the course online instead of printing pages or downloading large PDFs.</p>
      <p><a class="btn" href="modules/lan4104/index.html">Start with LAN4104 — Pitching</a>
         <a class="btn btn--ghost" href="about.html">About CILL</a></p>
    </div>
  </section>

  <section class="section container">
    <h2>Browse by semester</h2>
    <p class="muted reading">Modules are organised by semester. Some modules run in more than one semester — their notes live in one place and are linked from each.</p>
    <div class="card-grid cols-3">${semCards}</div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <h2>Resources</h2>
      <p class="muted reading">Extra support beyond the timetabled modules.</p>
      <div class="card-grid">${resCards}</div>
    </div>
  </section>`;

  write("index.html", page({ depth: 0, currentKey: "home", title: "Home", description: `${SITE} — ${SITE_FULL}. Online teaching notes for CILL students.`, body }));
}

/* ---- About ---- */
function buildAbout() {
  const body = `
  <section class="page container reading">
    <h1>About CILL</h1>
    <p class="lead">The Centre for Independent Language Learning (CILL) supports students in developing the language and communication skills they need for study and the workplace.</p>
    <p>This website is a work resource for CILL. It hosts the teaching notes for our modules so that students can read them online — on a phone, tablet or computer — rather than printing handouts or downloading large files.</p>
    <h2>How the site is organised</h2>
    <p>The notes are organised by semester, with modules listed under each one. Several modules run in more than one semester; where that happens, the notes live in a single place and each semester links to the same content, so there is only ever one up-to-date version.</p>
    <p>In this first pass, <strong>LAN4104 — Professional Workplace Communication: Pitching and Persuasive Presentation</strong> is fully populated. Every other module and resource area is a working, navigable page marked <em>“Content coming soon”</em> while its notes are prepared.</p>
    <h2>A note on the notes</h2>
    <p>LAN4104 is taught to several different industry cohorts, but the teaching — the definitions, structure and techniques — is the same for everyone. The notes here teach the transferable pitching skill; worked examples are kept neutral and relatable, never tied to one industry.</p>
    <p class="muted">All content is written in British English.</p>
  </section>`;
  write("about.html", page({
    depth: 0, currentKey: "about", title: "About CILL",
    description: "About the Centre for Independent Language Learning.",
    trail: [{ label: "Home", href: "index.html" }, { label: "About CILL" }],
    body
  }));
}

/* ---- Semester pages ---- */
function buildSemesters() {
  structure.semesters.forEach(s => {
    const cards = s.modules.map(code => {
      const m = structure.modules[code];
      const live = m.status === "live";
      const href = "../" + m.href; // module hrefs are relative to root; pages sit one level deep
      const title = code === "LAN4104" ? m.title : m.title;
      return `<a class="card${live ? "" : " card--muted"}" href="${href}">
        <span class="card-code">${code}</span>
        <h3>${live ? esc(title) : esc(code)}</h3>
        ${live ? `<p>${esc(m.title)}</p>` : `<p class="muted">Module notes are being prepared.</p>`}
        <span class="card-foot">${live ? '<span class="badge badge--live">Live</span>' : '<span class="badge badge--soon">Coming soon</span>'}</span>
      </a>`;
    }).join("");

    const body = `
    <section class="page container">
      <span class="tag">${s.name}</span>
      <h1>${s.name}</h1>
      <p class="lead reading">Modules offered in ${s.name}. Open a module to read its notes.</p>
      <div class="card-grid cols-3">${cards}</div>
    </section>`;

    write(`semesters/${s.id}.html`, page({
      depth: 1, currentKey: s.id, title: s.name,
      description: `${s.name} modules at CILL.`,
      trail: [{ label: "Home", href: "index.html" }, { label: s.name }],
      body
    }));
  });
}

/* ---- Resources index + stubs ---- */
function buildResources() {
  const cards = structure.resources.map(x =>
    `<a class="card card--muted" href="../${x.href}">
      <h3>${esc(x.name)}</h3>
      <span class="badge badge--soon">Coming soon</span>
    </a>`
  ).join("");
  const body = `
  <section class="page container">
    <span class="tag">Resources</span>
    <h1>Resources</h1>
    <p class="lead reading">Extra support beyond the timetabled modules.</p>
    <div class="card-grid">${cards}</div>
  </section>`;
  write("resources/index.html", page({
    depth: 1, currentKey: "resources", title: "Resources",
    description: "CILL student resources.",
    trail: [{ label: "Home", href: "index.html" }, { label: "Resources" }],
    body
  }));

  structure.resources.forEach(x => {
    const file = x.href.replace("resources/", "");
    write(`resources/${file}`, comingSoon({
      depth: 1, currentKey: "resources", title: x.name,
      trail: [{ label: "Home", href: "index.html" }, { label: "Resources", href: "resources/index.html" }, { label: x.name }],
      backHref: "resources/index.html", backLabel: "all Resources"
    }));
  });
}

/* ---- Module stubs ---- */
function buildModuleStubs() {
  Object.keys(structure.modules).forEach(code => {
    const m = structure.modules[code];
    if (m.status !== "stub") return;
    const file = m.href.replace("modules/", "");
    const inSems = structure.semesters.filter(s => s.modules.includes(code)).map(s => s.name);
    const back = inSems.length
      ? { href: "semesters/" + structure.semesters.find(s => s.modules.includes(code)).id + ".html", label: inSems[0] }
      : { href: "index.html", label: "Home" };
    write(`modules/${file}`, comingSoon({
      depth: 1, currentKey: null, title: code,
      offered: inSems,
      trail: [{ label: "Home", href: "index.html" }].concat(
        inSems.length ? [{ label: inSems[0], href: back.href }] : []
      ).concat([{ label: code }]),
      backHref: back.href, backLabel: back.label
    }));
  });
}

function comingSoon({ depth, currentKey, title, trail, backHref, backLabel, offered }) {
  const r = rel(depth);
  const offeredHtml = offered && offered.length
    ? `<p class="offered">Offered in: ${offered.map(o => `<span class="tag tag--ghost">${esc(o)}</span>`).join(" ")}</p>` : "";
  const body = `
  <section class="page container reading">
    <h1>${esc(title)}</h1>
    ${offeredHtml}
    <div class="coming-soon">
      <div class="cs-icon" aria-hidden="true">📝</div>
      <h2>Content coming soon</h2>
      <p class="muted">The notes for this page are being prepared and will appear here once ready.</p>
      <p><a class="btn btn--ghost" href="${r}${backHref}">← Back to ${esc(backLabel)}</a></p>
    </div>
  </section>`;
  return page({ depth, currentKey, title, description: `${title} — content coming soon.`, trail, body });
}

/* ===================================================================
   LAN4104 — module overview, units, reference
   =================================================================== */
function buildLan4104Overview() {
  const m = structure.modules.LAN4104;
  const unitCards = units.list.map(u =>
    `<a class="card" href="${u.file}">
      <span class="card-code">Unit ${u.n}</span>
      <h3>${esc(u.title)}</h3>
      <p>${esc(u.blurb)}</p>
      <span class="card-foot"><span class="badge badge--live">Notes</span></span>
    </a>`
  ).join("");

  const body = `
  <section class="page container">
    <span class="tag">LAN4104</span>
    <h1>${esc(m.title)}</h1>
    <p class="offered">Offered in: ${m.offeredIn.map(o => `<span class="tag tag--ghost">${esc(o)}</span>`).join(" ")}</p>

    <div class="reading">
      <h2>What this module is about</h2>
      <p>A pitch is a concise, persuasive presentation that communicates an idea, product, service, project or proposal to an audience. This module teaches you how to plan, craft and deliver an effective pitch — from grabbing attention in the first few seconds to closing with a clear call to action — and how to condense a full pitch into a 30–60 second elevator pitch. The skills are universal: they apply whatever field you work in.</p>

      <div class="objectives">
        <p class="objectives-title">By the end of this module you will be able to:</p>
        <ul>
          <li>Define a pitch, recognise where pitches are used, and identify what makes one effective.</li>
          <li>Plan a pitch around a clear purpose and a well-understood audience.</li>
          <li>Structure a pitch using its six core components.</li>
          <li>Use storytelling to make your message resonate.</li>
          <li>Craft a unique value proposition that sets your solution apart.</li>
          <li>Deliver confidently using voice, pauses, eye contact and body language.</li>
          <li>Evaluate pitches (your own and others’) and give constructive feedback.</li>
          <li>Build and deliver a polished elevator pitch.</li>
        </ul>
      </div>
    </div>

    <h2>The six units</h2>
    <div class="card-grid cols-3">${unitCards}
      <a class="card" href="reference.html">
        <span class="card-code">Revision</span>
        <h3>Reference</h3>
        <p>Glossary, useful-expressions bank and the printable Effective Pitch Checklist.</p>
        <span class="card-foot"><span class="badge badge--live">All-in-one</span></span>
      </a>
    </div>
  </section>`;

  write("modules/lan4104/index.html", page({
    depth: 2, currentKey: null, title: "LAN4104 — Pitching",
    description: m.title,
    trail: [{ label: "Home", href: "index.html" }, { label: "Semester 1", href: "semesters/semester-1.html" }, { label: "LAN4104" }],
    body
  }));
}

function progressStrip(currentN) {
  const items = units.list.map(u =>
    `<li data-unit="unit-${u.n}" class="${u.n === currentN ? "is-current" : ""}"><a href="${u.file}"><span class="progress-dot" aria-hidden="true"></span>Unit ${u.n}${u.n === currentN ? " (current)" : ""}</a></li>`
  ).join("");
  return `<nav class="progress-strip" aria-label="Unit progress">
    <strong>Units 1–6</strong>
    <ol>${items}</ol>
  </nav>`;
}

function buildUnits() {
  units.list.forEach(u => {
    const prev = units.list[u.n - 2];
    const next = units.list[u.n];
    const toc = u.toc.map(t => `<li><a href="#${t.id}">${esc(t.label)}</a></li>`).join("");
    const prevnext = `<nav class="prevnext" aria-label="Unit navigation">
      ${prev ? `<a class="prev" href="${prev.file}"><span class="dir">← Previous</span>Unit ${prev.n}: ${esc(prev.title)}</a>` : `<a class="prev" href="index.html"><span class="dir">←</span>Module overview</a>`}
      ${next ? `<a class="next" href="${next.file}"><span class="dir">Next →</span>Unit ${next.n}: ${esc(next.title)}</a>` : `<a class="next" href="reference.html"><span class="dir">→</span>Reference &amp; revision</a>`}
    </nav>`;

    const body = `
  <section class="page container">
    <span class="tag">Unit ${u.n}</span>
    <h1>${esc(u.title)}</h1>
    ${progressStrip(u.n)}

    <div class="objectives">
      <p class="objectives-title">Learning objectives</p>
      ${u.objectives}
    </div>

    <div class="has-toc">
      <aside class="toc" aria-label="On this page">
        <p class="toc-title">On this page</p>
        <ul>${toc}</ul>
      </aside>
      <div class="unit-body reading">
        ${u.body}
        <button class="mark-read" type="button" aria-pressed="false" data-unit="unit-${u.n}">Mark this unit as read</button>
        ${prevnext}
      </div>
    </div>
  </section>`;

    write(`modules/lan4104/${u.file}`, page({
      depth: 2, currentKey: null, title: `Unit ${u.n}: ${u.title}`,
      description: u.blurb,
      trail: [{ label: "Home", href: "index.html" }, { label: "Semester 1", href: "semesters/semester-1.html" }, { label: "LAN4104", href: "modules/lan4104/index.html" }, { label: `Unit ${u.n}` }],
      body
    }));
  });
}

function buildReference() {
  write("modules/lan4104/reference.html", page({
    depth: 2, currentKey: null, title: "LAN4104 — Reference",
    description: "Glossary, expressions bank and the Effective Pitch Checklist for LAN4104.",
    trail: [{ label: "Home", href: "index.html" }, { label: "Semester 1", href: "semesters/semester-1.html" }, { label: "LAN4104", href: "modules/lan4104/index.html" }, { label: "Reference" }],
    body: units.reference
  }));
}

/* ===================================================================
   RUN
   =================================================================== */
console.log("Building CILL site…");
buildHome();
buildAbout();
buildSemesters();
buildResources();
buildModuleStubs();
buildLan4104Overview();
buildUnits();
buildReference();
console.log("Done.");
