# Reflex – UI & Wireframes

## Overview

This document defines the primary screens and user flows within the Reflex application. Each screen supports one or more features defined in the requirements phase. This also outlines where and how the mascot appears, interacts, and provides feedback to the user.

---

## Core Screens

### 1. Dashboard

**Purpose:** Serve as the main hub for the user.

**Key Elements:**
- Daily streak meter
- XP total and level indicator
- Prompt: “Did you trade today?”
- Summary of recent journal entries
- Daily status: green/yellow/red behavior indicator
- Link to start a new journal

**Mascot Behavior:**
- Idle animation when dashboard is open
- Appears with greeting at login
- Encourages logging if user has not yet responded

---

### 2. Journal Entry

**Purpose:** Allow the user to log, reflect, and grade a trade.

**Key Elements:**
- Form inputs: date, time, market, prices, size, R:R
- Text boxes: confluences, management notes, takeaway
- Screenshot uploader (with annotation reminder)
- Grade selector (A–F) and color tag (green/yellow/red)
- Submit button (triggers XP and mascot feedback)

**Mascot Behavior:**
- Speaks after journal submitted: feedback or encouragement
- Celebrates on high-grade trades
- Shows reflection if multiple rule breaks are logged

---

### 3. Rules & Settings

**Purpose:** Let users define behavior boundaries.

**Key Elements:**
- Max trades per day
- Trading hours
- Daily loss limit
- Mode toggle (standard, strict, focus)
- Voice, mascot appearance, theme

**Mascot Behavior:**
- None here unless triggered by preview/test mode

---

### 4. Review & Resume

**Purpose:** Display long-term performance and progress.

**Key Elements:**
- Weekly calendar with color-coded behavior summaries
- Chart of rule breaks over time
- List of badges and unlocked titles
- Export resume button (PDF of behavioral metrics)

**Mascot Behavior:**
- Animates upon badge unlock
- Shows encouragement based on improvement trends

---

## Mascot Interaction Zones

The mascot lives in a floating, transparent overlay window. It does not block UI.

**Behavior Triggers:**
| Event                   | Response                          |
|------------------------|-----------------------------------|
| App opened             | Greeting and streak reminder      |
| No trade logged        | "Smart choice today."             |
| Rule break             | Red flag warning + encouragement  |
| Streak achieved        | Celebration (fly/spin/XP burst)   |
| Trade journaled        | Comment based on grade + sound FX |

---

## Planned Wireframe Screens (To Be Designed)

| Screen | Description |
|--------|-------------|
| `dashboard_wireframe.png` | Main hub with streak meter, mascot, prompt |
| `journal_entry_wireframe.png` | Full trade logging form |
| `rules_screen_wireframe.png` | Rule management panel |
| `review_resume_wireframe.png` | Visual recap and exportable data |
| `mascot_overlay_flow.png` | Diagram of mascot states and triggers |

---

## Next Steps

- Sketch wireframes in Figma or by hand (link or export to `docs/`)
- Map mascot states to events in wireframe screens
- Define animation cues (sound, movement, expressions)
