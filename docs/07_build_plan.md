# Reflex – Development Plan and Sprint Roadmap

## Overview

This document outlines the development roadmap for Reflex, broken into structured sprint cycles. Each sprint is 1 week in length and focuses on a deliverable that moves the project toward a functioning MVP with scalable architecture.

The goal is to demonstrate professional project planning, disciplined build strategy, and adherence to the software development life cycle.

---

## Sprint Structure

- Duration: 1 week per sprint
- Format: Plan → Build → Test → Review
- Tools: GitHub issues, local test builds, and dev logs

---

## Sprint 1: Project Bootstrapping

**Goal:** Set up initial codebase and window structure

**Deliverables:**
- Electron + React + Tailwind boilerplate
- Create main app window and frameless mascot overlay
- Mascot window is draggable, always-on-top, and transparent
- README and folder structure established

---

## Sprint 2: Global State and Local DB

**Goal:** Build core infrastructure

**Deliverables:**
- Zustand store for XP, streaks, journal inputs, mascot state
- SQLite database schema created and initialized
- Local persistence of:
  - Journal entries
  - User settings
  - Daily logs
  - XP and rules

---

## Sprint 3: Journal Entry System

**Goal:** Enable trade journaling and reflection

**Deliverables:**
- Full journal form UI (React)
- Screenshot uploader with local image path storage
- GPT API integration for trade summary
- Journal entries saved to SQLite and Zustand
- Mascot responds to journal submission

---

## Sprint 4: Rule Engine + Live Monitoring

**Goal:** Track user-defined rules and trigger mascot behavior

**Deliverables:**
- Rules form UI (max trades, trading hours, etc.)
- Live rule checking during journaling session
- Mascot warning behavior on rule break
- Journal auto-tagging based on rules followed or broken

---

## Sprint 5: Gamification Engine

**Goal:** Build reward mechanics

**Deliverables:**
- XP system and streak tracker
- Badge unlock logic
- Visual feedback in dashboard
- Hard mode toggle (optional strict rule enforcement)

---

## Sprint 6: Resume Export and Review UI

**Goal:** Let users reflect and track growth

**Deliverables:**
- Weekly summary view
- Exportable discipline resume (PDF)
- XP, badge, and grade history display
- Mascot reacts to major milestones

---

## Sprint 7: Polish and QA

**Goal:** Test and refine the MVP

**Deliverables:**
- Audio cues and mascot expressions
- Dark/light theme toggle
- Settings screen for user preferences
- Bug fixes and UI refinements

---

## Post-MVP (Optional)

- Cloud sync or Notion export
- Mobile companion logging app
- Marketplace for skins, voices, and features
- Leaderboards or community metrics

---

## Next Steps

- Track each sprint in GitHub Issues or a Kanban tool
- Link commits to sprint deliverables
- Write a development log or weekly changelog

