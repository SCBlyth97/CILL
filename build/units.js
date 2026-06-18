/* LAN4104 unit content (§5) + reference page (§6).
   Generic, discipline-neutral teaching notes in British English.
   No task numbers, teacher's notes, H5P/Mentimeter links, or single-discipline
   examples presented as the lesson. */

function term(word, def) {
  return `<dfn class="term" tabindex="0">${word}<span class="tip">${def}</span></dfn>`;
}

/* ---------------- UNIT 1 ---------------- */
const unit1 = {
  n: 1, title: "Introduction to Pitching", file: "unit-1.html",
  blurb: "What a pitch is, where it’s used, the main types, and the key techniques.",
  objectives: `<ul>
    <li>Define a pitch and its purposes.</li>
    <li>Recognise when and where pitches are commonly used.</li>
    <li>Analyse the various types of pitch and their specific purposes.</li>
    <li>Identify the key techniques for an effective pitch.</li>
  </ul>`,
  toc: [
    { id: "what-is-a-pitch", label: "What is a pitch?" },
    { id: "why-pitch", label: "Why do we pitch?" },
    { id: "types", label: "The main types of pitch" },
    { id: "techniques", label: "Key techniques" },
    { id: "illustration", label: "Worked illustration" }
  ],
  body: `
    <h2 id="what-is-a-pitch">What is a pitch?</h2>
    <div class="callout callout--definition">
      <p class="callout-title">Definition — pitch</p>
      <p>A pitch is a brief, concise presentation delivered to persuade an audience about an idea, product, service, project or proposal. Pitches highlight key benefits, unique features and potential impact. They aim to engage the audience’s interest, address their needs, and inspire action.</p>
      <p>A pitch is <em>not</em> an extended, detailed explanation of a whole business plan, and it is <em>not</em> a casual chat — it is short and purposeful.</p>
    </div>
    <p class="muted">Glossary: ${term("persuasive", "(adj.) able to make others believe something or do something.")} — able to make others believe something or do something.</p>

    <h2 id="why-pitch">Why do we pitch?</h2>
    <p>Pitches are used primarily to <strong>persuade</strong> — to secure support or investment. They also <strong>inform</strong> stakeholders about new ideas and their value, and they <strong>create opportunities for collaboration</strong>, letting you share thinking and gain feedback.</p>

    <h2 id="types">Where pitches happen — the main types</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Type</th><th>Typical occasion</th><th>Purpose</th><th>Audience</th></tr></thead>
        <tbody>
          <tr><td><strong>Sales pitch</strong></td><td>Sales meetings, product launches, trade shows, direct marketing.</td><td>To sell a product or service.</td><td>Potential customers or clients.</td></tr>
          <tr><td><strong>Business / Startup pitch</strong></td><td>Investor meetings, startup competitions, showcases, crowdfunding.</td><td>To persuade investors or stakeholders to back a business idea.</td><td>Investors, business partners, venture capitalists, decision-makers.</td></tr>
          <tr><td><strong>Project pitch</strong></td><td>Team meetings, academic presentations, competitions, fundraising.</td><td>To gain approval or resources for a specific project.</td><td>Management, colleagues, teachers, committees, donors.</td></tr>
          <tr><td><strong>Creative / Idea pitch</strong></td><td>Advertising and marketing campaigns, pitch events, industry forums.</td><td>To showcase a creative idea and win support or collaboration.</td><td>Clients, creative directors, executives, producers.</td></tr>
          <tr><td><strong>Personal pitch</strong></td><td>Job interviews, networking events.</td><td>To introduce yourself and highlight your skills or experience.</td><td>Employers, recruiters, industry peers.</td></tr>
          <tr><td><strong>Elevator pitch</strong></td><td>Short encounters at events or in informal settings.</td><td>To spark interest fast — in the time of a lift ride — and open the door to a follow-up.</td><td>Decision-makers, investors, potential partners.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted">The elevator pitch is covered in depth in <a href="unit-6.html">Unit 6</a>.</p>
    <p class="muted">Glossary:
      ${term("investor", "a person or organisation that puts money into a business or project to make a profit.")},
      ${term("venture capitalist", "one who invests in new or growing businesses, usually involving risk.")} and
      ${term("entrepreneur", "a person who starts and runs their own business, taking risks to create new products or services.")}.</p>

    <h2 id="techniques">Key techniques that make a pitch effective</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>The best pitches layer several techniques into a short space. Aim to combine them rather than relying on any one.</p>
    </div>
    <ul>
      <li>Start with a <strong>strong hook</strong> — a relatable, sensory or surprising opening.</li>
      <li>Be <strong>direct and concise</strong>; highlight the key points.</li>
      <li>Use <strong>shocking facts</strong> to capture attention.</li>
      <li><strong>Back up ideas with data or statistics</strong> to build credibility.</li>
      <li><strong>Emphasise benefits</strong> that address the audience’s needs.</li>
      <li><strong>Present credentials</strong> to build trust.</li>
      <li><strong>Share personal experience</strong> to create resonance.</li>
      <li><strong>Engage with rhetorical questions.</strong></li>
    </ul>
    <p class="muted">Glossary:
      ${term("credibility", "the quality of being trusted and believed.")},
      ${term("credentials", "qualifications that prove a person's skills and experience.")},
      ${term("resonance", "the quality of connecting deeply with people's feelings.")} and
      ${term("rhetorical question", "a question asked to emphasise an idea, not to get an answer.")}.</p>

    <h2 id="illustration">Worked illustration</h2>
    <div class="example">
      <p class="example-label">Example pitch — how techniques combine</p>
      <p>In a well-known pitch for a self-cleaning water bottle, the presenter opened with a relatable, sensory hook (“Have you ever noticed that funky smell from your reusable bottle?”), used a shocking comparison (“more bacteria than a dog’s bowl or a toilet seat”), shared personal experience, cited a co-founder’s credentials, and backed claims with data.</p>
      <p>Notice how several techniques combine in a single short pitch — that layering is what makes a pitch land.</p>
    </div>`
};

/* ---------------- UNIT 2 ---------------- */
const unit2 = {
  n: 2, title: "Crafting a Pitch Step-by-Step", file: "unit-2.html",
  blurb: "Purpose, audience, the six-part structure, and writing hooks.",
  objectives: `<ul>
    <li>Identify the steps for developing a pitch.</li>
    <li>Write a well-defined purpose statement.</li>
    <li>Identify how audience factors shape content.</li>
    <li>Recognise the structure of a pitch.</li>
    <li>Write attention-grabbing hooks.</li>
  </ul>`,
  toc: [
    { id: "five-steps", label: "The five steps" },
    { id: "purpose", label: "Step 1 — Purpose statement" },
    { id: "audience", label: "Step 2 — Understanding your audience" },
    { id: "structure", label: "Step 3 — Six components" },
    { id: "hooks", label: "Step 4 — Hooking your audience" }
  ],
  body: `
    <h2 id="five-steps">The five steps for developing a pitch</h2>
    <ol class="steps">
      <li><strong>Identify your purpose.</strong></li>
      <li><strong>Understand your audience</strong> and their pain points / needs.</li>
      <li><strong>Develop compelling pitch content.</strong></li>
      <li><strong>Choose the right visual aids.</strong></li>
      <li><strong>Practise your delivery.</strong></li>
    </ol>

    <h2 id="purpose">Step 1 — Writing a clear purpose statement</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>A well-defined purpose keeps your whole pitch focused. A good purpose statement contains <strong>three elements</strong>.</p>
    </div>
    <ul>
      <li><strong>Target audience</strong> — who will use or benefit from the idea, product or service.</li>
      <li><strong>Benefits</strong> — the advantage or value you provide.</li>
      <li><strong>Call to action</strong> — the action you want the audience to take.</li>
    </ul>
    <div class="callout callout--dont">
      <p class="callout-title"><span class="ic" aria-hidden="true">✗</span> Don’t</p>
      <p>“To tell people about our new app.” — vague: no specific audience, benefit or action.</p>
    </div>
    <div class="callout callout--do">
      <p class="callout-title"><span class="ic" aria-hidden="true">✓</span> Do</p>
      <p>“To convince [audience] to [action] by showing how it [benefit].” — clear: it names the audience, the benefit and the desired action.</p>
    </div>

    <h2 id="audience">Step 2 — Understanding your audience</h2>
    <p>Tailor your content to three factors:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Audience factor</th><th>What to adapt</th></tr></thead>
        <tbody>
          <tr><td><strong>Background</strong></td><td>Your communication style (formal or informal) and which examples and references you use.</td></tr>
          <tr><td><strong>Needs</strong></td><td>Which features and solutions you highlight, and how you connect benefits to their goals, pain points and aspirations.</td></tr>
          <tr><td><strong>Knowledge level</strong></td><td>How much technical language and how much background explanation you include.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout callout--key">
      <p class="callout-title">The principle</p>
      <p>Pitch from the <em>audience’s</em> perspective, not your own. A message reframed around what the listener cares about resonates; the same facts stated from your own viewpoint often don’t.</p>
    </div>

    <h2 id="structure">Step 3 — The structure of a pitch: six components</h2>
    <p>This six-part structure is the spine of the whole course. Present your points <strong>in this order</strong>:</p>
    <div class="flow">
      <div class="flow-item"><span class="flow-num">1</span><div><strong>Self-introduction</strong> — a brief introduction of yourself with some background.</div></div>
      <div class="flow-item"><span class="flow-num">2</span><div><strong>Hook</strong> — an engaging opening (statement, question or striking fact) that captures attention and sparks interest.</div></div>
      <div class="flow-item"><span class="flow-num">3</span><div><strong>Problem statement</strong> — a description of the issue or challenge to be addressed.</div></div>
      <div class="flow-item"><span class="flow-num">4</span><div><strong>Solution</strong> — the idea, product or service that solves the problem.</div></div>
      <div class="flow-item"><span class="flow-num">5</span><div><strong>Unique value proposition (UVP)</strong> — what makes your solution different from or better than the alternatives.</div></div>
      <div class="flow-item"><span class="flow-num">6</span><div><strong>Call to action</strong> — a clear, direct prompt to act.</div></div>
    </div>

    <h2 id="hooks">Step 4 — Hooking your audience</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>A strong opening hooks attention, shows why the pitch matters to the listener, sparks curiosity and urgency, and sets a persuasive tone.</p>
    </div>
    <p>Four reliable hook techniques:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Technique</th><th>How it works</th><th>Example opener</th></tr></thead>
        <tbody>
          <tr><td>Surprising fact or statistic</td><td>A striking number shows the scale of the problem.</td><td>“Only 30% of projects are delivered on time and on budget.”</td></tr>
          <tr><td>Compelling question</td><td>A thought-provoking question tied to the audience’s pain point.</td><td>“What if you could stay one step ahead of every threat?”</td></tr>
          <tr><td>Vivid story</td><td>A short, relatable tale of struggle and success creates emotional connection.</td><td>“Let me tell you about someone who almost gave up — until…”</td></tr>
          <tr><td>Quotation</td><td>A relevant line from a notable figure frames your idea.</td><td>“As [notable figure] said, ‘…’.”</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bank"><div class="bank-group">
      <h3>Useful hook expressions</h3>
      <ul>
        <li><strong>Surprising fact:</strong> “According to …”, “Do you realise …?”</li>
        <li><strong>Compelling question:</strong> “What if …?”, “How many times have you …?”, “Do you know …?”</li>
        <li><strong>Vivid story:</strong> “Let me tell you about …”</li>
        <li><strong>Quotation:</strong> “[Name] once said, ‘…’”, “As [name] emphasises, ‘…’”</li>
      </ul>
    </div></div>`
};

/* ---------------- UNIT 3 ---------------- */
const unit3 = {
  n: 3, title: "Storytelling Your Pitch", file: "unit-3.html",
  blurb: "The Setting–Struggle–Solution framework, plus intonation and pauses.",
  objectives: `<ul>
    <li>Apply storytelling to craft a persuasive pitch.</li>
    <li>Create an engaging setting.</li>
    <li>Highlight the struggle to create resonance and urgency.</li>
    <li>Present a solution that demonstrates value.</li>
    <li>Use intonation and pauses to deliver persuasively.</li>
  </ul>`,
  toc: [
    { id: "3s", label: "The 3S framework" },
    { id: "setting", label: "Establishing the setting" },
    { id: "struggle", label: "Highlighting the struggle" },
    { id: "solution", label: "Presenting the solution" },
    { id: "delivery", label: "Intonation and pauses" }
  ],
  body: `
    <h2 id="3s">The 3S storytelling framework</h2>
    <div class="card-grid cols-3">
      <div class="card"><h3>Setting</h3><p>Establish the context. This sets the stage, hooks attention and sparks curiosity.</p></div>
      <div class="card"><h3>Struggle</h3><p>Highlight the audience’s pain point. This creates resonance and urgency.</p></div>
      <div class="card"><h3>Solution</h3><p>Present a proposition that addresses the struggle. This demonstrates your value.</p></div>
    </div>
    <p class="muted">Glossary:
      ${term("proposition", "an idea or plan of action suggested to address a problem or need.")},
      ${term("pain point", "a problem or difficulty.")} and
      ${term("rapport", "a friendly relationship in which people understand each other well.")}.</p>

    <h2 id="setting">Establishing the setting</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>Beyond the four hook techniques from Unit 2, two more strategies draw the audience in.</p>
    </div>
    <ol>
      <li><strong>Ask personalised questions</strong> that connect to the listener’s own experience — “Have you ever…?”, “How many of you have…?”</li>
      <li><strong>Place the audience in the scene</strong> with scene-starters — “Imagine…”, “Picture yourself…”, “Think about a time when…”, “Remember when…”. These immerse the listener and spark imagination.</li>
    </ol>

    <h2 id="struggle">Highlighting the struggle</h2>
    <p>This is where resonance is won. Make the problem feel relevant and urgent. Four strategies:</p>
    <ol>
      <li><strong>Talk about relatable, familiar experiences</strong> — “Many of us have experienced…”, “It’s a familiar situation when…”. This shows you understand their world.</li>
      <li><strong>Use inclusive pronouns</strong> — “we” and “us” position you alongside the audience, creating shared experience and rapport.</li>
      <li><strong>Use emotional language</strong> — name the feelings the problem causes (overwhelmed, trapped, frustrated, worried). Naming emotions deepens connection.</li>
      <li><strong>Highlight negative consequences</strong> — show what happens if the problem goes unsolved (“…leading to missed opportunities and lost advantage”). This creates urgency and motivates action. Present-participle clauses (“resulting in…”, “giving rise to…”, “creating…”) are a tidy way to express consequences.</li>
    </ol>
    <div class="callout callout--definition">
      <p class="callout-title">Useful struggle vocabulary</p>
      <p><strong>Verbs:</strong> struggle with, grapple with, face, encounter, deal with.<br>
      <strong>Nouns:</strong> challenge, concern, obstacle, difficulty, struggle.<br>
      <strong>Phrases:</strong> “Many of us have experienced…”, “Time and again, we find ourselves…”, “We’ve all faced moments when…”.</p>
    </div>

    <h2 id="solution">Presenting the solution</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>When you introduce your solution, present both its <strong>features</strong> and its <strong>benefits</strong> — what it is <em>and</em> what it does for the audience. Keep the language positive and active (“enables you to…”, “makes … effortless”, “gives you …”).</p>
    </div>
    <p>Useful sentence frames: “Real-time X allows you to…”, “Y provides you with…”, “Z ensures that you can…”.</p>

    <h2 id="delivery">Delivery: intonation and pauses</h2>
    <h3>Intonation</h3>
    <p>Intonation is the rise and fall of your voice. It conveys emotion, emphasises key points, and signals sentence type.</p>
    <div class="callout callout--do">
      <p class="callout-title"><span class="ic" aria-hidden="true">✓</span> Do</p>
      <ul>
        <li>Use <strong>rising</strong> intonation at the end of <strong>yes/no questions</strong>.</li>
        <li>Use <strong>falling</strong> intonation at the end of <strong>information (wh-) questions</strong> and statements.</li>
      </ul>
    </div>
    <h3>Pauses</h3>
    <p>Pauses give listeners time to think and let your points land. Pause:</p>
    <ul>
      <li>after a question — let it sink in;</li>
      <li>after a vivid image or statistic — let them process it;</li>
      <li>after introducing a problem — let them feel connected;</li>
      <li><em>before</em> a solution — build anticipation;</li>
      <li>after stating benefits — let the value register.</li>
    </ul>`
};

/* ---------------- UNIT 4 ---------------- */
const unit4 = {
  n: 4, title: "Crafting Your Unique Value Proposition", file: "unit-4.html",
  blurb: "The UVP, persuasive closings, visuals, eye contact and body language.",
  objectives: `<ul>
    <li>Craft a compelling UVP.</li>
    <li>Conclude persuasively.</li>
    <li>Design effective visuals.</li>
    <li>Deliver using appropriate non-verbal communication.</li>
  </ul>`,
  toc: [
    { id: "what-is-uvp", label: "What is a UVP?" },
    { id: "sweet-spot", label: "The UVP sweet spot" },
    { id: "uvp-expressions", label: "Useful UVP expressions" },
    { id: "closing", label: "Closing persuasively" },
    { id: "visuals", label: "Elevating with visuals" },
    { id: "nonverbal", label: "Eye contact & body language" }
  ],
  body: `
    <h2 id="what-is-uvp">What is a UVP?</h2>
    <div class="callout callout--definition">
      <p class="callout-title">Definition — unique value proposition</p>
      <p>A unique value proposition explains what makes your solution distinct, and why the audience should choose it over the alternatives.</p>
    </div>
    <p>A strong UVP:</p>
    <ul>
      <li>describes the <strong>distinct features or benefits</strong> of your solution;</li>
      <li>explains how it <strong>addresses the audience’s problem</strong>;</li>
      <li>emphasises how it <strong>differs from competitors</strong>, convincing the audience to choose you.</li>
    </ul>

    <h2 id="sweet-spot">The UVP sweet spot</h2>
    <p>Your UVP sits where three things meet:</p>
    <div class="card-grid cols-3">
      <div class="card"><h3>What customers need</h3><p>The pain points and goals of your audience.</p></div>
      <div class="card"><h3>What you do well</h3><p>Your genuine strengths and capabilities.</p></div>
      <div class="card"><h3>Beyond what competitors do</h3><p>Where you go further than the alternatives.</p></div>
    </div>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>The UVP is the point where your strengths satisfy the audience’s needs <em>better</em> than the alternatives.</p>
    </div>
    <div class="callout callout--definition">
      <p class="callout-title">Questions to define your UVP</p>
      <ul>
        <li>What are the audience’s pain points, and what do they really want?</li>
        <li>How does your solution meet those needs?</li>
        <li>Why should they choose you over a competitor?</li>
        <li>What benefit motivates them to act?</li>
      </ul>
    </div>

    <h2 id="uvp-expressions">Useful UVP expressions</h2>
    <div class="bank">
      <div class="bank-group">
        <h3>Describing distinct value</h3>
        <p>“What makes … unique is …”, “What’s special is …”, “What really sets … apart is …”, “What distinguishes … is …”, “Unlike other options, …”, “Our solution is the only one that …”.</p>
      </div>
      <div class="bank-group">
        <h3>Emphasising benefits</h3>
        <p>“You’ll benefit from …”, “It’s designed to help you …”, “I’m confident you’ll gain …”, “Enjoy the advantage of …”.</p>
      </div>
    </div>

    <h2 id="closing">Closing persuasively</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>A strong closing reinforces the benefit and drives action. Two components work together.</p>
    </div>
    <ol>
      <li><strong>A rhetorical question</strong> — either <em>benefit-focused</em> (“Ready to turn your data into an asset?”) or <em>pain-point-focused</em> (“Tired of seeing good ideas go to waste?”).</li>
      <li><strong>A call to action (CTA)</strong> — use the <strong>imperative</strong> (“Adopt…”, “Start…”, “Book…”), add a <strong>time expression</strong> (“today”, “now”) for urgency, and <strong>reinforce the benefit</strong>. Then thank the audience.</li>
    </ol>

    <h2 id="visuals">Elevating your pitch with visuals</h2>
    <div class="callout callout--do">
      <p class="callout-title"><span class="ic" aria-hidden="true">✓</span> Do — effective slides have</p>
      <ul>
        <li>a clear, specific title;</li>
        <li>short phrases or bullet points (not paragraphs);</li>
        <li>meaningful images or icons;</li>
        <li>where relevant, a prompt to act (e.g. a QR code).</li>
      </ul>
    </div>
    <p>Visuals simplify complex information and make a pitch memorable. They can also tell a story — moving from problem → solution → action — with a clear narrative flow, data-driven framing, a solution highlight, and an effective call to action.</p>

    <h2 id="nonverbal">Delivery: eye contact and body language</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Cue</th><th>What to do</th><th>Why it matters</th></tr></thead>
        <tbody>
          <tr><td><strong>Eye contact</strong></td><td>Maintain steady eye contact.</td><td>Builds trust and makes the audience feel connected.</td></tr>
          <tr><td><strong>Posture</strong></td><td>Stand upright, weight on both feet.</td><td>Conveys confidence and professionalism.</td></tr>
          <tr><td><strong>Gestures</strong></td><td>Use natural hand movements; point to visuals to highlight key points.</td><td>Keeps the audience engaged and directs attention.</td></tr>
          <tr><td><strong>Overall</strong></td><td>Deliver a well-rehearsed pitch confidently; smile; look relaxed and at ease.</td><td>Pair this with effective, direct language and a clean pitch deck.</td></tr>
        </tbody>
      </table>
    </div>`
};

/* ---------------- UNIT 5 ---------------- */
const unit5 = {
  n: 5, title: "Crafting and Delivering an Effective Pitch", file: "unit-5.html",
  blurb: "Evaluating pitches, assembling a full pitch, peer feedback, self-reflection.",
  objectives: `<ul>
    <li>Analyse and evaluate pitches.</li>
    <li>Synthesise information into a persuasive pitch.</li>
    <li>Deliver with confidence.</li>
    <li>Give constructive peer feedback.</li>
    <li>Reflect on your own performance.</li>
  </ul>`,
  toc: [
    { id: "checklist", label: "The effective-pitch checklist" },
    { id: "strong-vs-weak", label: "Strong vs weak pitches" },
    { id: "assembling", label: "Assembling a pitch" },
    { id: "feedback", label: "Practising with feedback" },
    { id: "reflection", label: "Self-reflection prompts" }
  ],
  body: `
    <h2 id="checklist">The effective-pitch checklist</h2>
    <ul class="checklist">
      <li><strong>Content:</strong> a clear opening with a self-introduction and the company’s/your mission.</li>
      <li><strong>Content:</strong> an engaging hook that captures attention.</li>
      <li><strong>Content:</strong> a relatable problem statement that creates resonance and urgency.</li>
      <li><strong>Content:</strong> an effective solution that addresses the problem.</li>
      <li><strong>Content:</strong> a unique value proposition showing distinct features.</li>
      <li><strong>Content:</strong> a strong call to action.</li>
      <li><strong>Delivery:</strong> appropriate intonation and pauses.</li>
      <li><strong>Delivery:</strong> confident body language and eye contact.</li>
      <li><strong>Visual aids:</strong> relevant visuals with relatable images, icons and concise language.</li>
    </ul>
    <p class="muted">This checklist is reproduced as a printable card on the <a href="reference.html#checklist">Reference page</a>.</p>

    <h2 id="strong-vs-weak">What separates a strong pitch from a weak one</h2>
    <div class="callout callout--do">
      <p class="callout-title"><span class="ic" aria-hidden="true">✓</span> A strong pitch</p>
      <p>uses a genuine hook, a problem statement that creates urgency, varied intonation and confident delivery.</p>
    </div>
    <div class="callout callout--dont">
      <p class="callout-title"><span class="ic" aria-hidden="true">✗</span> A weak pitch</p>
      <p>states facts flatly, skips the hook and urgency, leans on vague language (“it’s awesome”, “it’s good for the planet”), and delivers in a monotone.</p>
    </div>
    <p>Same product — very different persuasive power.</p>

    <h2 id="assembling">Assembling a pitch — the workflow</h2>
    <ol class="steps">
      <li>Read the product/brief and note the audience and their pain point.</li>
      <li>Use an <strong>idea map</strong> across the six components (Hook · Problem · Solution · UVP · Call to action) to organise points before writing.</li>
      <li>Draft a short pitch (around 1.5 minutes) following the structure.</li>
      <li>Practise, get feedback, refine.</li>
    </ol>

    <h2 id="feedback">Practising with feedback</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea</p>
      <p>Sharpening a pitch needs consistent practice and constructive feedback. Two useful sources work best together.</p>
    </div>
    <ul>
      <li><strong>Peers</strong> — use an evaluation form; give <em>specific, constructive</em> feedback on content and structure.</li>
      <li><strong>AI delivery tools</strong> (e.g. presentation/speaker-feedback tools) — record your pitch and get instant feedback on pace, filler words, intonation and volume; track progress over time; practise privately before presenting.</li>
    </ul>
    <p>Used together, peers cover content while AI tools cover delivery — a balanced view.</p>

    <h2 id="reflection">Self-reflection prompts</h2>
    <ul>
      <li>What strengths did others consistently praise?</li>
      <li>What one area was repeatedly flagged for improvement, and why is it hard for you?</li>
      <li>What will you change next time, and how?</li>
      <li>How did combining different feedback sources improve your understanding of your performance?</li>
    </ul>`
};

/* ---------------- UNIT 6 ---------------- */
const unit6 = {
  n: 6, title: "Building an Elevator Pitch", file: "unit-6.html",
  blurb: "What it is, how it differs from a full pitch, and how to condense one.",
  objectives: `<ul>
    <li>Define an elevator pitch and its purposes.</li>
    <li>Identify its key components.</li>
    <li>Recognise the similarities and differences between a general pitch and an elevator pitch.</li>
    <li>Analyse techniques for an effective one.</li>
    <li>Condense a pitch into an elevator pitch.</li>
  </ul>`,
  toc: [
    { id: "what-is-elevator", label: "What is an elevator pitch?" },
    { id: "vs-general", label: "General vs elevator pitch" },
    { id: "techniques", label: "Techniques" },
    { id: "condense", label: "How to condense" },
    { id: "forget", label: "If you forget your script" }
  ],
  body: `
    <h2 id="what-is-elevator">What is an elevator pitch?</h2>
    <div class="callout callout--definition">
      <p class="callout-title">Definition — elevator pitch</p>
      <p>An elevator pitch is a condensed version of a pitch designed to deliver a compelling message in <strong>30–60 seconds</strong> — roughly the length of a lift ride. It succinctly outlines <strong>who you are, what you do, and the value you offer</strong>, capturing the listener’s interest.</p>
      <p>It is used in professional settings to spark curiosity and open the door to a deeper conversation. It should <em>not</em> contain every detail; it focuses on essentials and aims to earn a follow-up.</p>
    </div>
    <p class="muted">Glossary:
      ${term("succinctly", "using only a few words that state something clearly.")},
      ${term("condensed", "made shorter in length.")} and
      ${term("condense", "(v.) to put a piece of writing into fewer words.")}.</p>

    <h2 id="vs-general">General pitch vs elevator pitch</h2>
    <h3>Similarities</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Aspect</th><th>Shared by both</th></tr></thead>
        <tbody>
          <tr><td><strong>Purpose</strong></td><td>Both aim to persuade and spark interest in an idea, product or project.</td></tr>
          <tr><td><strong>Structure</strong></td><td>Both include a hook, problem, solution, UVP and call to action.</td></tr>
          <tr><td><strong>Language</strong></td><td>Both use clear, concise language.</td></tr>
        </tbody>
      </table>
    </div>
    <h3>Differences</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Aspect</th><th>General pitch</th><th>Elevator pitch</th></tr></thead>
        <tbody>
          <tr><td><strong>Length</strong></td><td>2–3 minutes or longer</td><td>30–60 seconds</td></tr>
          <tr><td><strong>Setting</strong></td><td>Formal (e.g. investor meetings)</td><td>Brief/informal (e.g. networking)</td></tr>
          <tr><td><strong>Depth</strong></td><td>Detailed explanations, plans, data, demos</td><td>Key, essential points to spark interest</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="techniques">Techniques for an effective elevator pitch</h2>
    <p>Compress the essentials. Use:</p>
    <ul>
      <li>a relatable or familiar experience;</li>
      <li>a surprising statistic;</li>
      <li>a personal connection to the problem;</li>
      <li>an interactive, engaging question;</li>
      <li>a clear description of the solution’s features and functions;</li>
      <li>a highlight of the UVP;</li>
      <li>and a call to action.</li>
    </ul>

    <h2 id="condense">How to condense a full pitch</h2>
    <div class="callout callout--do">
      <p class="callout-title"><span class="ic" aria-hidden="true">✓</span> Keep</p>
      <p>The five core beats — opening &amp; hook, problem statement, solution, UVP, call to action. Retain the single most striking fact, the clearest statement of the problem, the headline benefit, the one thing that makes you different, and the ask.</p>
    </div>
    <div class="callout callout--dont">
      <p class="callout-title"><span class="ic" aria-hidden="true">✗</span> Strip</p>
      <p>Everything else — detailed explanations, plans, data tables and demos that belong in a full pitch.</p>
    </div>

    <h2 id="forget">If you forget your script</h2>
    <div class="callout callout--key">
      <p class="callout-title">Key idea — four recovery tips</p>
    </div>
    <ol class="steps">
      <li><strong>Focus on key points</strong> — internalise the 3–5 core ideas (problem, solution, call to action) rather than memorising word-for-word, so you can speak naturally if you blank.</li>
      <li><strong>Use visual or mental cues</strong> — link parts of your pitch to images or slides; glance at one to jog your memory.</li>
      <li><strong>Prepare a recovery phrase</strong> — have a go-to line (“Let me highlight the main idea here…”, “What’s really important is…”) to transition back smoothly.</li>
      <li><strong>Pause and breathe</strong> — if you lose your place, breathe, smile, pause briefly, and recall the next point without panicking.</li>
    </ol>
    <p class="muted">A small notecard with bullet points — not full sentences — is a fair safety net if permitted.</p>`
};

const list = [unit1, unit2, unit3, unit4, unit5, unit6];

/* ---------------- REFERENCE PAGE (§6) ---------------- */
const glossary = [
  ["Call to action", "A clear, direct prompt telling the audience the action you want them to take."],
  ["Condensed", "Made shorter in length."],
  ["Credentials", "Qualifications that prove a person’s skills and experience."],
  ["Credibility", "The quality of being trusted and believed."],
  ["Elevator pitch", "A condensed pitch delivered in 30–60 seconds to spark interest and earn a follow-up."],
  ["Entrepreneur", "A person who starts and runs their own business, taking risks to create new products or services."],
  ["Hook", "An engaging opening — a statement, question or striking fact — that captures attention and sparks interest."],
  ["Investor", "A person or organisation that puts money into a business or project to make a profit."],
  ["Pain point", "A problem or difficulty experienced by the audience."],
  ["Persuasive", "Able to make others believe something or do something."],
  ["Pitch", "A brief, concise presentation delivered to persuade an audience about an idea, product, service, project or proposal."],
  ["Proposition", "An idea or plan of action suggested to address a problem or need."],
  ["Rapport", "A friendly relationship in which people understand each other well."],
  ["Resonance", "The quality of connecting deeply with people’s feelings."],
  ["Rhetorical question", "A question asked to emphasise an idea, not to get an answer."],
  ["Succinctly", "Using only a few words that state something clearly."],
  ["UVP (unique value proposition)", "What makes your solution different from or better than the alternatives."],
  ["Venture capitalist", "A person who invests in new or growing businesses, usually involving risk."]
];

const reference = `
  <section class="page container">
    <span class="tag">LAN4104</span>
    <h1>Reference &amp; revision</h1>
    <p class="lead reading">Everything you’ll want for revision in one place: the glossary, a bank of useful expressions, and the printable Effective Pitch Checklist.</p>
    <p><button class="btn" type="button" onclick="window.print()">🖨 Print this page</button></p>

    <h2 id="glossary">A · Glossary</h2>
    <dl class="gloss reading">
      ${glossary.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("\n      ")}
    </dl>

    <h2 id="expressions">B · Useful-expressions bank</h2>
    <div class="bank">
      <div class="bank-group">
        <h3>Hooks</h3>
        <p>“According to …”, “Do you realise …?”, “What if …?”, “How many times have you …?”, “Let me tell you about …”, “[Name] once said, ‘…’”.</p>
      </div>
      <div class="bank-group">
        <h3>Relating to the struggle</h3>
        <p>“Many of us have experienced…”, “Time and again, we find ourselves…”, “We’ve all faced moments when…”. Verbs: struggle with, grapple with, face, encounter, deal with. Nouns: challenge, concern, obstacle, difficulty, struggle.</p>
      </div>
      <div class="bank-group">
        <h3>Presenting the solution</h3>
        <p>“Real-time X allows you to…”, “Y provides you with…”, “Z ensures that you can…”, “…enables you to…”, “…makes … effortless”, “…gives you …”.</p>
      </div>
      <div class="bank-group">
        <h3>Describing the UVP</h3>
        <p>“What makes … unique is …”, “What’s special is …”, “What really sets … apart is …”, “What distinguishes … is …”, “Unlike other options, …”, “Our solution is the only one that …”.</p>
      </div>
      <div class="bank-group">
        <h3>Emphasising benefits</h3>
        <p>“You’ll benefit from …”, “It’s designed to help you …”, “I’m confident you’ll gain …”, “Enjoy the advantage of …”.</p>
      </div>
      <div class="bank-group">
        <h3>Closing &amp; call to action</h3>
        <p>Benefit-focused question: “Ready to turn your data into an asset?” Pain-point question: “Tired of seeing good ideas go to waste?” CTA: imperative + time expression + benefit (“Adopt … today and …”). Then thank the audience.</p>
      </div>
    </div>

    <h2 id="checklist">C · The Effective Pitch Checklist</h2>
    <p class="muted">Tick each item before you deliver.</p>
    <h3>Content</h3>
    <ul class="checklist">
      <li>A clear opening with a self-introduction and the company’s/your mission.</li>
      <li>An engaging hook that captures attention.</li>
      <li>A relatable problem statement that creates resonance and urgency.</li>
      <li>An effective solution that addresses the problem.</li>
      <li>A unique value proposition showing distinct features.</li>
      <li>A strong call to action.</li>
    </ul>
    <h3>Delivery</h3>
    <ul class="checklist">
      <li>Appropriate intonation and pauses.</li>
      <li>Confident body language and eye contact.</li>
    </ul>
    <h3>Visual aids</h3>
    <ul class="checklist">
      <li>Relevant visuals with relatable images, icons and concise language.</li>
    </ul>

    <p style="margin-top:2rem"><a class="btn btn--ghost" href="index.html">← Back to LAN4104 overview</a></p>
  </section>`;

module.exports = { list, reference };
