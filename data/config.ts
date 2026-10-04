export const siteConfig = {
  site_name: "SaifCodes - Full-Stack Developer & AI Engineer",
  base_url: "saifcodes.com",
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
        { label: "Contact", href: "/contact" },
        { label: "Projects", href: "/projects" },
        { label: "Schedule a Meeting", href: "https://calendly.com/ch-saif109/30min" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" }
      ]
    },
  ],
  bottom_text: " Muhammad Saif. Built with care in Lahore ❤️.",
};
