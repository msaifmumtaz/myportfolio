---
title: "How to Hire an AI Developer: A Checklist for Startups and Small Teams"
seo_title: "How to Hire an AI Developer: Scoping and Evaluation Checklist"
description: "How to evaluate an independent AI developer: a scoping checklist, questions to ask, what to check in the code at handover, an evaluation plan and a delivery process that protects you."
updated: "2026-10-20"
service: rag-development
order: 2
---

Hiring an independent developer for an AI project is less risky than it looks if you agree on three things before work starts: **what exactly is being built**, **how you'll know it works**, and **what you'll own at the end**. This guide gives you a checklist for each.

## Start with the problem, not the model

Before talking to anyone, write down:

- **The task.** One workflow or one set of questions, such as "answer staff questions about our HR policies" or "turn inbound leads into CRM records with a drafted reply."
- **Who uses it** and where: a web app, Slack, your product, email.
- **The data** it needs, where that data lives and who owns it.
- **What a good result looks like**, in terms you can check, such as "cites the right policy for 9 of 10 test questions."
- **Your budget for building it and for running it monthly.** These are separate numbers. See [how RAG costs add up](/guides/rag-development-cost).

## Scoping checklist

A good written scope answers every one of these. If a proposal skips one, ask about it.

- [ ] The single workflow or question set this project covers
- [ ] Data sources, file formats, rough size and who can grant access
- [ ] Who should be able to see what
- [ ] Integrations: CRM, single sign-on, Slack, email, databases
- [ ] Where it runs, and who pays for hosting and API usage
- [ ] How success is measured: the evaluation plan
- [ ] What's explicitly out of scope
- [ ] Milestones, and what you'll see working at each one
- [ ] The support window after launch, and what happens after it
- [ ] Who owns the code, the accounts and the data

## Questions to ask a developer

| Ask | A good answer sounds like |
| --- | --- |
| What would you build first, and when will I see it working? | A specific first milestone with a demo on your own data, not only at the end. |
| How will we know it works? | A test set of real examples with expected results, agreed before launch and rerun after changes. |
| What will it cost to run each month? | An estimate from your expected volume, with the assumptions written down. |
| What happens when the AI is wrong? | Source citations, a fallback to "I don't know," approval steps for costly actions, and logs. |
| Where does our data go? | The model providers and storage named, plus options if text can't leave your servers. |
| What do I get at the end? | Code in your repository, documentation, and services running on accounts you control. |

## Look at real work

Ask for things you can check: live products, public code, or case studies that explain how a system was built, not only what it does. Ask the developer to walk you through a failure in a past project and how they fixed it. You'll learn more from that than from a list of frameworks.

For example, my [Folio PDF](/projects/folio-pdf) app is open source, so you can read the code and its tests, and my [case studies](/projects) explain how each system works.

## What to check in the code at handover

Even if you don't read code, you can check most of this list. If you can, pay another engineer for an hour to review it. That costs far less than finding problems later.

- [ ] The repository is in your organization's account, not the developer's
- [ ] A README explains how to run it locally and how to deploy it
- [ ] API keys and passwords are in environment variables or a secrets manager, never in the code
- [ ] Model names and providers are configuration, so you can switch them without a rewrite
- [ ] Tests cover the core logic, and the evaluation set can be rerun with one command
- [ ] Errors are logged and someone is alerted when something fails
- [ ] Dependencies are pinned to versions
- [ ] A short note explains the architecture and why the main choices were made

## An evaluation plan you can agree on

An evaluation plan turns "it seems to work" into a result you can measure. For a document Q&A system it might look like this:

| Part | Example |
| --- | --- |
| Test set | 50 real questions from your team, 10 of them with no answer in the documents |
| Expected result | The correct answer and the document it should cite, or "I don't know" for the 10 |
| Pass criteria | Agreed together, such as 45 of 50 correct with the right source, and no invented answers to the 10 |
| When it runs | Before launch and after every change to retrieval, prompts or models |
| Who keeps it | You. It stays useful long after the project ends |

For an automation, the same idea works with past real cases: run last month's inputs through the workflow and compare its decisions with what your team actually did.

## A delivery process that protects you

- **Milestones you can see working.** Each one ends with a demo on your data, and payments are tied to them.
- **Written change requests.** New ideas during the project are fine. Agree the cost and timing in writing before work on them starts.
- **Early access to the real thing.** A staging version you can try beats screenshots.
- **A proper handover.** Code, documentation, a recorded walkthrough and a list of every account and credential location.

## Red flags

- Promises of 100% accuracy
- No answer on monthly running costs
- Nothing to see until the end of the project
- Code or services kept in the developer's own accounts
- No plan for when the model gets something wrong

If you'd like to see how I scope and deliver this kind of work, start with [custom RAG development](/services/rag-development) or [AI workflow automation](/services/ai-workflow-automation).
