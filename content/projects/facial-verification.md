---
title: Facial Verification & KYC System
category: AI/CV
tech: ["Python", "OpenCV", "Flask", "MySQL"]
slug: facial-verification
demo_url: ""
image_path: ""
show_home: false
---

Identity checks without the paperwork. A user takes a selfie, uploads their CNIC or passport, and the system tells them right away whether the two faces match.

### The challenge
Checking IDs by hand is slow, and it gets harder as more people sign up. My client needed a KYC (Know Your Customer) step that could verify people automatically and still give them clear feedback in the moment.

### What I built
- **Document upload:** users submit a CNIC, passport or other ID.
- **Live selfie check:** a live photo is captured and compared against the face on the document.
- **Face matching:** computer vision lines up a live face with a printed or scanned photo, even though the two look quite different.
- **Instant feedback:** users see their verification result right away instead of waiting for a manual review.

### Tech behind it
- **Python + OpenCV** for face detection and matching.
- **Flask** for the API.
- **MySQL** to store user records and verification logs.
