# Reflex – AI Interaction Design

## Overview

This document outlines how Reflex integrates with the OpenAI GPT API to analyze journal entries and provide insightful, personalized feedback to traders. The goal of AI integration is to help users reflect on their behavior, identify patterns, and make actionable adjustments to improve trading discipline over time.

---

## GPT Use Cases

### 1. Trade Summary and Feedback

**Trigger:** After a journal entry is submitted  
**Input:** Formatted trade log with confluences, entry/exit, grade, result  
**Output:**
- Short natural-language summary
- Reinforcement or gentle correction
- Insight on setup quality, execution, or rule adherence

**Prompt Example:**

Given the following journaled trade:
- Market: NQ
- Planned R:R: 1:7
- Actual R:R: 1:3
- Result: Win
- Notes: Trade was taken after price tapped HTF order block...
- Grade: A

Provide a summary of the trade, brief feedback, and a suggestion for future improvement.

**Expected Output:**

This was a well-planned and executed trade that followed a high-quality setup. You managed risk appropriately by securing partials and trailing to breakeven. Continue prioritizing patience and clean entry timing. Watch for overconfidence after big wins.

---

### 2. Pattern Recognition Over Time

**Trigger:** Weekly review or streak check-in  
**Input:** All trades over the last 7–14 days  
**Output:**
- Behavior patterns (e.g., losses after midday trades, FOMO)
- Suggested adjustments to timing, size, or emotional control
- Strengths the trader should lean into

**Prompt Example:**

You are reviewing a series of 10 trades from the past two weeks. Identify behavior patterns, highlight strengths, and suggest one key improvement area.

---

### 3. Emotional Insight & Self-Awareness

**Trigger:** User logs multiple losses or breaks rules  
**Input:** Notes + grades from the trades involved  
**Output:**
- Emotional tone analysis (e.g., fear, frustration, overconfidence)
- A reflection-style response from the mascot
- Nudge to switch to "focus mode" or take a break

---

### 4. Streak Feedback / Motivation

**Trigger:** User reaches 5, 10, 20+ day streak  
**Input:** Summary of user behavior over streak  
**Output:**
- Encouragement message from GPT
- Highlight of best habits
- Reinforcement of discipline identity

**Prompt Example:**

The user has maintained a 10-day streak of rule-following and daily journaling. Summarize their discipline and offer motivating praise.

---

## Prompt Design Principles

- Always reward behavior, not trade result
- Keep feedback constructive and calm
- Avoid analysis of strategy accuracy (focus on process)
- Reflect user’s own notes in summaries to increase buy-in
- Keep messages between 2–4 sentences unless user asks for more

---

## Prompt Delivery

- All prompts are sent through a secure call to the OpenAI GPT-4 endpoint
- Journals are formatted into system prompts with embedded context
- User can enable or disable GPT feedback in Settings

---

## Next Steps

- Build prompt formatting utility in `src/ai/`
- Create mock input/output tests for summaries and pattern analysis
- Integrate GPT response into journal completion event
- Save AI feedback in `journal_entries.gpt_summary`
