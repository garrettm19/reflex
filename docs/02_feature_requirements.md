# Reflex – Feature Requirements

## Overview

This document outlines the functional requirements for Reflex, a discipline-focused journaling assistant for prop firm traders. These features are grouped by priority (MVP, Phase 2, and Future Enhancements) and aligned with the goals of improving discipline, reinforcing habits, and providing meaningful feedback throughout the trading process.

---

## 1. Minimum Viable Product (MVP)

### 1.1 Journaling System
- Create structured journal entries with:
  - Entry and exit price
  - R:R (planned and realized)
  - Market symbol
  - Trade outcome (Win, Loss, Break-Even, Flipped)
  - Trade notes, confluences, management review
  - Screenshot upload (annotated chart)
- Grade each trade (A–F) manually
- Color-coded outcome tagging (green, yellow, red)
- GPT-generated journal summaries and insights

### 1.2 Daily Logging
- Morning prompt: “Did you trade today?”
- Option to log a “No-Trade Day” with reflection
- XP rewards for logging a valid no-trade day

### 1.3 Rule Engine
- Define user rules:
  - Max trades per day
  - Permitted trading hours
  - Max loss threshold
- Detect and log rule breaks
- Trigger mascot warning/interruption when rules are broken

### 1.4 Gamification & Behavior Reinforcement
- XP system based on behavior (not profit)
- Daily streaks (with visible meter)
- Badges for milestones (e.g., 5 trades logged, 7-day streak)
- Title system (e.g., “Rule Follower”, “Redemption Arc”)
- Streak loss warning and “freeze” token option

### 1.5 Mascot System
- Floating overlay window (Electron)
- Idle animation, speech bubble interaction
- Speaks with user during events (e.g., warning, celebration, guidance)
- Reacts based on actions (journal completed, rule broken)

### 1.6 Trading Resume
- Exportable summary of:
  - Total trades logged
  - Rule adherence rate
  - Streak history
  - Discipline metrics
- Designed as a shareable PDF or visual “badge wall”

---

## 2. Phase 2 Enhancements

### 2.1 Customization
- Switch between mascot styles, voices, tones
- Toggle strict/focus mode (less intervention)
- Light/dark mode

### 2.2 Advanced AI Feedback
- Pattern detection (e.g., most losses after 3rd trade)
- Emotional trend tracking (e.g., losses during "anxious" states)
- AI suggestions on scaling risk, trade quality, habit changes

### 2.3 Profile Support
- Multiple trading profiles (for separate prop firm accounts)
- Independent rule tracking and journals per profile

---

## 3. Future Enhancements (Phase 3+)

### 3.1 Companion App
- Mobile app to log trades or no-trade days on the go
- Push notifications for daily check-ins or alerts

### 3.2 Challenge Mode
- Seasonal or weekly challenges (e.g., No Revenge Week)
- XP boost or limited-edition badges

### 3.3 Community Layer
- Private leaderboard (discipline score only, no PnL)
- Community streak events or accountability groups

### 3.4 Marketplace / Unlockables
- Cosmetic upgrades (mascot skins, voices, environments)
- Purchase or unlock through XP or behavior milestones

