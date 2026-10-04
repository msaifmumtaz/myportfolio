---
title: Project Chat AI
category: SaaS/AI
tech: ["Python", "FastAPI", "PostgreSQL", "OpenAI", "Django", "React", "Next.js", "pytorch", "transformers", "vllm"]
slug: project-chat-ai
demo_url: "https://projectchat.ai/"
image_path: "/projects/projectchat.png"
show_home: true
---

An AI assistant that actually knows your project. Upload your documents or connect Google Drive or Dropbox, and ask questions in plain English. It answers from your own data, not guesses.

### The challenge
General chatbots are great at general questions, but they know nothing about *your* work. Teams kept copying and pasting documents into prompts. They needed an assistant that already had the context and kept every project separate.

### What I built
- **Workspaces:** create a workspace for each project and upload the documents it should learn from.
- **Cloud drive sync:** connect Google Drive, Dropbox and other drives so data comes in automatically.
- **Answers grounded in your data:** an enterprise-grade RAG pipeline finds the right passages before the AI responds.
- **Compare models side by side:** send one question to several AI models at once and pick the best answer.
- **Parallel image generation:** create images with multiple models at the same time.
- **Admin dashboard:** manage workspaces, users and data in one place.

### Tech behind it
- **Python, FastAPI & Django** on the backend.
- **React & Next.js** for the interface.
- **PostgreSQL** for app data.
- **GPT-4 and custom fine-tuned models**, served with **PyTorch, Transformers & vLLM**.
