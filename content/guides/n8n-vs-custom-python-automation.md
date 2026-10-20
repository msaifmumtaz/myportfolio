---
title: "n8n vs Custom Python for AI Workflow Automation"
seo_title: "n8n vs Custom Python Automation: A Worked Example"
description: "The same AI lead-intake workflow built in n8n and in custom Python, with the maintenance tradeoffs of each and when to choose which, or both."
updated: "2026-10-20"
service: ai-workflow-automation
order: 3
---

n8n and custom Python can both run an AI workflow reliably. The better choice depends less on features than on **who will maintain it**, **how complex the logic is** and **how much volume it handles**. The clearest way to compare them is to build the same workflow both ways.

## The example workflow

A lead fills in the form on your website. The workflow should:

1. Receive the form submission.
2. Look up the company to add context.
3. Ask an AI model to classify the lead (sales, support or spam) and draft a reply.
4. Create the contact in HubSpot, or update it if the email already exists.
5. Post the draft in Slack for a person to approve or edit.
6. Email the approved reply to the lead.

It's a typical AI workflow with a CRM integration: one AI step, two outside systems, and a person in the loop before anything reaches a customer.

## Built in n8n

In n8n, each step is a node on a visual canvas:

1. **Webhook** node receives the form submission.
2. **HTTP Request** node calls the company lookup API.
3. **OpenAI** node classifies the lead and drafts the reply, asked to return JSON.
4. **If** node stops spam here.
5. **HubSpot** node creates or updates the contact by email.
6. **Slack** node sends the draft and waits for a response, so the workflow pauses until someone approves.
7. **Send Email** (or Gmail) node sends the approved reply.

For reliability, turn on **Retry On Fail** for the HTTP Request and HubSpot nodes, and set an **error workflow** that starts with an Error Trigger node and posts failures to Slack.

Someone familiar with n8n can build the first version quickly, and anyone on your team can open the canvas and see what happens to a lead.

## Built in custom Python

In Python, the same workflow is a small FastAPI service with a background worker. Here is a simplified sketch:

```python
from typing import Literal
from fastapi import FastAPI
from pydantic import BaseModel
from tenacity import retry, stop_after_attempt, wait_exponential

app = FastAPI()

class Lead(BaseModel):
    name: str
    email: str
    message: str

class Triage(BaseModel):
    intent: Literal["sales", "support", "spam"]
    reply_draft: str

@app.post("/webhooks/lead")
def receive_lead(lead: Lead):
    lead_id = db.save_lead(lead)          # store first, so no lead is ever lost
    queue.enqueue(process_lead, lead_id)  # the slow work happens in the background
    return {"ok": True}

@retry(stop=stop_after_attempt(5), wait=wait_exponential(min=2, max=60))
def upsert_contact(lead: Lead, triage: Triage) -> str:
    ...  # HubSpot API: search by email, then create or update

def process_lead(lead_id: int):
    lead = db.get_lead(lead_id)
    company = lookup_company(lead.email)
    triage = classify(lead, company)      # model output validated against Triage
    if triage.intent == "spam":
        return db.mark(lead_id, "spam")
    upsert_contact(lead, triage)
    slack.request_approval(lead_id, triage.reply_draft)  # buttons call back to /webhooks/slack
```

A second endpoint receives the Slack button click and sends the email. Because every lead is saved before processing, a failed run can be retried from the database without asking the visitor to submit the form again.

It takes longer to build than the n8n version. In exchange, the logic is ordinary code that can be tested, reviewed and moved anywhere.

## Maintenance tradeoffs

| | n8n | Custom Python |
| --- | --- | --- |
| First version | Fast, especially with built-in integration nodes | Slower, with more setup |
| Who can change it | People on your team who know n8n, on the visual canvas | A developer |
| Complex logic | Gets hard to follow as branches and Code nodes pile up | Ordinary functions with tests |
| Testing | Mostly manual runs with saved sample data | Unit tests and evaluation sets that run on every change |
| Version control | Workflows are JSON. Built-in Git sync is on higher-tier plans | Git, code review and rollbacks as usual |
| Error handling | Per-node retries and error workflows | Whatever you build: retries, duplicate protection, failed-job queues |
| Hosting | n8n Cloud, priced by workflow executions, or self-hosted | A small server or serverless functions |
| Lock-in | The logic lives in n8n's format | Plain code you can run anywhere |

Both need upkeep. n8n upgrades can change how nodes behave, Python dependencies need updating, and in both cases API keys need rotating and someone has to watch the failure alerts.

## When to choose which

**Choose n8n when:**

- The steps are mostly standard integrations that n8n already has nodes for
- Volume is low to moderate
- Someone on your team wants to adjust the flow without a developer
- You're testing whether the workflow is worth automating at all

**Choose custom Python when:**

- The logic branches a lot, or the AI step is substantial, such as retrieval from your documents or multi-step reasoning
- Volume is high, or runs must finish quickly
- You need automated tests, code review or an audit trail for compliance
- The workflow belongs inside your own product

**Or use both.** n8n handles the triggers and app connections, and calls a small Python service over HTTP for the AI-heavy step. Your team keeps a readable canvas, and the hard logic stays in tested code.

If you have a workflow in mind and aren't sure which way to build it, [tell me about it](/services/ai-workflow-automation). The workflow map I write at the start of every automation project includes this choice and the reasons for it.
