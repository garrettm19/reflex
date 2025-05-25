# Reflex – A Discipline Assistant for Prop Firm Traders

Reflex is a local-first desktop application that helps funded traders improve discipline through journaling, gamification, and real-time behavioral feedback. Built using Electron and React, the app provides structured journaling, AI insights, streak tracking, and a floating mascot that responds to the trader’s actions.

---

## Project Purpose

Traders in prop firm environments (Apex, Topstep, MyFundedFutures, etc.) often fail not because of poor strategy, but because of broken discipline. Reflex addresses this by:

- Encouraging good habits and no-trade days
- Logging every trade with purpose, structure, and review
- Providing real-time feedback through a mascot assistant
- Helping traders stick to their rules and build confidence

---

## Key Features

- Trade journaling with R:R, grades, notes, and screenshots
- GPT-powered feedback on trade quality and behavioral patterns
- Daily check-ins with streak rewards, XP, and badges
- Rule system with live monitoring (max trades, trading hours, etc.)
- Transparent animated mascot overlay with voice and animation
- Exportable “Discipline Resume” PDF based on behavior, not PnL

---

## Tech Stack

- Electron – Cross-platform desktop shell
- React + Tailwind CSS – UI framework
- Zustand – Global state management
- SQLite – Local database for journals and progress
- OpenAI GPT-4 – AI feedback and trade analysis
- Lottie – Animated mascot overlay
- Web Audio API – Sound effects and voice

---

## Project Roadmap

Track progress: [Reflex GitHub Project Board](https://github.com/garrettm19/reflex/projects)

---

## File Structure Overview

- `src/` – Source code (Electron, React, Overlay, Zustand, DB)
- `docs/` – Full SDLC documentation (Phases 01–11)
- `demo/` – Screenshots and demo video assets
- `.github/` – Templates and contribution files
- `README.md` – Public project overview

---

## Installation (Coming Soon)

This project is in active development. The MVP scaffold will follow this setup:

1. Clone this repository  
   `git clone https://github.com/garrettm19/reflex.git`

2. Navigate into the project directory  
   `cd reflex`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm run dev`

---

## Getting Started (Planned)

Upon first launch:
1. User is prompted to define rules and settings.
2. Each day begins with a check-in: “Did you trade today?”
3. User logs a trade or a no-trade day.
4. Mascot responds to behavior and feedback is generated via GPT.
5. XP and streaks update automatically.

---

## Demo

**Demo video coming soon.** It will include:

- Logging a trade with screenshot and notes
- Receiving GPT feedback
- Mascot reacting to a rule break
- Viewing a 7-day streak and exporting the resume

---

## Screenshots (To Be Added)

Store the following images in the `/demo` folder:

- `dashboard_screenshot.png`
- `journal_entry_screenshot.png`
- `mascot_warning.png`
- `export_resume.png`

Update the table below once available.

| Dashboard | Journal Entry | Mascot Warning | Resume Export |
|-----------|----------------|----------------|----------------|
| *(screenshot)* | *(screenshot)* | *(screenshot)* | *(screenshot)* |

---

## Full Documentation

This project follows a full software development lifecycle (SDLC). Each phase is documented in `/docs/`.

- [01 – Problem Discovery](docs/01_discovery_and_problem.md)
- [02 – Feature Requirements](docs/02_feature_requirements.md)
- [03 – System Architecture](docs/03_system_architecture.md)
- [04 – Data Model](docs/04_data_model.md)
- [05 – Wireframes](docs/05_ui_wireframes.md)
- [06 – AI Design](docs/06_ai_design.md)
- [07 – Build Plan](docs/07_build_plan.md)
- [08 – Demo and Reflection](docs/08_demo_and_reflection.md)
- [09 – User Stories](docs/09_user_stories.md)
- [10 – Metrics & Success Plan](docs/10_metrics_and_success.md)
- [11 – User Persona & Flow](docs/11_user_persona_and_flow.md)

---

## Next Steps

- [ ] Scaffold Electron + React with overlay window
- [ ] Add mascot idle and feedback animations
- [ ] Implement SQLite journaling backend
- [ ] Add XP and badge logic
- [ ] Connect GPT feedback to journal entries
- [ ] Build resume export functionality
- [ ] Add demo screenshots to `/demo` folder
- [ ] Record and upload demo walkthrough video

---

## License

MIT License

---

## Author

Built by Mason Garrett  
Contact: mgarrett620@gmail.com  
GitHub: [garrettm19](https://github.com/garrettm19)
