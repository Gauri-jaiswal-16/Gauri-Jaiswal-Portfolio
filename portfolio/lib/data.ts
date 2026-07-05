// All content here is drawn directly from Gauri's resume, GitHub, LinkedIn,
// Difmo certificate, and the project assets she provided. Nothing here is
// invented — in-progress skills are labeled as in-progress rather than
// presented as completed expertise.

export const profile = {
  name: "Gauri Jaiswal",
  title: "AI/ML Engineering Student · UI/UX Designer · Flutter Developer (learning)",
  location: "Bahraich, Uttar Pradesh, India",
  email: "gaurijaiswal406@gmail.com",
  phone: "927-706-0358",
  github: "https://github.com/Gauri-jaiswal-16",
  linkedin:
    "https://www.linkedin.com/in/gauri-jaiswal-b8a712366",
  resumeUrl: "/resume.pdf",
  headline: "Learning to build intelligent software, one real project at a time.",
  intro:
    "I'm a first-year B.Tech student in Artificial Intelligence & Machine Learning at Uttranchal University, working toward becoming an AI/ML engineer. My proven experience is in UI/UX design, video editing, and front-end fundamentals — and alongside that, I've been building small, real GenAI experiments: a local-model API, a tool-calling agent, structured reasoning, and a RAG ingestion pipeline. Some of it is polished, some of it is honestly still rough — I'd rather show you exactly where I am than dress it up.",
  roles: [
    "AI Engineer",
    "RAG Developer",
    "Flutter Developer",
    "Python Developer",
    "Problem Solver",
  ],
};

export const about = {
  paragraphs: [
    "I'm in my first year of a B.Tech in Artificial Intelligence & Machine Learning, and my career goal is to grow into an AI/ML engineering and LLM research role. That goal is still ahead of me — what I have today is a solid design and front-end foundation, built through real client work.",
    "Over a six-month UI/UX design internship at Difmo Private Limited, I designed interfaces for live products, worked directly with clients, and shipped work that real users interact with. Alongside that, I edit video professionally in CapCut and have been teaching myself web fundamentals with HTML, CSS, JavaScript, and React.",
    "On the AI/ML side, I've moved past just reading docs: my GenAI-Projects GitHub repo has working scripts for a local-model API, a tool-calling agent, structured reasoning, and the ingestion half of a RAG pipeline, alongside a couple of experiments that are honestly still buggy. I'm not going to round that up into 'production AI systems' — some of it is small, one script has a known bug — but it's real, running code, and this section grows as more of it comes together.",
  ],
};

export const experience = [
  {
    company: "Difmo Private Limited",
    role: "UI/UX Designer & Video Editor (Freelance)",
    period: "Feb 2026 – May 2026 · 6 months",
    bullets: [
      "Designed user-friendly, visually clean UI/UX layouts for live client projects, with a focus on usability and accessibility.",
      "Built wireframes, prototypes, and interface designs in Figma across three products: NextZeni Academy, ToLetForRent, and an internal analytics dashboard (ITBD).",
      "Worked directly with clients to scope requirements and translate them into design decisions.",
      "Edited and produced client video content in CapCut — transitions, effects, subtitles, and audio sync.",
      "Created posters and branding assets aligned with client marketing campaigns, including festival creatives.",
      "Managed multiple concurrent projects while holding delivery timelines.",
    ],
    certificateImage: "/images/misc/certificate.jpg",
  },
];

export const caseStudies = [
  {
    slug: "nextzeni",
    name: "NextZeni Academy",
    tag: "UI/UX Case Study",
    summary:
      "A skill-driven learning platform for communication training, English fluency, and interview readiness — designed end-to-end in Figma for Difmo's client NextZeni.",
    role: "UI/UX Designer",
    responsibilities: [
      "Designed the full site flow: hero, course categories, 'How It Works', and testimonials.",
      "Built the four-step onboarding pattern (Browse & Choose → Enroll & Access → Learn at Your Pace → Complete & Certify).",
      "Created reusable UI patterns for course cards and step indicators.",
      "Collaborated with developers to hand off designs for build.",
    ],
    process:
      "Started from the client's brief — a communication-skills academy needing to feel trustworthy and outcome-focused — then designed a clear four-step user journey so a first-time visitor immediately understands how the platform works before being asked to enroll.",
    challenge:
      "The course catalog spans multiple skill categories (communication, English fluency, interview prep) that needed to feel organized rather than overwhelming on a single page.",
    outcome:
      "Delivered a learner-centric layout with a scannable course-category grid and a simple 4-step explainer, handed off to development for the live build.",
    learned:
      "Practiced structuring information hierarchy for an audience that isn't tech-first — prioritizing clarity and trust signals over visual complexity.",
    tech: ["Figma", "HTML", "CSS", "JavaScript", "React"],
    images: [
      { src: "/images/nextzeni/nz-1.jpg", alt: "NextZeni Academy hero screen on mobile", width: 1069, height: 580 },
      { src: "/images/nextzeni/nz-2.jpg", alt: "NextZeni Academy about section", width: 1180, height: 699 },
      { src: "/images/nextzeni/nz-3.jpg", alt: "NextZeni Academy how it works flow", width: 1180, height: 699 },
      { src: "/images/nextzeni/nz-4.jpg", alt: "NextZeni Academy tech stack", width: 1180, height: 699 },
      { src: "/images/nextzeni/nz-5.jpg", alt: "NextZeni Academy desktop mockups", width: 1180, height: 699 },
    ],
  },
  {
    slug: "toletforrent",
    name: "ToLetForRent",
    tag: "UI/UX Case Study",
    summary:
      "A rental marketplace connecting property owners and tenants — rooms, flats, PGs, and offices — designed for clarity and fast, location-based search.",
    role: "UI/UX Designer",
    responsibilities: [
      "Designed the property discovery flow: search, filtering by location and price range, and listing detail screens.",
      "Designed the tenant-owner direct communication pattern for enquiries.",
      "Created the trust-building homepage section (community stats, testimonials).",
      "Designed for both web (tablet/desktop) and mobile app layouts.",
    ],
    process:
      "Focused on reducing the number of steps between 'I need a place to live' and 'I found one to contact' — built around a search-first homepage and a map-based property explorer.",
    challenge:
      "Rental search naturally comes with a lot of filters (location, price, property type). The goal was making that feel like a guided search rather than a form to fill out.",
    outcome:
      "Shipped a listing and search experience covering rooms, flats, PGs, and rental homes, with location-based results and a simplified enquiry flow between owners and tenants.",
    learned:
      "Learned to balance information density with visual calm — rental listings need a lot of data (price, size, location) shown at a glance without feeling cluttered.",
    tech: ["Figma", "Flutter", "HTML", "CSS", "Firebase", "React"],
    images: [
      { src: "/images/tolforrent/tlr-1.jpg", alt: "ToLetForRent homepage headline", width: 1171, height: 602 },
      { src: "/images/tolforrent/tlr-2.jpg", alt: "ToLetForRent portfolio overview", width: 1180, height: 647 },
      { src: "/images/tolforrent/tlr-3.jpg", alt: "ToLetForRent app screens", width: 1180, height: 653 },
      { src: "/images/tolforrent/tlr-4.jpg", alt: "ToLetForRent tech stack", width: 1180, height: 628 },
      { src: "/images/tolforrent/tlr-5.jpg", alt: "ToLetForRent mockups on phones", width: 1180, height: 643 },
    ],
  },
];

// Personal / self-directed projects — smaller in scope, described honestly
// based on what she's actually built, without embellishment.
type PersonalProject = {
  name: string;
  tag: string;
  summary: string;
  tech: string[];
  highlights: string[];
  github: string;
  status: string;
  note?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Weather Application",
    tag: "Personal Project",
    summary:
      "A weather app built with live API integration for real-time conditions — her first hands-on project working with an external API and frontend data flow.",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    highlights: [
      "Implemented data fetching from a live weather API.",
      "Built a clean, fully responsive interface.",
      "First project handling asynchronous data and API error states.",
    ],
    github: "https://github.com/Gauri-jaiswal-16",
    status: "Built",
  },
  {
    name: "ITBD Dashboard",
    tag: "UI/UX Project",
    summary:
      "An analytics dashboard UI design exploring information hierarchy and reusable dashboard components — confirmed public repo on GitHub (HTML/CSS).",
    tech: ["HTML", "CSS"],
    highlights: [
      "Designed dashboard layout patterns focused on scanability.",
      "Explored reusable card and chart components.",
    ],
    github: "https://github.com/Gauri-jaiswal-16/ITBD-Dashboard-",
    status: "Built",
    note: "Verified live on GitHub (HTML 44% / CSS 56%) — screenshots to be added once shared.",
  },
];

export const creativeWork = {
  poster: {
    title: "Festival Campaign Poster — Difmo",
    description:
      "Branding creative designed for Difmo's Holi campaign, combining brand identity with a festive, celebratory tone.",
    image: "/images/misc/poster-holi.jpg",
  },
};

// Skills are split honestly: things she can already do vs. things she's
// actively learning. Nothing in "learning" is presented as mastered.
export const skills = {
  design: ["Figma", "Wireframing", "Prototyping", "Canva"],
  webFoundations: ["HTML5", "CSS3", "JavaScript", "React (beginner)"],
  languages: ["Python", "Java", "C", "JavaScript"],
  genai: ["OpenAI API", "Gemini API", "LangChain", "Ollama", "FastAPI", "Qdrant", "RAG Pipelines", "AI Agents", "Embeddings", "Vector Search", "Prompt Engineering", "Tokenization (tiktoken)"],
  creative: ["Video Editing (CapCut)", "Motion Graphics", "Poster Design"],
  tools: ["Git & GitHub (learning)", "MS Excel", "VS Code", "Docker (basic)"],
};

export const currentlyLearning = [
  { name: "Flutter", area: "Mobile Development" },
];

// Real, evidence-based entries — read directly from the contents of the
// "GenAI" GitHub repo (GenAI-main.zip) she provided. Nothing here is
// invented; scope/status language matches exactly what the code does.
// Two things intentionally NOT claimed: LangGraph (not imported anywhere in
// the repo) and a finished end-to-end RAG app (rag_1.py only implements the
// ingestion half — no retrieval/query step exists in the file).
export const aiProjects = [
  {
    slug: "local-llm-api",
    name: "Local LLM API",
    status: "Working",
    objective:
      "Serve a locally-hosted open-weight model through a clean HTTP API instead of calling a hosted provider.",
    tech: ["FastAPI", "Ollama", "Python"],
    architecture:
      "FastAPI app exposes a POST /chat endpoint. On startup it pulls a model (gemma3:1b) into a local Ollama runtime, then forwards each request's message to the local model and returns the response.",
    features: [
      "Single POST /chat endpoint accepting a message body",
      "Local model inference via Ollama — no external API calls",
      "Model pulled and managed programmatically at startup",
    ],
    concepts: ["Self-hosted inference", "API design with FastAPI", "Local vs. hosted model tradeoffs"],
    learned:
      "How self-hosted inference differs from calling OpenAI/Gemini — no per-token cost, but you own the runtime and model management.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/ollama_api.py",
  },
  {
    slug: "tool-agent",
    name: "Tool-Calling AI Agent",
    status: "Working",
    objective:
      "Build an agent that reasons step by step and decides when to call external tools rather than answering directly.",
    tech: ["OpenAI API", "Python", "JSON-structured prompting"],
    architecture:
      "A plan → action → observe → output loop. The model is constrained to strict JSON output at each step; when it emits an 'action' step, the corresponding Python function actually runs and its result is fed back in as an 'observe' step before the loop continues.",
    features: [
      "Weather lookup tool via a live API (wttr.in)",
      "A second tool for running allow-listed shell commands (ls, pwd, whoami) — deliberately restricted, not open shell access",
      "Multi-turn control loop that keeps calling the model until it reaches a final 'output' step",
    ],
    concepts: ["Agentic tool-use", "Structured output constraints", "Multi-step reasoning loops"],
    learned:
      "Getting an LLM to reliably emit parseable JSON across multiple turns is harder than it looks — most of the iteration (visible in the repo's history) went into tightening the prompt rules, not the tool logic itself.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/weather_agent.py",
  },
  {
    slug: "structured-reasoning",
    name: "Structured Reasoning Assistant",
    status: "Working",
    objective:
      "Force a model through explicit, inspectable reasoning steps instead of jumping straight to an answer.",
    tech: ["OpenAI API (gpt-4o-mini)", "Python", "JSON mode"],
    architecture:
      "A system prompt requires the model to move through analyse → think → output → validate → result as separate JSON-formatted turns, one at a time, with the conversation history replayed on every call.",
    features: [
      "Strict per-step JSON schema enforced via the system prompt",
      "Each reasoning step printed separately before the final answer",
      "Uses OpenAI's JSON response-format mode to reduce malformed output",
    ],
    concepts: ["Chain-of-thought prompting", "JSON-constrained generation", "Prompt engineering"],
    learned:
      "How much prompt structure actually changes model behavior — the step-by-step schema visibly slows the model down into more deliberate answers on multi-step problems.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/chat_3.py",
  },
  {
    slug: "rag-ingestion",
    name: "RAG Ingestion Pipeline",
    status: "Partial — ingestion only",
    objective:
      "Build the document-ingestion half of a retrieval-augmented generation pipeline: load a document, chunk it, embed it, and index it for later retrieval.",
    tech: ["LangChain", "Qdrant", "OpenAI Embeddings"],
    architecture:
      "PyPDFLoader reads a PDF, RecursiveCharacterTextSplitter chunks it (1000 chars, 200 overlap), OpenAI's text-embedding-3-large embeds each chunk, and QdrantVectorStore indexes the vectors into a Qdrant collection running via Docker.",
    features: [
      "PDF loading and recursive chunking with overlap",
      "OpenAI text-embedding-3-large for vector generation",
      "Qdrant vector store indexing via Docker Compose",
    ],
    concepts: ["Document chunking strategy", "Embeddings", "Vector databases"],
    learned:
      "This file only covers ingestion — there's no retrieval or answer-generation step yet, so it's honestly a partial pipeline rather than a working RAG app. The natural next step is a query-side script that embeds a question and retrieves against this same collection.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/rag_1.py",
  },
  {
    slug: "agent-memory",
    name: "Persistent Agent Memory",
    status: "Experimental",
    objective:
      "Give a conversational agent long-term memory that persists across sessions, combining a vector store and a graph store.",
    tech: ["mem0", "Qdrant", "Neo4j", "OpenAI API"],
    architecture:
      "Uses the mem0 library configured with OpenAI for embeddings/LLM calls, Qdrant as the vector store, and Neo4j as a graph store for relational memory, wrapped around a basic chat loop.",
    features: [
      "Dual-store memory config (vector + graph) in one mem0 setup",
      "Per-user memory scoping via a user_id",
    ],
    concepts: ["Long-term agent memory", "Vector + graph hybrid storage"],
    learned:
      "This one is genuinely unfinished — there's a bug in how the OpenAI client reads its API key, so it's marked experimental rather than working. Worth noting: the API keys in this repo were originally hardcoded in plaintext and have since been moved to environment variables — a real fix, not just a portfolio talking point.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/memory.py",
  },
  {
    slug: "multi-provider-llm",
    name: "Multi-Provider LLM Calls",
    status: "Working",
    objective: "Get hands-on with more than one hosted LLM provider's API surface.",
    tech: ["OpenAI API", "Gemini API", "Python"],
    architecture: "Minimal direct API calls to OpenAI's chat completions endpoint and Google's Gemini endpoint, run independently.",
    features: ["Basic OpenAI chat completion call", "Basic Gemini generate_content call"],
    concepts: ["API surface comparison across providers"],
    learned: "The request/response shape differs enough between OpenAI and Gemini that provider-agnostic code needs a thin abstraction layer — which LangChain is largely solving in the RAG script above.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/chat.py",
  },
  {
    slug: "tokenization",
    name: "Tokenization Exploration",
    status: "Working",
    objective: "Understand how text is actually tokenized before it reaches a model.",
    tech: ["tiktoken", "Python"],
    architecture: "Encodes and decodes sample text using the gpt-4o tokenizer and inspects vocabulary size and token IDs directly.",
    features: ["Encode/decode round-trip", "Vocabulary size inspection"],
    concepts: ["Tokenization", "How context windows are actually measured"],
    learned: "Token count isn't word count — seeing the actual integer IDs made prompt-length and cost estimation concrete instead of abstract.",
    github: "https://github.com/Gauri-jaiswal-16/GenAI-Projects/blob/main/tokenization.py",
  },
];

export const aiJourney = {
  intro:
    "The scripts below are all from my GenAI-Projects GitHub repo — real, running code, not a roadmap. Some are small and complete; a couple are honestly unfinished, and I've labeled those as experimental rather than dressing them up. LangGraph and a full end-to-end RAG app (retrieval + generation, not just ingestion) aren't in there yet — that's still ahead of me.",
};

// IMPORTANT: kept deliberately independent from the NextZeni / ITBD /
// ToLetForRent case studies per explicit instruction — these are general
// video-editing demo reels, not project walkthroughs, and must never be
// cross-linked with the UI/UX case studies above.
// Repository highlights — confirmed live on her GitHub profile.
export const repoHighlights = [
  {
    name: "GenAI-Projects",
    description: "Hands-on GenAI experiments — see the AI Engineering section above for the full breakdown.",
    url: "https://github.com/Gauri-jaiswal-16/GenAI-Projects",
  },
  {
    name: "ITBD-Dashboard-",
    description: "Analytics dashboard UI design — HTML/CSS.",
    url: "https://github.com/Gauri-jaiswal-16/ITBD-Dashboard-",
  },
  {
    name: "gaurijaiswalcv",
    description: "Personal portfolio / CV project repository.",
    url: "https://github.com/Gauri-jaiswal-16/gaurijaiswalcv",
  },
  {
    name: "html_practice",
    description: "HTML/CSS practice and fundamentals.",
    url: "https://github.com/Gauri-jaiswal-16/html_practice",
  },
];

export const projectDemos = [
  {
    title: "Professional Project Demo",
    description:
      "A professional, client-facing video edit showcasing pacing, transitions, and audio sync in CapCut.",
    thumbnail: "/images/misc/demo-professional.jpg",
    tech: ["CapCut", "Video Editing", "Motion Graphics"],
    driveUrl: "https://drive.google.com/file/d/10Eh8HkDFwsxTIc_gCsD45uiV1LFjrDuU/view?usp=drivesdk",
    cta: "Watch Demo",
  },
  {
    title: "Family Fun Video",
    description:
      "A personal, lighter edit with on-screen text, music sync, and color grading — creative editing outside client work.",
    thumbnail: "/images/misc/demo-family.jpg",
    tech: ["CapCut", "Color Grading", "Creative Editing"],
    driveUrl: "https://drive.google.com/file/d/13Gg1R_Prp8BIh-9WqUjA6xUafw16xJm6/view?usp=drivesdk",
    cta: "Watch Video",
  },
];

export const achievements = [
  {
    title: "Difmo UI/UX Design Internship",
    period: "Feb – May 2026",
    description:
      "Completed a 6-month UI/UX design internship at Difmo Private Limited, certified by the company.",
  },
  {
    title: "NextZeni Academy — Shipped Design",
    period: "2026",
    description:
      "Designed the full UI for NextZeni Academy's learning platform, handed off for development.",
  },
  {
    title: "ToLetForrent — Shipped Design",
    period: "2026",
    description:
      "Designed the rental marketplace experience for ToLetForRent across web and mobile.",
  },
  {
    title: "B.Tech AI/ML — In Progress",
    period: "2025 – 2029",
    description:
      "First-year student at Uttranchal University, building foundations for an AI/ML engineering career.",
  },
];

export const strengths = [
  { title: "Client Communication", description: "Comfortable scoping requirements directly with clients and translating them into design decisions." },
  { title: "Fast Learner", description: "Picked up Figma, video editing, and front-end tools independently while balancing coursework." },
  { title: "Design Craft", description: "Detail-oriented in layout, spacing, and usability — not just visuals." },
  { title: "Honesty About Skill Level", description: "Clear about what's shipped versus what's still in progress, so collaborators know exactly what they're getting." },
  { title: "Consistency", description: "Managed multiple concurrent client projects at Difmo without missing delivery timelines." },
  { title: "Growth Mindset", description: "Actively building toward AI/ML engineering, one real skill at a time." },
];

export const education = {
  degree: "B.Tech, Artificial Intelligence & Machine Learning",
  school: "Uttranchal University",
  period: "2025 – 2029",
};

export const languages = ["English (Fluent)", "Hindi (Fluent)"];
