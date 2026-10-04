---
title: AI-Powered News Automation
category: SaaS/AI
tech: ["Python", "FastAPI", "PostgreSQL", "OpenAI", "Wordpress"]
slug: ai-powered-news-automation
demo_url: "https://elpuebloinforma.com/"
image_path: "/projects/ai-news-autmation.png"
show_home: True
---

A Spanish-language news site that mostly runs itself. The system gathers stories from trusted sources, writes original articles with AI and creates a thumbnail for each one, then publishes it all to WordPress.

### The challenge
Running a news site means publishing all the time. My client wanted to keep up with the news cycle without paying for a full editorial team.

### What I built
- **Source scraping:** collects new stories from a hand-picked list of sources.
- **AI writing:** turns each story into a fresh, readable article in Spanish.
- **Thumbnails:** generates a matching image for every post.
- **Auto-publishing:** sends finished articles directly to WordPress.

### Tech behind it
- **Python + FastAPI** for the pipeline and API.
- **PostgreSQL** to track sources and articles.
- **OpenAI** models for writing and images.
- **WordPress** as the public site.