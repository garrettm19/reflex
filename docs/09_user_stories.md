# Reflex – User Stories

## Overview

This document defines key user stories that outline how different types of traders will interact with Reflex. These stories ensure the product meets real-world needs and are useful for guiding feature implementation, design priorities, and user flows.

---

## Primary Persona: Funded Futures Trader

**Name:** Alex  
**Age:** 26  
**Platform:** Apex / MyFundedFutures  
**Instrument:** NQ (NASDAQ Futures)  
**Challenges:**  
- Breaks rules after 2 losses in a row  
- Often trades to “flip a day” to meet evaluation minimums  
- Has no consistent journaling habit  
- Wants to scale across multiple prop firms

---

## User Stories

### Journaling & Self-Reflection

- As a funded trader, I want to quickly log my trade without friction, so I can build a habit of reviewing every day.
- As a trader, I want to tag trades as “flipped” so they don’t count against my evaluation of trade quality.
- As a trader, I want to attach a screenshot of my chart, so I can review my entry context later.
- As a user, I want AI to summarize my trades so I don’t have to write a long journal entry every time.

---

### Rules & Behavior

- As a trader, I want to define rules (e.g., max trades, time window) and be notified if I break them.
- As a user, I want the mascot to stop me from continuing after 3 trades if I’ve defined that rule.
- As a trader, I want to see which trades followed my rules and which didn’t.
- As a user, I want to be warned if I’m in a losing streak so I can reduce my size or pause.

---

### Gamification & Motivation

- As a trader, I want to earn XP and streaks for following my plan, not just for trading.
- As a user, I want to feel rewarded even if I didn’t trade, as long as I showed discipline.
- As a trader, I want badges or titles that represent my discipline growth over time.
- As a user, I want my mascot to cheer me on when I hit a milestone.

---

### Resume & Review

- As a trader, I want to export my behavioral performance (e.g., streaks, rule adherence) to track my growth.
- As a user, I want to share my journal and discipline stats with my mentor or community.
- As a trader, I want to reflect on what triggers most of my mistakes, so I can improve long term.

---

## Notes

These user stories can be mapped to existing features and used to drive future UI/UX improvements and backlog prioritization. They also serve as validation that Reflex is designed for real trader workflows—not theoretical usage.
