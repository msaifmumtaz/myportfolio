export const siteConfig = {
  site_name: "SaifCodes - Full-Stack Developer & AI Engineer",
  brand: "SaifCodes",
  home_title: "Custom RAG & AI Workflow Automation Developer – Muhammad Saif",
  home_description:
    "I'm Muhammad Saif, an AI engineer and full-stack developer. I build custom RAG systems and AI workflow automation for startups and small teams, plus websites and iOS/macOS apps.",
  author: "Muhammad Saif",
  twitter_handle: "@msaifmumtaz",
  // Canonical host. Vercel must redirect saifcodes.com here with a 308.
  base_url: "www.saifcodes.com",
  meta_description:
    "I'm Muhammad Saif, a full-stack developer and AI engineer. I build custom RAG systems and AI workflow automation for startups and small teams, from the first demo to the server it runs on.",
  seo_keywords: [
    "RAG Development",
    "AI Workflow Automation",
    "AI Chatbot Development",
    "Full Stack Developer",
    "AI Engineer",
    "Server Management",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "Python",
    "Next.js",
    "AWS",
    "DevOps",
    "Muhammad Saif",
    "Lahore",
    "Pakistan"
  ],
  language: "en-US",
};

export const socialLinks = {
  github: "https://github.com/msaifmumtaz",
  linkedin: "https://www.linkedin.com/in/msaifmumtaz/",
  twitter: "https://twitter.com/msaifmumtaz",
  email: "hello@saifcodes.com",
  upwork: "https://www.upwork.com/freelancers/~01dc46728553f3bae5",
  phone: "https://wa.me/923137107887?text=Hello Saif, I'm interested in your services.",
};

export const designSystem = {
  colors: {
    bg_core: "var(--bg-core)",
    bg_surface_1: "var(--bg-surface-1)",
    bg_surface_2: "var(--bg-surface-2)",
    primary_indigo: "var(--primary-indigo)",
    primary_indigo_dim: "var(--primary-indigo-dim)",
    secondary_rose: "var(--secondary-rose)",
    text_main: "var(--text-main)",
    text_muted: "var(--text-muted)",
    border_subtle: "var(--border-subtle)",
  },
};

export const navigation = {
  links: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    // { label: "Engineering Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
};

export const homePageContent = {
  hero: {
    tagline: "Hi, I'm Saif. AI engineer & full-stack developer",
    headline: "I build <span class='text-primary-indigo'>custom RAG systems & AI workflow automation</span> for startups and small teams.",
    subtext:
      "You work with me directly on a scope we agree in writing, and you see a working demo early. I build the whole thing: data pipeline, backend, interface and the server it runs on. I also build websites and native iOS and macOS apps.",
    cta: ["See my work", "Tell me about your project"],
  },
  tech_ticker:[""],
  // tech_ticker: ["Python", "TensorFlow", "PyTorch", "GPT-4", "Next.js", "React", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "PHP", "Laravel", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Linux", "C/C++", "C#"],
  stats: [
    { label: "Years building software", value: "8+" },
    { label: "Projects delivered on Upwork", value: "67+" },
    { label: "AI models in production", value: "20+" },
  ],
  skills: [
    {
      category: "Artificial Intelligence & ML",
      items: [
        "Generative AI & LLMs",
        "AI Model Training",
        "Small Language Models & Segment Anything (SAM)",
        "Chatbot Development",
        "Enterprise RAG Systems",
        "TensorFlow, PyTorch, Scikit-Learn",
        "NLP & Image Recognition",
        "Predictive Analytics",
        "Diffusion Models",
        "Vision Transformers",
        "Reinforcement Learning",
      ],
      icon: "Brain"
    },
    {
      category: "Web & Software Development",
      items: [
        "Python, TypeScript, PHP, C/C++",
        "Vue.js, React, Next.js",
        "FastAPI, Django, Laravel, Node.js",
        "RESTful API Development",
        "JWT/SAML SSO, OAuth, OpenID Connect",
        "Zero-knowledge auth & end-to-end encrypted apps",
        "AI SaaS Development",
        "ERP & CRM Development",
        "Web & browser automation",
        "Web scraping & data pipelines",
      ],
      icon: "Code"
    },
    {
      category: "Cloud & Server Management",
      items: [
        "AWS, Azure, GCP, Digital Ocean",
        "Linux & Windows Server Admin",
        "Server Security Maintenance",
        "Web Hosting & DB Migrations",
        "PowerMTA & Postal Server",
        "DevOps Pipelines"
      ],
      icon: "Server"
    },
    {
      category: "Databases",
      items: [
        "MySQL, PostgreSQL, Oracle",
        "MSSQL, SQLite",
        "MongoDB, Redis",
        "Qdrant, Milvus, Pinecone, Chroma, Weaviate",
        "Database Architecture",
        "Data Visualization",
        "Data Migration"
      ],
      icon: "Database"
    }
  ],
  testimonials: [
    {
      quote: "Excellent work and communication! Muhammad never fails to deliver an excellent work. Highly recommended!",
      author: "Angelo Angelucci, Adviceglobal",
      image: "/angeleo.png"
    },
    {
      quote: "An absolute pleasure. Exceed expectations. Highly recommended.",
      author: "Archie Mage"
    },
    {
      quote: "He resolved all issues on time and offered to do additional tasks willingly. Very highly recommended.",
      author: "Ana Heloisa"
    },
    {
      quote: "Amazing Talent. Great at communication and will definitely work with him again.",
      author: "Ricardo Lima",
      image: "/recardo-lima.png"
    },
    {
      quote: "Muhammad delivered an exceptional work! Excellent communication, and always making sure that you're happy with the final work. Highly recommended.",
      author: "Howard Ryan",
      image: "/howard.jpg"
    },
    {
      quote: "Always great to work with Muhammad. Great communication and knowledge! 100% recommended!",
      author: "Sepehr Madani, PrivateLabel, Inc."
    },
    {
      quote: "Muhammad was fast, effective and responsive as always. I highly recommend him.",
      author: "Tatum MacK",
      image: "/tautum.webp"
    }
  ]
};

export const aboutPageContent = {
  intro: {
    title: "A bit about me",
    large_text:
      "I'm Saif, a software engineer from Pakistan who's spent the last 8+ years turning ideas into working products. These days that mostly means AI: RAG systems, chatbots and automations, built on solid backends and servers I set up myself. I like owning a project end to end, because that's how things actually get finished.",
  },
  experience: [
    {
      role: "Freelance Full-Stack Developer & AI Engineer",
      company: "Upwork (Top Rated)",
      year: "2019 - Present",
      details: "67+ projects for clients around the world, with a Top Rated badge to show for it. I've built subscription APIs, cloud computer vision systems and AI automations, and plenty of clients have come back for the next one.",
    },
    {
      role: "IT Manager",
      company: "Unitech Auto Industries Pvt Ltd",
      year: "Nov 2018 - Present",
      details: "I keep the systems running at a busy manufacturing company: networks, servers, security and the everyday problems that come with them. It taught me to build things that don't break at 2 a.m.",
    },
    {
      role: "AI Developer",
      company: "Various Projects",
      year: "5+ Years",
      details: "Alongside client work, I've designed, trained and deployed machine learning and deep learning models, from computer vision to language models, and put them into real products.",
    }
  ],
  education: [
    { degree: "BS Software Engineering", school: "Virtual University Of Pakistan", year: "2020" },
    { degree: "F.Sc Pre-Engineering", school: "Govt Degree College Mian Channu", year: "" },
  ],
  tech_stack: {
    frontend: ["React", "Next.js", "Remix JS", "TanStack", "HTML/CSS/JS", "Tailwind", "JSON"],
    backend: ["Python", "PHP", "Node.js", "C/C++", "C#", "Java", "Go"],
    ai_ml: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "NLP", "LLMs"],
    ai_agents: ["LangGraph", "LangChain", "PydanticAI","LlamaIndex","Agents SDK (OpenAI)"],
    devops: ["AWS", "Azure", "GCP", "Digital Ocean", "Docker", "Kubernetes", "Linux", "Windows Server"],
    databases: ["MySQL", "PostgreSQL", "Oracle", "MSSQL", "SQLite", "MongoDB", "Redis"]
  },
};

export const servicesContent = {
  intro: {
    title: "Services",
    text: "I mostly build custom RAG systems and AI workflow automation for startups and small teams. I also build websites and native iOS and macOS apps. You work with me directly, the scope is agreed in writing before work starts, and you see a working demo early. I build the app and the infrastructure it runs on.",
  },
  // How long bug fixes are covered after launch on every fixed-price project.
  support_window: "14 days",
  categories: [
    { id: "ai", title: "AI systems", text: "RAG systems that answer from your own documents, automations that take repetitive work off your team, and chatbots for your website." },
    { id: "web", title: "Websites & stores", text: "Fast business websites and Shopify stores, built, deployed and ready to rank." },
    { id: "apple", title: "iOS & macOS apps", text: "Native Swift and SwiftUI apps for iPhone, iPad and Mac." },
  ],
  packages: [
    {
      slug: "rag-development",
      category: "ai",
      title: "Custom RAG Development",
      price: "Fixed quote",
      price_note: "after a free scoping call",
      description: "A question-answering system over your internal documents, with answers that cite their sources. I build the ingestion, permissions, retrieval, interface and hosting, and test it against your team's real questions before launch.",
      includes: ["Ingestion from files, drives, wikis or databases", "Access rules when different people should see different documents", "Source citations on every answer", "An evaluation set built from your real questions", "Deployment to your cloud or a server you own"],
      scope: {
        you_pay: ["AI model API usage, billed to your own account", "Hosting and vector database fees, paid to the provider directly"],
        not_included: ["Data sources not named in the written scope", "Model fine-tuning or self-hosted GPU models, quoted separately"],
      },
      icon: "FileSearch",
      page: "/services/rag-development",
      case_study: "project-chat-ai",
    },
    {
      slug: "ai-workflow-automation",
      category: "ai",
      title: "AI Workflow Automation",
      price: "Fixed quote",
      price_note: "after a free scoping call",
      description: "One internal workflow automated from start to finish: pulling data in, using AI where it helps, updating your CRM or other tools, and asking a person to approve when a step needs it.",
      includes: ["A written map of the workflow before I build anything", "Integrations with your CRM, email, sheets or APIs", "Retries, logging and failure alerts", "Approval steps where a person should decide", "A short handover document and recorded walkthrough"],
      scope: {
        you_pay: ["AI model API usage, billed to your own account", "Hosting and any paid plans for the tools being connected"],
        not_included: ["Workflows or integrations not named in the written scope", "Ongoing operation after the support window, unless you hire me monthly"],
      },
      icon: "Workflow",
      page: "/services/ai-workflow-automation",
      case_study: "ai-powered-news-automation",
    },
    {
      slug: "ai-chatbot",
      category: "ai",
      title: "AI Customer Support Chatbot with Lead Generation",
      price: "$300",
      price_note: "one-time",
      description: "A chatbot for your website that answers from your own content and collects leads while it does.",
      includes: ["Answers from your website, docs and FAQs", "Captures names, emails and enquiry details", "Leads sent to your email or one CRM", "Embeds on any website or platform", "Offers to connect visitors with a person when it can't answer"],
      scope: {
        you_pay: ["AI model API usage, billed to your own account", "Hosting, if it isn't added to a server you already have"],
        not_included: ["Internal or permission-restricted documents (that's custom RAG development)", "More than one CRM, a live-chat inbox or multiple languages, quoted separately"],
      },
      icon: "Bot",
      page: "/services/ai-chatbot-development",
    },
    {
      slug: "ai-blog-automation",
      category: "ai",
      title: "AI Blog Automation in WordPress",
      price: "$300",
      price_note: "one-time",
      description: "A WordPress blog that keeps publishing: it finds topics from sources you approve, writes posts with AI, adds images and publishes on a schedule, or saves drafts for you to review first.",
      includes: ["Topic gathering from a source list you approve", "AI-written articles in a style tuned to your brand", "Featured images and categories", "Scheduled publishing, or drafts for review", "One WordPress site"],
      scope: {
        you_pay: ["AI model API usage for text and images, billed to your own account", "WordPress hosting"],
        not_included: ["Multiple sites or languages, quoted separately", "Editorial review of published posts"],
      },
      icon: "Newspaper",
      // Not its own page: links to the workflow automation page for how these pipelines are built.
      related_page: "/services/ai-workflow-automation",
      case_study: "ai-powered-news-automation",
    },
    {
      slug: "website-development",
      category: "web",
      title: "Website Development",
      price: "$100 – $500",
      price_note: "one-time, based on scope",
      description: "A fast, responsive website for your business, portfolio or product launch, built with modern tools and ready to rank on Google.",
      includes: ["Responsive design for mobile, tablet and desktop", "Landing pages, business sites or multi-page sites", "Basic SEO setup and fast load times", "Contact forms and analytics", "Deployment to your domain and hosting"],
      scope: {
        you_pay: ["Domain and hosting", "Any paid fonts, images or plugins"],
        not_included: ["Writing the page copy, unless agreed in the quote", "Online stores and custom web apps, quoted separately"],
      },
      icon: "Globe",
    },
    {
      slug: "shopify-store",
      category: "web",
      title: "Shopify Store with Custom Design",
      price: "$200",
      price_note: "one-time",
      description: "A Shopify store designed around your brand, with your products, payments and shipping set up so you can start selling.",
      includes: ["Custom theme design that matches your brand", "Product, collection and category setup", "Payment gateway and shipping configuration", "Essential apps and store settings", "Mobile-friendly checkout experience"],
      scope: {
        you_pay: ["Your Shopify plan and any paid apps or themes", "Payment processing fees"],
        not_included: ["Product photography and descriptions", "Custom Shopify apps, quoted separately"],
      },
      icon: "ShoppingBag",
    },
    {
      slug: "ios-macos-app",
      category: "apple",
      title: "iOS + macOS App Development",
      price: "$500 – $3,000",
      price_note: "one-time, based on scope",
      description: "Native Apple apps for iPhone, iPad and Mac, from a focused MVP to a full product with a backend behind it.",
      includes: ["Native Swift and SwiftUI development", "One codebase for iOS and macOS where it fits", "Backend, APIs and AI features if needed", "App Store submission support", "Clean, documented source code in your repository"],
      scope: {
        you_pay: ["Apple Developer Program membership", "Backend hosting and any API usage"],
        not_included: ["Android apps", "Guaranteed App Store approval (Apple makes the final call)"],
      },
      icon: "Smartphone",
      case_study: "folio-pdf",
    },
  ],
  retainer: {
    slug: "monthly-ai-engineering",
    title: "Hire me monthly",
    subtitle: "AI Agents, RAG & Workflow Automation",
    price: "$1,500",
    price_note: "/ month, starting",
    description: "For teams that need ongoing AI work rather than a single project. I work as part of your team, building and improving AI agents, RAG systems and automations month after month.",
    includes: ["AI agents with LangGraph, PydanticAI and OpenAI Agents SDK", "RAG systems that answer from your own data", "Workflow automation across your tools and APIs", "Deployment, monitoring and ongoing improvements", "Priorities agreed each month, with regular progress updates and direct access to me"],
    scope: {
      you_pay: ["AI model API usage, hosting and third-party tools, billed to your own accounts"],
      not_included: ["Work beyond the priorities agreed for the month, which moves to the next month or is quoted separately"],
    },
  },
};

export const footerContent = {
  columns: [
    {
      title: "Find me on",
      links: [
        { label: "Upwork", href: "https://www.upwork.com/freelancers/~01dc46728553f3bae5" },
        { label: "StackOverflow", href: "https://stackoverflow.com/users/msaifmumtaz" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/msaifmumtaz/" },
        { label: "GitHub", href: "https://github.com/msaifmumtaz" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "RAG Development", href: "/services/rag-development" },
        { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
        { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
        { label: "iOS & macOS Apps", href: "/services#ios-macos-app" },
        { label: "Guides", href: "/guides" },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Me", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
        { label: "Projects", href: "/projects" },
        { label: "Schedule a Meeting", href: "https://calendly.com/ch-saif109/30min" }
      ]
    },
  ],
  bottom_links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "llms.txt", href: "/llms.txt" },
    { label: "llms-full.txt", href: "/llms-full.txt" },
  ],
  bottom_text: " Muhammad Saif. Built with care in Lahore ❤️.",
};
