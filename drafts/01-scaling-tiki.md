---
title: From E-Commerce to AI Governance: Lessons from Scaling TIKI
date: March 15, 2026
slug: from-ecommerce-to-ai-governance
excerpt: What running engineering at Vietnam's largest e-commerce platform taught me about the real bottleneck in software delivery — and why I'm now building governance infrastructure for AI-assisted teams.
tags: Engineering Leadership, E-Commerce, AI Governance
read_time: 7 min read
---

Between 2019 and 2022, I led engineering at TIKI — Vietnam's largest e-commerce platform. Core platform, payments, social network, digital marketplace. Tens of millions of users. Hundreds of engineers. Thousands of deployments per month.

The technical challenges were real: distributed systems at scale, payment reliability across banking partners, real-time inventory across thousands of sellers. But the hardest problems were never technical.

## The Real Bottleneck Was Never Code

At TIKI's scale, we could ship code fast. We had strong engineers, solid CI/CD, reasonable test coverage. What killed our velocity was something no monitoring dashboard could capture: **decision latency**.

A product manager mentions in a Slack thread that the checkout flow needs to handle a new payment method. An engineer starts building it based on that thread. Two days later, the PM clarifies in a meeting that the payment method is only for a specific merchant tier. The engineer has already built the general case. Three days of work, partially wasted.

Multiply this by dozens of teams, hundreds of features, and thousands of daily messages. The waste wasn't in the code — it was in the gap between what was decided and what was communicated.

## Patterns I Saw Repeat Everywhere

After TIKI, I led engineering at Hello Health Group (healthcare across 9 countries), then at Inspectorio (supply chain platform for 12,000+ brands). Different industries, different scales, different tech stacks. The same failure mode every time:

**1. Decisions travel through lossy channels.** A scope change agreed in a meeting gets partially relayed in Slack, which gets partially understood by the engineer reading the thread at 11 PM. Each hop loses fidelity.

**2. No one owns the decision artifact.** Jira tracks tasks. Confluence tracks documents. Slack tracks conversations. But no tool tracks the *decision itself* — what changed, who approved it, what it affects, and when it was propagated.

**3. Rework compounds silently.** A 2-hour misunderstanding doesn't show up as a 2-hour cost. It shows up as a PR that needs to be reworked, a test plan that needs revision, a deployment that gets rolled back, and a retrospective where everyone agrees to "communicate better" (they won't).

## The Scale of the Problem

At TIKI, I estimated that **20-25% of engineering capacity** was consumed by rework from poorly communicated scope changes. Not bugs. Not technical debt. Pure waste from decision-making friction.

At Hello Health Group, operating across 9 countries with multiple time zones, the problem was worse. A decision made in the Bangkok office at 3 PM reached the Ho Chi Minh City team the next morning — by which point 16 hours of parallel work might already be misaligned.

At Inspectorio, with 12,000+ brands and suppliers depending on the platform, the cost of a misaligned scope change wasn't just internal. It rippled out to customers.

## Why I Started Building the Solution

By the time I left Inspectorio, I had seen the same problem cause the same damage at four companies across three industries. The pattern was clear:

- The problem isn't that teams make bad decisions
- The problem is that decisions are **invisible** — they happen in informal channels, produce no artifacts, trigger no analysis, and route to no one for approval

Software engineering solved this for code 20 years ago with pull requests. You can't merge code without a diff, a review, and a CI check. But you can change the scope of a $2M feature with a Slack message and no one blinks.

## What's Different Now

Two things changed that make this solvable:

**LLMs can read context.** Five years ago, building a system that could read a Slack thread and determine whether a meaningful scope change occurred was a research project. Today, it's an API call. The cost of producing a structured decision artifact dropped from "someone has to manually write it" to "AI drafts it, a human reviews it in 30 seconds."

**Remote work made informal governance extinct.** The hallway conversation, the whiteboard session, the "hey, quick question" at someone's desk — these were informal governance mechanisms. They were lossy and unauditable, but they existed. In distributed teams, even those are gone. If you don't have a system, you have nothing.

## The Bet

That's why I'm building Meetless. Not because I think meetings are bad (the name is a bit misleading). But because the *decisions that happen in and around meetings* need infrastructure — the same way code changes need Git, PRs, and CI.

The core primitive is the **Decision Diff**: an auditable artifact that captures a scope change with evidence, routes it for approval, analyzes the downstream impact, and propagates the approved change back into the tools where work happens.

It's not a project management tool. It's not a meeting recorder. It's a **governance layer** that sits between your collaboration tools and your delivery tools, making sure decisions don't get lost in transit.

Every company I've worked at would have benefited from this. The question is whether the timing is right to build it as a product. I believe it is — and the early signals from our first pilots suggest I'm not wrong.

*More on the technical architecture in upcoming posts. If your team bleeds velocity to scope drift, I'd like to hear about it — connect on [LinkedIn](https://www.linkedin.com/in/an-pham-atl/).*
