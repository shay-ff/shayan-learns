---
title: The Interview That Taught Me the Hardest Lesson on Choosing the Right Tech
description: Learnt know why first then how!
slug: teach-lesson-1
date: 2025-07-25
authors: [Mohammad]
---

The Interview That Taught Me the Hardest Lesson on Choosing the Right Tech
======================================================================================
In my 5th semester of college, I had the opportunity to interview with Morgan Stanley. As part of my project showcase, I presented an Online Examination Portal that I had built. The backend used **MongoDB**, and I was quite proud of the scalability and speed I had achieved.

The interviewer asked me a question that, in hindsight, seems simple:

> "Why did you choose MongoDB?"

I confidently replied:

> "Because it's scalable."

Then came the follow-up:

> "So SQL databases aren't scalable?"

I froze.

I scrambled to justify the decision: something about ease of implementation, fast prototyping — but I knew I wasn’t convincing. He then asked me to write the SQL schema to store scores of students. I managed to do it.

He looked at me and said:

> "So you *could* have used SQL too. Why didn’t you?"

I had no real answer. And I was disqualified.

---

## What I Learned — and Why It Mattered

That experience taught me one of the most important lessons as a developer:

> **Choosing a technology is never just about what works — it’s about what fits the problem.**

I wasn’t wrong for using MongoDB. But I didn’t understand the *why* behind the decision.

---

## SQL vs NoSQL — When to Choose What

Here’s what I’ve learned since — through reading, building, and failing:

### 🧩 Choose SQL When:

* **Data is relational** — You have structured data with defined relationships (e.g., Students ↔ Courses ↔ Scores)
* **Consistency matters** — Banking, inventory, exams: you can’t afford partial or dirty writes
* **Transactions are critical** — SQL is ACID compliant: Atomic, Consistent, Isolated, Durable
* **You need JOINs** — Perfect for pulling combined data from multiple tables
* **The schema is stable** — If your data model won’t change much, a rigid schema is good

🧠 **Real-life example:** An HR system where employees are linked to departments, payrolls, attendance — all structured and interrelated.

---

### 📦 Choose NoSQL When:

* **Data is flexible or unstructured** — JSON documents, dynamic fields, user-generated data
* **Speed and scale matter** — You’re writing tons of data (e.g., logs, metrics, events)
* **Relationships are minimal or unnecessary** — Not everything needs foreign keys
* **You’re okay with eventual consistency** — Real-time chat, analytics, product catalogs
* **You want faster dev cycles** — Great for MVPs, quick prototypes, evolving schemas

🧠 **Real-life example:** A social media platform feed — posts, likes, comments that vary in structure and scale rapidly.

---

## What I Do Differently Now

Today, I ask myself:

* What is the structure of the data?
* Will the schema evolve over time?
* Do I need strong consistency or eventual is fine?
* Am I optimizing for speed, structure, or scale?

And only *then* do I choose a tool.

Since that interview, I’ve graduated — but I still think about that moment. It taught me more than just database theory. It taught me the value of understanding your tools, not just using them.

---

## Final Thought

Don’t choose tech because it’s trendy. Choose it because it fits.

If this story resonates, feel free to share your own. Sometimes the best lessons come from the interviews we don’t clear.

---

**Tags**: #SoftwareEngineering #SQLvsNoSQL #DeveloperJourney #TechInterviews #LearningInPublic
