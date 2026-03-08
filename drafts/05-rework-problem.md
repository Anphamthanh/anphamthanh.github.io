---
title: The $1.7T Rework Problem in U.S. Software Delivery
date: May 10, 2026
slug: rework-problem-us-software
excerpt: The U.S. spends $1.7 trillion annually on software and IT. Up to 30% of that is rework from scope miscommunication. Here's why this is a governance problem, not a process problem.
tags: Software Delivery, Governance, Economics
read_time: 6 min read
---

Let me frame the problem with numbers.

The U.S. software development and IT services market generates approximately **$1.7 trillion in annual spending**. This includes internal engineering teams, outsourced development, consulting, and SaaS delivery.

Industry research from the Standish Group, McKinsey, and the Project Management Institute consistently finds that **20-30% of software project costs are attributable to rework** — work that was completed correctly against incorrect or outdated requirements.

That's **$340-510 billion in annual waste**. Not from bugs. Not from bad engineers. From building the right thing to the wrong spec because a decision changed and nobody told the right people.

## Why "Communicate Better" Doesn't Work

Every retrospective where scope creep is identified ends with the same action item: "we need to communicate better." This has been the conclusion of software retrospectives for 30 years, and it has never worked. Here's why:

**Communication isn't the problem. Infrastructure is.**

Consider a parallel: before version control, teams had "communication problems" about which version of the code was current. The solution wasn't better communication — it was Git. A system that made code state explicit, diffable, and auditable.

Product decisions today are in the pre-Git era. The "current state" of what a team has agreed to build lives in a combination of:

- A PRD that may or may not be up to date
- Jira tickets that may or may not reflect the latest scope
- Slack threads that scroll off-screen
- Meeting notes that 60% of the team didn't read
- Tribal knowledge in the heads of senior team members

When a scope change happens, it modifies this distributed, informal, unversioned state. There's no diff. There's no review. There's no CI check. The change just... propagates (or doesn't) through human channels.

## The Rework Taxonomy

Not all rework is created equal. Through my experience leading engineering teams at scale, I've identified three categories:

### 1. Specification Rework (40-50% of total)

The requirements changed but the team didn't know. This is the scope drift problem — someone decides to cut a feature, modify a workflow, or change a priority, and the engineers building it find out after they've already committed work.

**Cost**: High. Often means throwing away completed work and starting over with new requirements.

**Preventable?** Yes — with a system that detects and propagates scope changes to affected teams before they finish building the wrong thing.

### 2. Interpretation Rework (30-40% of total)

The requirements didn't change, but different people interpreted them differently. The PM wrote "support batch operations" and the engineer built a synchronous batch endpoint when the PM meant async. Both read the same spec. Both thought they understood.

**Cost**: Medium. Usually requires modifications rather than full rebuilds, but accumulates across dozens of ambiguous specs per sprint.

**Preventable?** Partially — with a system that surfaces ambiguities before implementation and requires explicit clarification.

### 3. Discovery Rework (10-20% of total)

The team built what was specified, but testing or user feedback revealed the spec was wrong. This is the healthy kind of rework — learning through building. Agile is designed for this.

**Cost**: Expected and budgeted. This is the rework you want.

**Preventable?** No, and you shouldn't try. This is how good products are built.

The first two categories — specification rework and interpretation rework — account for **70-90% of waste** and are both addressable with better decision infrastructure.

## Why This Is Getting Worse

Three trends are compounding the rework problem:

### AI-Accelerated Development

When developers ship 2x faster with AI coding assistants, the feedback loop between "decision made" and "code shipped" shrinks. There's less time for misalignments to surface organically. A scope change that would have been caught in a code review on day 5 now ships to staging on day 2.

### Remote and Async Work

The informal governance mechanisms of co-located teams — overhearing a relevant conversation, catching a misunderstanding at the whiteboard, asking a quick clarifying question across the desk — are gone. In distributed teams, if a decision isn't captured in a system, it effectively didn't happen.

### Increasing System Complexity

Modern software systems are more interconnected than ever. A scope change in one service cascades to dependent services, API contracts, test suites, deployment configurations, and documentation. The blast radius of a poorly communicated change grows with system complexity.

## The Governance Solution

What the industry needs isn't another project management tool or another communication platform. It's a **governance layer** — a thin, fast, mostly automated system that:

1. **Detects** when a meaningful scope change occurs in natural communication channels
2. **Structures** the change into an auditable artifact with evidence and citations
3. **Analyzes** the downstream impact on affected artifacts and teams
4. **Routes** the change to the right decision-makers for explicit approval
5. **Propagates** the approved change back into delivery tools automatically
6. **Measures** decision velocity and rework reduction to prove ROI

This is what we're building at Meetless. The Decision Diff is the core primitive — a structured, cited, auditable artifact for every meaningful scope change.

## The Economic Case

If a governance layer can reduce specification and interpretation rework by even 30%, the impact at the industry level is:

- 70-90% of $340-510B in annual waste = $238-459B addressable
- 30% reduction = **$71-138 billion in annual savings** for U.S. software delivery

At the company level, a 100-person engineering team averaging $200K total cost per engineer spends $20M/year on engineering. If 25% is rework and governance reduces that by 30%, that's **$1.5M/year saved** — in a single team.

The ROI on governance infrastructure isn't measured in developer satisfaction surveys. It's measured in recovered engineering capacity and faster time-to-market.

## What Comes Next

In upcoming posts, I'll share results from our first pilot deployments — real metrics on decision cycle time, rework reduction, and team adoption. The early data is promising.

The $1.7T rework problem isn't going to be solved by telling teams to communicate better. It's going to be solved by building the infrastructure that makes good decision-making the default, not the exception.

*If you want to see the data from our pilots, follow along here or connect on [LinkedIn](https://www.linkedin.com/in/an-pham-atl/).*
