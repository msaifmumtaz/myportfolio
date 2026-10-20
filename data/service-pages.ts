// Long-form content for the dedicated service pages at /services/<slug>.
// Prices and scope come from servicesContent in config.ts; proof points stick to what each case study states.

type Item = { title: string; text: string };

export type ServicePage = {
  slug: string;
  package: string;
  updated: string;
  seo_title: string;
  seo_description: string;
  eyebrow: string;
  title: string;
  intro: string;
  fit: { good: string[]; not: string[] };
  how: { heading: string; intro?: string; items: Item[] };
  diagram?: { heading: string; caption: string; steps: Item[] };
  proof?: { case_study: string; heading: string; points: string[]; quote?: { text: string; author: string; role: string; image?: string }; more?: string[] };
  demo_url?: string;
  costs: { heading: string; intro: string; rows: { cost: string; paid_to: string; detail: string }[] };
  faqs: { q: string; a: string }[];
  guides: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "rag-development",
    package: "rag-development",
    updated: "2026-10-20",
    seo_title: "Custom RAG Development for Internal Documents",
    seo_description: "Custom RAG development for startups and small teams: a document Q&A system over your internal files, with permissions, source citations and an evaluation plan. Python and FastAPI.",
    eyebrow: "Custom RAG development",
    title: "A RAG chatbot for your internal documents that cites its sources",
    intro: "Your team asks questions in plain English and gets answers drawn from your own documents, with a link to the passage behind each answer. I build the whole system: ingestion, permissions, retrieval, the chat interface and the server it runs on.",
    fit: {
      good: [
        "Your team keeps answering the same questions from policies, docs, tickets or contracts",
        "Your documents are spread across drives, wikis and databases, and finding things takes too long",
        "People need answers they can check, not confident guesses",
        "Different people should see different documents",
      ],
      not: [
        "You only need a chatbot on your public website. The $300 support chatbot fits better",
        "You want a general assistant with no connection to your data",
        "You can't share sample documents or real questions during scoping",
      ],
    },
    how: {
      heading: "How I build a document Q&A system",
      intro: "Each part below is agreed in the written scope, so you know what you're getting before work starts.",
      items: [
        { title: "Ingestion", text: "I connect the sources named in your scope: uploaded files, Google Drive, Dropbox, a wiki or a database. Documents are parsed, split into passages and indexed. Changed files are re-indexed on a schedule, so answers stay current without processing everything again." },
        { title: "Data boundaries and permissions", text: "We decide up front what the system may read and who can see what. Access rules are applied when passages are retrieved, before anything reaches the model, so an answer can't draw on a document the person couldn't open. I'll tell you which model providers see your text, and we can use self-hosted models when text can't leave your servers." },
        { title: "Retrieval choices", text: "Retrieval is tuned for your documents rather than left at defaults: how passages are split, whether keyword search is combined with vector search, how many passages the model sees and whether a re-ranking step is worth its cost. These choices are tested against your evaluation set, not guessed." },
        { title: "Source citations", text: "Every answer links to the passages it used, so people can check it in seconds. When retrieval finds nothing relevant, the system is built to say it doesn't know rather than answer from general knowledge." },
        { title: "Evaluation", text: "Before launch, we build a test set from questions your team really asks, with the expected source for each. I run it after every change to retrieval or prompts and share the results: which questions pass, which fail and why. The test set is yours to keep using." },
        { title: "Hosting options", text: "Your cloud account (AWS, Azure or GCP), a server you own, or inside an app you already run. The usual stack is a FastAPI backend in Python with PostgreSQL and pgvector, or a dedicated vector database such as Qdrant when the document count calls for it." },
      ],
    },
    proof: {
      case_study: "project-chat-ai",
      heading: "Built before: Project Chat AI",
      points: [
        "A workspace for each project, with the documents that workspace should answer from",
        "Documents come in by upload or from connected Google Drive and Dropbox accounts",
        "A RAG pipeline finds the relevant passages before the model responds",
        "One question can go to several models at once to compare their answers",
        "Python, FastAPI and Django backend, React and Next.js interface, PostgreSQL, with GPT-4 and custom fine-tuned models served with vLLM",
      ],
      quote: { text: "Muhammad delivered an exceptional work! Excellent communication, and always making sure that you're happy with the final work.", author: "Howard Ryan", role: "CEO, ProjectChat", image: "/howard.jpg" },
    },
    costs: {
      heading: "What you pay for",
      intro: "Building it and running it are separate costs. You get both in writing before work starts.",
      rows: [
        { cost: "Build", paid_to: "Me, one time", detail: "A fixed quote after a free scoping call. It depends on the number and type of sources, the permission rules, the integrations and where people will ask questions (a web app, Slack or inside your product)." },
        { cost: "Model usage", paid_to: "Your AI provider", detail: "Billed to your own account per token. It grows with the number of questions and how much text each answer reads." },
        { cost: "Hosting", paid_to: "Your hosting provider", detail: "The API server and vector storage. Often fits on infrastructure you already pay for." },
        { cost: "Ongoing work", paid_to: "Me, optional", detail: "Bug fixes are covered for the support window. After that, changes are quoted, or you can hire me monthly from $1,500." },
      ],
    },
    faqs: [
      { q: "How is this different from your $300 chatbot?", a: "The chatbot answers public questions from your website content and collects leads. Custom RAG development is for internal documents: more sources, access rules, citations, an evaluation set and hosting on your infrastructure." },
      { q: "Can it run without sending our documents to OpenAI?", a: "Yes. Open models can run on your own servers. I've served models with vLLM for Project Chat AI. Expect higher hosting costs and some quality tradeoffs, which we'd measure with the evaluation set before you decide." },
      { q: "What should I prepare for the scoping call?", a: "A few sample documents, 20 to 50 real questions your team asks, and a rough idea of who should be able to see what." },
      { q: "Who owns the code?", a: "You do. The code goes into your repository and the system runs on accounts you control." },
      { q: "Do you work as a FastAPI RAG developer inside an existing product?", a: "Yes. If you already have a Python backend, the RAG service can be added to it as its own FastAPI module or service, and your existing authentication can decide what each user may see." },
    ],
    guides: ["rag-development-cost", "hire-ai-developer"],
  },
  {
    slug: "ai-workflow-automation",
    package: "ai-workflow-automation",
    updated: "2026-10-20",
    seo_title: "AI Workflow Automation Developer for Startups",
    seo_description: "Hire an AI automation developer to automate an internal workflow: CRM integration, AI steps, approval steps, retries and failure alerts. Fixed scope and a working demo early.",
    eyebrow: "AI workflow automation",
    title: "AI workflow automation for the work your team repeats every week",
    intro: "Pick one workflow that eats your team's time. I map it, then automate it from start to finish: data comes in, AI handles the steps it's good at, your CRM and other tools get updated, and a person approves anything that needs a decision.",
    fit: {
      good: [
        "A workflow that runs many times a week with clear steps, such as lead intake, document processing, reporting or publishing",
        "Data moves between tools by copy and paste",
        "Some steps need judgment, from AI or from a person, not just if-this-then-that rules",
      ],
      not: [
        "The process still changes every week. It's worth settling it first",
        "A two-step automation in a no-code tool you already use does the job",
      ],
    },
    diagram: {
      heading: "A workflow I've automated",
      caption: "The pipeline behind El Pueblo Informa, a Spanish news site, from the AI-Powered News Automation case study. Python and FastAPI run each step.",
      steps: [
        { title: "Sources", text: "A hand-picked list of news sources" },
        { title: "Collect", text: "New stories are scraped from each source" },
        { title: "Track", text: "PostgreSQL records every source and article" },
        { title: "Write", text: "OpenAI turns each story into an original article in Spanish" },
        { title: "Illustrate", text: "A matching thumbnail is generated" },
        { title: "Publish", text: "The finished article goes to WordPress" },
      ],
    },
    how: {
      heading: "What every automation includes",
      items: [
        { title: "A workflow map first", text: "Before writing code, I write down each step, the tools it touches, who owns it and what should happen when it fails. You approve the map, and it becomes the scope." },
        { title: "Integrations with your tools", text: "CRMs such as HubSpot or Pipedrive, email, Google Sheets, Slack, databases and any tool with an API or webhooks. For AI workflow automation with CRM integration, records are matched before they're created, so you don't end up with duplicates." },
        { title: "Retries and failure recovery", text: "Calls to outside services retry with back-off. Steps are written so running them twice doesn't create duplicates, and anything that still fails goes to a list you can review and re-run, with an alert by email or Slack." },
        { title: "Approval steps", text: "Where a mistake would be costly, such as emailing a customer, changing a deal or publishing, the workflow pauses and asks a person to approve, edit or reject." },
        { title: "Logs you can read", text: "Every run is logged with its inputs, outputs and AI decisions, so you can see what happened and why." },
        { title: "The right tool for it", text: "Custom Python when the logic is complex or the volume is high, or a visual tool such as n8n when your team wants to edit the flow themselves. The comparison guide below walks through both." },
      ],
    },
    proof: {
      case_study: "ai-powered-news-automation",
      heading: "Built before: AI-Powered News Automation",
      points: [
        "Collects new stories from a hand-picked list of sources",
        "Writes each story as a fresh, readable article in Spanish",
        "Generates a matching thumbnail for every post",
        "Publishes finished articles directly to WordPress",
        "Python and FastAPI for the pipeline, PostgreSQL to track sources and articles, OpenAI for text and images",
      ],
      more: ["twitter-automation", "form-filling"],
    },
    costs: {
      heading: "What you pay for",
      intro: "Building it and running it are separate costs. You get both in writing before work starts.",
      rows: [
        { cost: "Build", paid_to: "Me, one time", detail: "A fixed quote after a free scoping call, based on the approved workflow map. For a fixed-price start, AI blog automation in WordPress is $300." },
        { cost: "Model usage", paid_to: "Your AI provider", detail: "Billed to your own account. It grows with the number of runs and the amount of text each AI step reads." },
        { cost: "Hosting and tools", paid_to: "Your providers", detail: "A small server, or the paid plan of the automation tool, plus any paid plans for the apps being connected." },
        { cost: "Support", paid_to: "Me, optional after launch", detail: "Bug fixes are covered for the support window. You also get a handover document listing every schedule, alert and credential location, so someone else could maintain it. After that, changes are quoted, or you can hire me monthly from $1,500." },
      ],
    },
    faqs: [
      { q: "Which tools can you connect?", a: "Anything with an API or webhooks, which covers most CRMs, help desks, email providers, spreadsheets, databases and chat tools. If a tool has no API, browser automation is sometimes an option, and I'll tell you how fragile that would be." },
      { q: "Should we use n8n, Zapier or custom code?", a: "It depends on who will maintain it, how complex the logic is and how many runs you expect. The n8n vs custom Python guide walks through the same workflow built both ways." },
      { q: "What if an AI step gets something wrong?", a: "That's what approval steps and logs are for. Costly actions wait for a person, every AI decision is logged, and we review the first runs together before the workflow runs unattended." },
      { q: "What does it cost to run?", a: "Usually the AI usage plus a small server or an automation tool's paid plan. I estimate it in the scope from your expected volume." },
    ],
    guides: ["n8n-vs-custom-python-automation", "hire-ai-developer"],
  },
  {
    slug: "ai-chatbot-development",
    package: "ai-chatbot",
    updated: "2026-10-20",
    seo_title: "AI Chatbot Development: Support Bot with Lead Capture",
    seo_description: "A $300 AI customer support chatbot that answers from your website, docs and FAQs, captures leads, sends them to email or your CRM and hands off to a person. Setup and running costs explained.",
    eyebrow: "AI chatbot development",
    title: "An AI support chatbot for your website that captures leads",
    intro: "A chatbot on your site that answers visitors' questions from your own content and collects their details when they're interested. Setup is $300, paid once. AI usage and hosting are billed to you directly by the providers.",
    fit: {
      good: [
        "Visitors ask the same questions before they buy or book",
        "Enquiries arrive outside working hours and go cold",
        "Your answers are already on public pages, in docs or in FAQs",
      ],
      not: [
        "Answers must come from internal or confidential documents. That's custom RAG development",
        "You need a live-chat inbox with a team of agents",
      ],
    },
    how: {
      heading: "How the chatbot works",
      items: [
        { title: "Data sources", text: "I index your website pages plus any docs and FAQs you provide. When your content changes, the index can be refreshed so answers stay current." },
        { title: "Lead capture", text: "When a visitor shows interest, the bot asks for their name, email and what they need, and sends it to your email or one CRM." },
        { title: "Handoff rules", text: "The bot offers a person when it can't find an answer in your content, when the visitor asks for a human, or when the topic is one you've marked as sensitive, such as refunds or complaints. It collects contact details and notifies you, or shows your WhatsApp, email or booking link." },
        { title: "Guardrails", text: "It's instructed to answer only from your content and to hand off rather than guess about prices, policies or promises." },
        { title: "Works on your site", text: "It embeds with one script tag, so it works on WordPress, Shopify, Webflow, Wix or a custom site." },
      ],
    },
    costs: {
      heading: "Setup versus recurring costs",
      intro: "The $300 covers setup. Running costs go straight to the providers, on your accounts.",
      rows: [
        { cost: "Setup", paid_to: "Me, one time: $300", detail: "Indexing your content, the chat widget, lead capture, one email or CRM destination, handoff rules and deployment." },
        { cost: "Model usage", paid_to: "Your AI provider, monthly", detail: "Billed per token to your own account. It depends on how many conversations the bot has." },
        { cost: "Hosting", paid_to: "Your hosting provider, monthly", detail: "Nothing extra if it runs on a server you already have, otherwise a small server." },
        { cost: "Changes", paid_to: "Me, optional", detail: "Bug fixes are covered for the support window. Extra integrations, more languages or new features are quoted separately." },
      ],
    },
    faqs: [
      { q: "Which websites does it work on?", a: "Any site where you can add a script tag, including WordPress, Shopify, Webflow, Wix and custom sites." },
      { q: "Can it answer in other languages?", a: "Multiple languages are quoted separately, because each one needs its own testing." },
      { q: "Can it look up orders or bookings?", a: "Not in this package. Connecting it to order or booking systems is custom work, quoted after a short call." },
    ],
    guides: ["rag-development-cost", "hire-ai-developer"],
  },
];

// Shared by every service page: how a project runs from first call to handover.
export const deliveryProcess: Item[] = [
  { title: "Free scoping call", text: "30 minutes on what you need, your data and what a good result looks like." },
  { title: "Written scope and quote", text: "What's included, what isn't, running costs and the support window, in writing before work starts." },
  { title: "Working demo early", text: "You see it working on your own data early and can steer before the rest is built." },
  { title: "Build, test, deploy", text: "I build the app and its infrastructure, test it and deploy it to your accounts." },
  { title: "Handover and support", text: "Code, documentation and a walkthrough, then bug fixes for the support window." },
];

export const getServicePage = (slug: string) => servicePages.find(page => page.slug === slug);
