---
title: Automated Web Form Filling System
category: Automation
tech: ["Node.js", "Puppeteer", "Residential Proxy", "PHP", "JavaScript"]
slug: form-filling
demo_url: "https://webautoma.com/"
image_path: "/projects/webautoma.png"
show_home: true
---

My client needed to submit huge numbers of web forms, across many different websites, without anyone sitting at a keyboard. So I built a browser automation platform that does the work on its own and is managed from a simple dashboard.

### The challenge
Filling a form once is easy. Filling it at scale is not. Websites spot repeated traffic quickly, captchas get in the way, and every site has a different layout. The system had to look like a real person on every visit and be easy for a non-developer to run.

### What I built
- **Field mapping:** set up a form's fields and buttons once, then reuse that setup as often as you like.
- **Bulk uploads:** drop in a CSV and the system works through every row by itself.
- **Location-aware proxies:** traffic is sent through residential proxies that match each website's region.
- **Human-like browsing:** rotating user agents and natural interaction patterns so submissions don't look automated.
- **Captcha handling:** captchas are detected and solved automatically.
- **Admin dashboard:** one place to manage proxies, form lists, CSV data, users and results.

### Tech behind it
- **Node.js + Puppeteer** run the browser automation.
- **Residential proxies** provide real-world IPs.
- **PHP, HTML, CSS & JavaScript** power the admin dashboard.
