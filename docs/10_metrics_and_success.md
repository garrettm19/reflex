# Reflex – Metrics and Success Criteria

## Overview

This document outlines metrics that would be tracked in a future analytics layer. These are not implemented in the MVP, but serve as design guidance and future roadmap features.

---

## Behavior Metrics

- **Journal Completion Rate**
  - % of days where user submitted a journal entry
  - Signals engagement with reflection process

- **No-Trade Logging Rate**
  - % of active days where no-trade was logged with reasoning
  - Indicates discipline and intentional restraint

- **Rule Violation Frequency**
  - Avg # of violations per week
  - Key indicator of breakdown in user behavior

- **Flipped Trade Usage**
  - % of trades tagged as “flipped”
  - Helps separate compliance trades from actual setups

---

## Engagement Metrics

- **Streak Length Distribution**
  - Number of users with 3-day, 7-day, 14+ day streaks
  - Measures how motivating streak and XP system is

- **Mascot Interaction Frequency**
  - How often mascot warnings or celebrations are triggered
  - Reveals how often users break vs. follow rules

- **Resume Exports**
  - Count and frequency of resume/PDF exports
  - Signals usage of Reflex as a behavioral accountability tool

---

## Success Criteria

These can be used to measure if Reflex is achieving its core mission:

- >80% of trades logged are rule-compliant
- >60% of active users maintain 5+ day streaks
- >40% of days logged are “no-trade” with reflection
- Average weekly XP growth is positive over 4-week periods

---

## Future Implementation Notes

- These metrics can be tracked locally or optionally synced if cloud support is added.
- Privacy-respecting event tracking could be enabled using self-hosted Plausible or local logging.
