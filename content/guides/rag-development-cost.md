---
title: "How Much Does a Custom RAG System Cost to Build and Run?"
seo_title: "RAG Development Cost: Build and Running Costs Explained"
description: "What drives the cost of building a custom RAG system, how to estimate monthly running costs from token volumes, and three worked scenarios with every assumption written down."
updated: "2026-10-20"
service: rag-development
order: 1
---

A RAG (retrieval-augmented generation) system has two kinds of cost: **building it**, which you pay once, and **running it**, which you pay every month to your AI and hosting providers. Most confusion comes from mixing the two, so this guide keeps them apart and shows the arithmetic, so you can redo it with your own numbers.

## What drives the build cost

Retrieval and generation are the easy part. Most of the effort goes into getting your documents in cleanly, enforcing who can see what, and proving the answers are right. These are the things that move a quote up or down:

| Driver | Simpler end | More work |
| --- | --- | --- |
| Sources | One folder of PDFs or a website | Several systems kept in sync (drives, wikis, CRM, databases) |
| Document formats | Clean text, HTML, Markdown | Scanned PDFs, tables, spreadsheets, slides |
| Permissions | Everyone can see everything | Per-user access copied from the source systems |
| Interface | A chat widget or a simple web app | Inside your product, Slack or Teams, with single sign-on |
| Evaluation | A small question set checked by hand | A larger test set run automatically after every change |
| Hosting | Managed model APIs on your existing servers | Self-hosted models on GPU servers in a private network |

### Where my prices sit

- **Website support chatbot with lead capture: $300 one-time.** Public content only, one lead destination. [Scope and running costs](/services/ai-chatbot-development).
- **Custom RAG development: fixed quote after a free scoping call.** Internal documents, permissions, citations, an evaluation set and hosting on your infrastructure. [What's included](/services/rag-development).
- **Ongoing work: from $1,500 a month** for teams that want RAG systems and automations improved month after month.

API usage and hosting are always billed to your own accounts, so the build price never hides a markup on running costs.

## How to estimate running costs

Model providers charge per **token**, a chunk of text a little shorter than a word. Each question costs:

- **Input tokens:** your instructions, any chat history, the question, and the passages retrieved from your documents. The retrieved passages are usually most of it.
- **Output tokens:** the answer the model writes. Output usually costs several times more per token than input.

So the monthly model cost is:

> **(questions per month × input tokens per question × input price) + (questions per month × output tokens per question × output price)**

Embedding your documents for search is a separate, mostly one-time cost. You pay it again only for documents that change.

## Three scenarios

The assumptions are deliberately round so you can swap in your own:

- About **650 tokens per page** (roughly 500 English words). Other languages often use more tokens per word.
- Input per question = retrieved passages plus about 500 to 1,000 tokens of instructions and history.
- Questions per month = people × questions per working day × 21 working days.

| | A. Website support bot | B. Internal docs Q&A | C. Knowledge base with permissions |
| --- | --- | --- | --- |
| Content | 200 web pages | 2,000 documents (~10,000 pages) | 20,000 documents (~100,000 pages) |
| Tokens to embed once | ~130,000 | ~6.5 million | ~65 million |
| Questions per month | 3,000 | 4,000 (20 people × ~10 a day) | 10,000 (100 people × ~5 a day) |
| Input tokens per question | 2,500 (5 passages) | 4,000 (6 passages) | 5,000 (8 passages) |
| Output tokens per question | 250 | 400 | 500 |
| **Input tokens per month** | **7.5 million** | **16 million** | **50 million** |
| **Output tokens per month** | **0.75 million** | **1.6 million** | **5 million** |
| Typical hosting | An existing web server | A small server with PostgreSQL and pgvector | A database server or managed vector database, plus permission sync jobs |

### Turning tokens into dollars

Multiply by your provider's current prices. To show the arithmetic, here are two **illustrative** price points per million tokens. They are round numbers, not quotes, so check your provider's pricing page before relying on them.

| Monthly model cost | A | B | C |
| --- | --- | --- | --- |
| Smaller model at $0.50 input / $2 output | $5.25 | $11.20 | $35 |
| Larger model at $3 input / $15 output | $33.75 | $72 | $225 |

For example, scenario B on the larger model is 16 × $3 + 1.6 × $15 = $48 + $24 = **$72 a month**.

Embedding is usually small by comparison. At an illustrative $0.10 per million tokens, embedding all of scenario C once costs about $6.50.

## Limits of these estimates

- **Agents multiply calls.** If a question triggers several model calls, such as rewriting the query, checking the answer or using tools, multiply the input and output tokens by the number of calls.
- **Self-hosted models change the picture.** GPU servers are billed by the hour whether or not anyone asks a question, and they're often the biggest line item. They make sense when text can't leave your servers or volume is very high.
- **People time isn't included.** Someone has to keep the documents current and review failed questions.
- **Prices change.** Provider prices have changed often. Recheck them before you budget.

## Ways to keep running costs down

- **Retrieve fewer, better passages.** A re-ranking step that keeps the best 4 passages instead of 10 can cut input tokens roughly in half.
- **Route simple questions to a smaller model** and save the larger one for hard questions.
- **Trim chat history** to what the next answer needs.
- **Cache answers** to frequent questions.
- **Re-embed only changed files** instead of the whole library.

Want an estimate for your own documents and volume? [Book a scoping call](/services/rag-development) and you'll get the build quote and a running-cost estimate, with the assumptions written down.
