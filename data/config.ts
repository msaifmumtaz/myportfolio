export const siteConfig = {
  site_name: "SaifCodes - Full-Stack Developer & AI Engineer",
  brand: "SaifCodes",
  home_title: "Muhammad Saif – AI Engineer & Full-Stack Developer | SaifCodes",
  home_description:
    "I'm Muhammad Saif, AI engineer and full-stack developer in Lahore, Pakistan. I build AI chatbots, RAG systems, automations and SaaS for clients worldwide.",
  author: "Muhammad Saif",
  twitter_handle: "@msaifmumtaz",
  // Canonical host. Vercel must redirect saifcodes.com here with a 308.
  base_url: "www.saifcodes.com",
  meta_description:
    "I'm Muhammad Saif, a full-stack developer and AI engineer. For 8+ years I've been building AI products, Full-stack SaaS and the servers they run on, for clients around the world.",
  seo_keywords: [
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
    headline: "I build <span class='text-primary-indigo'>AI products & SaaS</span> that actually ship from the first prototype to the server it runs on.",
    subtext:
      "Chatbots that know your data, automations that save your team hours, and SaaS platforms built to grow. I handle the whole thing: backend, frontend, AI and deployment, so you only need one person.",
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
    text: "Clear prices for the things I'm asked to build most. Every project includes direct communication with me, clean handover and help after launch. Need something that isn't listed? Tell me about it and I'll send a quote.",
  },
  packages: [
    {
      slug: "website-development",
      title: "Website Development",
      price: "$100 – $500",
      price_note: "one-time, based on scope",
      description: "A fast, responsive website for your business, portfolio or product launch, built with modern tools and ready to rank on Google.",
      includes: ["Responsive design for mobile, tablet and desktop", "Landing pages, business sites or multi-page sites", "Basic SEO setup and fast load times", "Contact forms and analytics", "Deployment to your domain and hosting"],
      icon: "Globe",
    },
    {
      slug: "shopify-store",
      title: "Shopify Store with Custom Design",
      price: "$200",
      price_note: "one-time",
      description: "A Shopify store designed around your brand, with your products, payments and shipping set up so you can start selling.",
      includes: ["Custom theme design that matches your brand", "Product, collection and category setup", "Payment gateway and shipping configuration", "Essential apps and store settings", "Mobile-friendly checkout experience"],
      icon: "ShoppingBag",
    },
    {
      slug: "ai-chatbot",
      title: "AI Customer Support Chatbot with Lead Generation",
      price: "$300",
      price_note: "one-time",
      description: "A chatbot trained on your own content that answers customer questions around the clock and collects leads while it does.",
      includes: ["Trained on your website, docs and FAQs", "Captures names, emails and enquiry details", "Leads sent to your email or CRM", "Embeds on any website or platform", "Hands off to a human when needed"],
      icon: "Bot",
      case_study: "project-chat-ai",
    },
    {
      slug: "ios-macos-app",
      title: "iOS + macOS App Development",
      price: "$500 – $3,000",
      price_note: "one-time, based on scope",
      description: "Native Apple apps for iPhone, iPad and Mac, from a focused MVP to a full product with a backend behind it.",
      includes: ["Native Swift and SwiftUI development", "One codebase for iOS and macOS where it fits", "Backend, APIs and AI features if needed", "App Store submission support", "Clean, documented source code"],
      icon: "Smartphone",
      case_study: "folio-pdf",
    },
    {
      slug: "ai-blog-automation",
      title: "AI Blog Automation in WordPress",
      price: "$300",
      price_note: "one-time",
      description: "A WordPress blog that keeps publishing on its own: it finds topics, writes SEO-friendly posts with AI, adds images and publishes on schedule.",
      includes: ["Automatic topic and source gathering", "AI-written, SEO-optimized articles", "Featured images and categories", "Scheduled publishing to WordPress", "Writing style tuned to your brand"],
      icon: "Newspaper",
      case_study: "ai-powered-news-automation",
    },
  ],
  retainer: {
    slug: "monthly-ai-engineering",
    title: "Hire me monthly",
    subtitle: "AI Agents, RAG & Workflow Automation",
    price: "$1,500",
    price_note: "/ month, starting",
    description: "For teams that need ongoing AI work rather than a single project. I work as part of your team, building and improving AI agents, RAG systems and automations month after month.",
    includes: ["AI agents with LangGraph, PydanticAI and OpenAI Agents SDK", "RAG systems that answer from your own data", "Workflow automation across your tools and APIs", "Deployment, monitoring and ongoing improvements", "Regular progress updates and direct access to me"],
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
