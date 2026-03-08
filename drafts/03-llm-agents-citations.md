---
title: Building LLM Agents That Cite Their Sources
date: April 12, 2026
slug: llm-agents-cite-sources
excerpt: Most LLM applications generate plausible text. For governance and compliance use cases, plausible isn't enough — you need verifiable citations back to source evidence.
tags: LLM, AI Engineering, RAG
read_time: 8 min read
---

When we started building Meetless, we hit a design constraint that shaped our entire AI architecture: **every claim in a Decision Diff must be traceable to a source message, document section, or ticket.**

This isn't a nice-to-have. In governance, an uncited claim is worse than no claim at all — it creates false confidence. If a Decision Diff says "Sarah approved the scope change on March 5" and that's a hallucination, you've built your sprint plan on a lie.

## The Citation Problem

Most LLM applications treat citations as an afterthought — generate the text first, then try to link it to sources. This leads to the well-known problem of "plausible but unsourced" outputs where the LLM generates reasonable-sounding claims that don't correspond to any actual evidence.

For Meetless, we needed the opposite: **evidence-first generation**. The system should start with the source messages and documents, then compose a structured summary that refers back to them.

## Our Architecture: Evidence-Grounded Generation

Here's the approach we converged on after several iterations:

### Step 1: Evidence Collection

When a Decision Diff is triggered (either by a user or by the detection system), the first step is collecting all relevant evidence:

- The Slack messages in the thread or channel where the change was discussed
- The current state of linked Jira tickets
- The relevant sections of any linked PRDs or Confluence pages
- Prior Decision Diffs that touched the same scope

Each piece of evidence gets a unique identifier (e.g., `slack:C0123:1709654400.123` for a specific Slack message). This identifier is the citation anchor.

### Step 2: Structured Extraction

Rather than asking the LLM to "summarize what changed," we decompose the task into specific extractions:

- **Delta extraction**: What was the previous understanding? What is the new understanding? (Each statement must reference a specific evidence ID.)
- **Attribution**: Who initiated the change? Who was involved in the discussion? (Names linked to specific messages.)
- **Impact signals**: What downstream artifacts are mentioned or implied as affected?

Each extraction is a separate LLM call with a constrained output schema. This is less "creative" than a single free-form generation, but dramatically more reliable.

### Step 3: Assembly with Verification

The extracted components are assembled into a Decision Diff structure. Before finalizing, a verification pass checks:

- Every factual claim has at least one citation
- Every citation points to a real evidence item (not a hallucinated ID)
- The delta is logically consistent (the "before" state matches prior records)
- Mentioned people actually appear in the evidence

Claims that fail verification are flagged for human review rather than silently included.

## The Technical Details That Matter

### Citation Anchoring

We use a two-level citation system:

**Document-level citations** link to the source (e.g., "Slack message from @sarah in #product-planning"). These are always shown to the user.

**Span-level citations** link to the specific text within the source that supports the claim. These are available on hover/click for users who want to verify.

The span-level citations use character offsets into the original text, which means they're brittle to source edits but accurate at generation time. For Slack messages (which are rarely edited after the fact), this works well.

### Handling Ambiguity

Real conversations are ambiguous. A product manager might say "we should probably cut the batch API" — is that a decision or a suggestion? Our system handles this by:

1. **Confidence scoring**: Each extracted claim gets a confidence score. "We're cutting the batch API, confirmed with stakeholders" scores high. "Maybe we should reconsider the batch API" scores low.

2. **Explicit uncertainty**: Low-confidence claims are included in the Decision Diff but marked as "needs clarification" rather than stated as fact.

3. **Human-in-the-loop**: The draft Decision Diff always goes through human review before routing for approval. The human can promote uncertain claims to facts, demote them to notes, or remove them.

### Context Window Management

A governance system needs to process long conversation histories. A Slack thread about a scope change might span 50+ messages over several days, plus a 20-page PRD, plus 5 Jira tickets.

We handle this with a staged approach:

1. **Relevance filtering**: Use embedding similarity to identify which messages and document sections are relevant to the detected change. This typically reduces the context from thousands of tokens to hundreds.

2. **Chunked extraction**: For long evidence items (e.g., a full PRD), extract relevant sections rather than including the entire document.

3. **Multi-pass generation**: For complex changes that touch multiple areas, we run separate extraction passes for each area and merge the results.

## Lessons Learned

### What worked

- **Decomposed extraction beats monolithic generation.** Breaking the task into specific extractions (delta, attribution, impact) with constrained schemas produced dramatically better results than a single "analyze this change" prompt.

- **Verification as a separate pass is essential.** The generation model doesn't reliably self-check. A separate verification pass catches ~15% of citation errors that would otherwise ship.

- **Users trust cited claims more.** Early user testing showed that Decision Diffs with visible citations were accepted 3x faster than uncited summaries, even when the content was identical. The citations provide the confidence to approve quickly.

### What didn't work

- **Asking the LLM to generate citation IDs inline.** Early versions asked the model to include citation markers like `[slack:123]` in its output. This led to frequent hallucinated IDs. The current approach generates text and citations separately, then aligns them.

- **Using RAG for evidence retrieval.** Standard RAG (retrieve top-k chunks by embedding similarity) missed too many relevant messages. Conversation threads have temporal and contextual dependencies that pure similarity search doesn't capture. We switched to structured retrieval (all messages in the thread, all linked tickets) supplemented by similarity search for related context.

- **Single-model everything.** We initially tried using one model for all steps. Different steps have different requirements: extraction needs precision, verification needs logical reasoning, summarization needs clarity. Using specialized prompts (and sometimes different models) for each step improved quality across the board.

## The Broader Principle

The pattern of evidence-grounded generation isn't specific to governance. Any LLM application where accuracy matters more than creativity benefits from this architecture:

1. Collect and anchor evidence first
2. Extract structured claims with citations
3. Verify citations before output
4. Flag uncertainty explicitly

It's more engineering work than a simple prompt-and-pray approach. But for applications where a hallucination has real consequences — governance, legal, medical, financial — it's the only responsible architecture.

*If you're building LLM applications that need citation fidelity, I'd enjoy comparing approaches. [LinkedIn](https://www.linkedin.com/in/an-pham-atl/).*
