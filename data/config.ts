export const siteConfig = {
  site_name: "SaifCodes - Full-Stack Developer & AI Consultant",
  base_url: "saifcodes.com",
  meta_description:
    "Muhammad Saif (SaifCodes) is a Full-Stack Developer and AI Consultant with 8+ years of experience in AI solutions, web applications, and server management.",
  seo_keywords: [
    "Full Stack Developer",
    "AI Consultant",
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
    tagline: "Full-Stack Developer | AI Consultant | Server Expert",
    headline: "Building <span class='text-primary-indigo'>Intelligent Solutions</span> & Robust Infrastructure.",
    subtext:
      "With over 8 years of experience, I specialize in designing, developing, and deploying cutting-edge AI solutions, web applications, and secure server infrastructures.",
    cta: ["View Projects", "Contact Me"],
  },
  tech_ticker: ["Python", "TensorFlow", "PyTorch", "GPT-4", "Next.js", "React", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "PHP", "Laravel", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Linux", "C/C++", "C#"],
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Jobs Completed", value: "60+" },
    { label: "AI Models Deployed", value: "20+" },
  ],
  skills: [
    {
      category: "Artificial Intelligence & ML",
      items: [
        "Generative AI & LLMs ",
        "AI Model Training",
        "SLM & SAM Models",
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
        "FastApi, Django, Laravel, Node.js",
        "RESTful API Development",
        "JWT/SAML SSO, OAuth, OpenID Connect",
        "Zero Knowledge Auth, E2EE Encrypted Platforms",
        "AI SaaS Development",
        "ERP & CRM Development",
        "Web Automation, Browser Automation",
        "Web Scraping, Data Scraping",
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
    title: "About Muhammad Saif",
    large_text:
      "I am a passionate Full-Stack Developer and AI Consultant with a strong background in Server Management. My goal is to translate complex business problems into innovative, efficient technical solutions.",
  },
  experience: [
    {
      role: "Freelance Full-Stack Developer & AI Consultant",
      company: "Upwork (Top Rated)",
      year: "2019 - Present",
      details: "Successfully completed over 60 jobs focusing on AI, Web Development, and Server Management. Projects include Subscription APIs, Cloud-Based Computer Vision, and AI-Powered Automation.",
    },
    {
      role: "IT Manager",
      company: "Unitech Auto Industries Pvt Ltd",
      year: "Nov 2018 - Present",
      details: "Managing IT infrastructure and operations for a manufacturing organization.",
    },
    {
      role: "AI Developer",
      company: "Various Projects",
      year: "5+ Years",
      details: "Designed and deployed AI solutions focusing on machine learning, deep learning, and collaborative problem solving.",
    }
  ],
  education: [
    { degree: "BS Software Engineering", school: "Virtual University Of Pakistan", year: "2020" },
    { degree: "F.Sc Pre-Engineering", school: "Govt Degree College Mian Channu", year: "" },
  ],
  tech_stack: {
    frontend: ["Vue.js", "React", "Next.js", "HTML5", "CSS3", "Tailwind", "JSON"],
    backend: ["Python", "PHP", "Node.js", "C/C++", "C#", "Java", "Go"],
    ai_ml: ["TensorFlow", "PyTorch", "Scikit-Learn", "GPT-4", "OpenCV", "NLP", "LLMs"],
    devops: ["AWS", "Azure", "GCP", "Digital Ocean", "Docker", "Kubernetes", "Linux", "Windows Server"],
    databases: ["MySQL", "PostgreSQL", "Oracle", "MSSQL", "SQLite", "MongoDB", "Redis"],
  },
};

export const footerContent = {
  columns: [
    { 
      title: "Socials", 
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
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" }
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
  bottom_text: " Muhammad Saif. All rights reserved.",
};
