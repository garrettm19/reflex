# Reflex – System Architecture

## Overview

This document outlines the core technical architecture of the Reflex desktop application, including its platform structure, primary modules, state management, and overlay system.

Reflex is a local-first desktop application built with Electron and React, designed to help prop firm traders build discipline through gamification, structured journaling, and real-time behavioral feedback. The mascot assistant is implemented as an always-on-top floating window using Lottie animations and basic audio cues.

---

## Platform Stack

- **Electron**: Cross-platform desktop environment and window management.
- **React**: Component-based UI library for building the main application interface.
- **Tailwind CSS**: Utility-first CSS framework for consistent styling.
- **Zustand**: Lightweight global state management for managing UI and mascot state.
- **SQLite**: Local persistent data store for journal entries, rules, XP, and user settings.
- **Lottie**: JSON-based animation rendering for the mascot interface.
- **Web Audio API / TTS**: Audio feedback for mascot interactions.
- **OpenAI GPT API**: AI feedback engine for analyzing trade logs and generating smart journal insights.

---

## Project Folder Structure

The codebase will be organized as follows:

- `README.md`: Project overview and public-facing documentation.
- `docs/`: Product and SDLC documentation.
- `src/`: All source code.
  - `main/`: Electron main process and window control.
  - `renderer/`: React-based UI and main app logic.
  - `overlay/`: Floating mascot assistant interface.
  - `state/`: Zustand global state definitions.
  - `db/`: SQLite schema and database interactions.
  - `assets/`: Lottie animations, voice files, icons.
- `demo/`: Screenshots, preview videos, and media for documentation.

---

## Core Modules

### Main Process (Electron)
Handles the creation and coordination of the main app window and the mascot overlay. Manages inter-process communication (IPC) between frontends and triggers background services (e.g., autosave, daily checks).

### Renderer (React Frontend)
Controls the main app interface including journal entry forms, streak dashboards, rule editors, and settings. Uses Zustand for state flow and communicates with the mascot overlay when events occur (e.g., rule break, journal complete).

### Mascot Overlay
Runs as a separate always-on-top frameless Electron window. Uses Lottie for rendering animations and can switch between different emotional states (idle, alert, celebrate, etc.). Plays short sound effects or voice responses via the Web Audio API.

### State Management (Zustand)
Central store for:
- Journal entry state
- User-defined rules
- XP, streaks, and badge data
- Mascot behavior triggers and preferences

State is shared across the main window and overlay to keep everything in sync.

### Database (SQLite)
Stores all structured data locally, including:
- Journal entries with trade metrics and notes
- Daily trade logs (including no-trade days)
- Rule definitions and violation history
- XP and streak progress
- User settings and preferences

### AI Assistant (GPT)
Structured prompts are sent to the OpenAI API to:
- Summarize journal entries
- Detect trade behavior patterns
- Offer adaptive feedback and coaching suggestions
- Recommend changes to strategy or sizing

---

## Mascot Behavior System

The mascot responds to key behavioral events through audio, animation, and on-screen messages.

| Trigger                 | Description                                | Mascot Behavior                       |
|------------------------|--------------------------------------------|----------------------------------------|
| Rule Violation         | User breaks a defined trading rule         | Warning animation and text prompt      |
| Journal Completion     | User submits a trade log                   | Positive feedback animation            |
| No-Trade Day Logged    | User logs discipline on a no-trade day     | Encouraging reaction and XP reward     |
| Streak Achieved        | User maintains discipline for 7+ days      | Celebration animation and badge pop-up |
| Losing Streak Detected | 3+ rule breaks or red trades in sequence   | Alert behavior and guidance            |

---

## Security and Privacy

- All data is stored locally and never transmitted unless user explicitly exports or syncs.
- No broker credentials or API keys are required.
- Trade data used in GPT prompts is stripped of personal identifiers.
- Future cloud sync options will include encrypted backup.

---

## Data Privacy and Ethical Design

### Local-First Architecture

Reflex is intentionally designed as a **local-first desktop application**. All user data—including journal entries, rule definitions, screenshots, and trade annotations—is stored directly on the user's device via SQLite.

This architecture offers:

- **Full data ownership:** Users retain 100% control over their personal information.
- **Offline access:** The app works without internet access for maximum reliability.
- **No account or login required:** User identity is not tied to any external system or cloud platform.

### AI Usage and Privacy

When GPT-4 is used for journal analysis or trade feedback:

- Only **sanitized, context-limited** data is sent in the prompt.
- No broker credentials, personal identifiers, or PnL figures are transmitted.
- Users may optionally disable GPT feedback entirely in Settings.

### Future Cloud Sync (Optional)

If Reflex offers cloud sync or mobile integration in the future, it will follow these principles:

- Explicit opt-in for any data sharing
- End-to-end encryption for all synced data
- Clear, exportable format (e.g., JSON, PDF)

---

## Ethical Design Principles

Reflex is built on the belief that **discipline-first tools should support the trader—not manipulate them**. We follow these design principles:

- Encourage intentional behavior, not impulsive use
- Reward reflection and rule-following over “green days”
- Provide feedback to help, not criticize
- Avoid addiction loops or unnecessary engagement triggers

This ensures that Reflex remains a coaching tool—not a dopamine trap.

---

## Next Steps

- Finalize the data model schema for journal entries, rule history, and user metrics.
- Create mascot behavior map and response system architecture.
- Begin UI wireframe and flow diagram design.
