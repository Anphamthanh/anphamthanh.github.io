---
title: Decision Diffs in Practice: Early Results from Our First Teams
date: May 24, 2026
slug: decision-diffs-pilot-results
excerpt: We deployed Decision Diffs with our first pilot teams. Here's what we measured, what surprised us, and what we're changing based on real usage.
tags: Meetless, Decision Diff, Metrics
read_time: 7 min read
---

For the past several months, we've been running Meetless with early-adopter teams. This post shares what we've learned — the metrics that improved, the surprises, and the honest gaps.

## The Setup

Our pilot teams share common characteristics:

- 8-25 engineers
- Using Slack for communication and Jira for task tracking
- Shipping on 2-week sprint cycles
- Experiencing visible scope drift and rework issues

We deployed Meetless as a Slack integration with Jira connectivity. The core workflow: when a scope change is detected or flagged, the system generates a Decision Diff, routes it for approval, and propagates the result.

## What We Measured

### Decision Cycle Time

**Before Meetless**: The average time from "someone mentions a scope change" to "an authorized person explicitly approves or rejects it" was **3.2 days**. In many cases, the change was never explicitly approved — it just gradually became the new reality through implicit consensus.

**With Meetless**: Average decision cycle time dropped to **4.7 hours**. The biggest factor wasn't faster approval — it was faster *surfacing*. Changes that previously lived as buried Slack messages now immediately produced visible Decision Diffs that demanded explicit action.

### Rework Incidents

We tracked "rework incidents" — cases where an engineer had to modify completed work due to a scope change they weren't aware of.

**Before**: Average of 6.4 rework incidents per team per sprint.

**After 4 weeks of Meetless**: Average of 2.1 rework incidents per team per sprint. A **67% reduction**.

The remaining incidents were primarily "discovery rework" — legitimate changes from testing and user feedback, not scope miscommunication.

### Approval Speed

One concern we had was that adding an approval step would slow teams down. The opposite happened.

The average approval time for a Decision Diff was **47 minutes**. Most approvals happened within the first hour of creation. Why? Because the Decision Diff provided a clear, structured summary with citations — approvers could read it in 30 seconds and make a confident decision.

Compare this to the previous state: an approver would need to read an entire Slack thread (or multiple threads), piece together what changed, assess the impact themselves, and then communicate their decision informally. That process took days not because the approval itself was slow, but because the *preparation* for the decision was slow.

## What Surprised Us

### Surprise 1: Detection Coverage Was Lower Than Expected

Our AI detection system — which monitors Slack for messages that represent scope changes — caught approximately 60% of actual scope changes. The other 40% were flagged manually by team members using the Slack shortcut.

We expected higher automated detection. The gap came from two sources:

- **Implicit scope changes**: A designer sharing a new mockup that subtly changes a workflow doesn't use language that reads as a "scope change." It reads as "here's the updated design" — but the engineering implications are significant.

- **Cross-channel changes**: A decision made in a leadership meeting and communicated via a brief Slack summary often lacks enough context for the AI to assess whether it represents a meaningful scope change.

We're addressing this with better context integration (pulling in linked documents and prior decisions) and training the detection model on real examples from our pilot teams.

### Surprise 2: Teams Created Diffs Preemptively

We designed Decision Diffs for reactive governance — detect a change, create a diff. But teams started using them *proactively*. Before proposing a scope change in Slack, PMs would create a Decision Diff to frame the change, gather approvals, and then announce it with the approved artifact attached.

This inverted our expected workflow and was arguably more valuable. A preemptive Decision Diff prevents the misunderstanding from ever occurring, rather than catching it after the fact.

### Surprise 3: The Audit Trail Changed Retrospectives

Retrospectives went from "we had some scope issues this sprint, we should communicate better" to "we had 3 Decision Diffs this sprint — Diff #12 was approved quickly but Diff #14 took 2 days because the PM was out, which delayed the payments work."

The specificity transformed retrospectives from vague feelings into data-driven discussions. Teams could identify exactly where their decision-making process broke down and fix specific bottlenecks.

## What We're Changing

### Improvement 1: Lighter Diffs for Small Changes

Not every scope change needs a full Decision Diff with impact analysis and multi-person approval. A small copy change or a minor UI tweak needs acknowledgment, not governance.

We're adding "lightweight diffs" — a one-click acknowledge flow for changes below a configurable impact threshold. Full governance for significant changes, fast-track for minor ones.

### Improvement 2: Better Impact Analysis

The current impact analysis is good at identifying affected Jira tickets (via direct links) but weak at identifying indirect impacts — for example, a change to the API contract that affects a downstream mobile team's work.

We're building a dependency graph that maps relationships between tickets, services, and teams, so the impact analysis can surface indirect effects.

### Improvement 3: Metrics Dashboard

Teams want to see their governance metrics over time: decision velocity, rework trends, approval bottlenecks. We're building a sprint-level dashboard that shows these metrics and allows comparison across sprints.

## The Honest Gaps

Not everything is working perfectly. Some honest limitations:

- **Adoption varies by role.** Engineers adopted quickly (they benefit most from reduced rework). PMs adopted moderately. Designers are the slowest adopters — the tool feels like overhead for a group that often communicates through visual artifacts, not text.

- **AI quality isn't 100%.** The drafted Decision Diffs need human editing in roughly 30% of cases. The AI gets the broad strokes right but sometimes misidentifies the scope of a change or generates citations to tangentially related messages.

- **Integration depth is limited.** We currently support Slack + Jira. Teams using Notion for PRDs, Confluence for specs, or Linear for task tracking need manual workarounds. Broader integration is on the roadmap.

## What's Next

The early results validate the core thesis: making decisions explicit, auditable, and fast to approve reduces rework and accelerates delivery. The metrics are strong enough to move from pilot to broader deployment.

Our focus for the next quarter:

1. **Improve AI detection coverage** from 60% to 80%+ with better context and training data
2. **Ship the metrics dashboard** so teams can measure their own governance health
3. **Add Jira issue panel** so engineers see relevant Decision Diffs directly in their workflow
4. **Build the lightweight diff** flow for low-impact changes

The vision is a world where no meaningful scope change in software delivery happens without producing an auditable artifact. We're not there yet, but the path is clear.

*If you want to be part of the next wave of pilots, or if you have a team that's bleeding velocity to scope drift, reach out on [LinkedIn](https://www.linkedin.com/in/an-pham-atl/).*
