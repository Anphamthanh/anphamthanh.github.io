---
title: Agencies Have SOWs. Internal Teams Have Slack Threads.
date: March 16, 2026
slug: agencies-have-sows
excerpt: External teams have contracts and change orders. Internal teams have Slack messages and assumptions. That structural gap is why your retros keep saying "better communication" every sprint.
tags: Change Management, Software Delivery, Meetless
read_time: 5 min read
---

When an agency changes scope, everyone knows. When an internal team changes scope, nobody knows until someone ships the wrong thing.

If you've ever worked with an external agency, you know the drill. The project starts with a Statement of Work. Change the scope? New SOW. Or at minimum a change order that both sides sign. There's a paper trail, there's a cost line, there's a moment where someone says "this changes the deliverable and here's what it means."

Nobody loves the paperwork. But it works. Both sides know what's being built, what changed, and who agreed to it.

Now look at how your internal product team handles the exact same thing.

## The Internal Team Version

PM realizes the payment flow needs offline support. Not a small change. Affects three engineers, one QA, and the sprint timeline.

Here's what happens:

PM updates the Jira ticket description. Adds two sentences at the bottom. Posts in the team Slack channel: "heads up, updated PAY-247 with offline requirements." Mentions it in standup the next morning.

That's the internal "change order."

No formal record of what changed. No explicit list of who's affected. No sign-off from the people who are mid-build against the old spec. No acknowledgment that anyone actually read the update, understood the implications, and adjusted their work.

The PM did everything right by current norms. They communicated. They updated the ticket. They mentioned it in standup.

And two engineers still shipped against the old spec because one was in a different channel and the other read the ticket Monday before the edit.

## Why This Keeps Happening

The structural difference is obvious once you see it:

Agency work has a formal scope boundary because money is crossing that boundary. When dollars are attached to deliverables, both sides have an incentive to document exactly what's being built and flag when it changes. The SOW isn't about trust or distrust. It's about clarity. Both sides want it because ambiguity costs money.

Internal work has no scope boundary because it's all one team, one budget, one org chart. The assumption is that everyone is aligned because everyone is on the same side. Information should just flow. People should just know.

Except they don't. The information doesn't flow because there's no mechanism forcing it to flow. There's no SOW. There's no change order. There's no moment where the change is made explicit, the affected people are identified, and acknowledgment is collected.

There's a Slack message and an assumption.

## The Cost Nobody Measures

Agencies track scope changes because they're billable. Internal teams don't track scope changes because they're "just communication overhead."

But the cost is real. It just shows up differently.

It shows up as a sprint that runs 4 days long with no obvious reason. As a QA cycle where 23 tests were written against a spec that changed last Tuesday. As a retro where the action item is "better communication" for the third sprint in a row.

One team we talked to traced it. A single spec change posted in Slack, not seen by two engineers who were mid-build. Result: 135 hours of rework. About $27,000 in engineering time, plus a 3-week slip on the release.

That's one change. One sprint. One team.

Most teams have 3 to 5 of these per sprint. Nobody counts them because each one feels like normal coordination overhead. It's not overhead. It's the cost of having no formal scope boundary inside your own org.

## What an Internal SOW Would Actually Look Like

You don't need a 12-page legal document. You need four things:

**What changed.** Not the whole spec. Just the delta. What was true before, what's true now, and why.

**Who's affected.** Specifically. Not "the team." Which engineers are mid-build against assumptions this change invalidates? Which QA tests need updating? Which downstream teams need to know?

**Explicit acknowledgment.** Not "I posted it in Slack." Actual confirmation from each affected person that they saw the change, understood the impact, and adjusted their work. A read receipt for scope changes.

**An audit trail.** Six months from now, when someone asks "who signed off on cutting offline support," the answer shouldn't require archaeology through 200 messages in a Slack thread. It should be one click.

That's it. Four things. Takes about 2 minutes to document per change. Saves days of rework per sprint.

## The Objection I Always Hear

"This adds process overhead. We're a startup. We move fast. We can't add bureaucracy."

I get it. But consider what you're really saying: "We'd rather absorb 3-5 untracked scope changes per sprint, each potentially costing days of rework, than spend 2 minutes documenting what changed and confirming the right people saw it."

The SOW isn't bureaucracy. It's the cheapest insurance policy in software delivery. Agencies figured this out decades ago because they had to. Internal teams haven't figured it out because the cost is invisible.

It stays invisible until the demo, when someone opens the build and says the five most expensive words in product development:

"Wait, who signed off on this?"
