# Changelog

## [v0.1.5] – 2025-05-26
- Implemented mascot system with Lottie-based animations
- Added Zustand store to manage mascot state and speech bubble
- Prevented mascot from blocking UI with `pointer-events-none`
- Plugged mascot into layout and ready for behavioral triggers

## [v0.1.4] – 2025-05-26
- Implemented Journal Entry feature
  - Added `JournalForm.tsx` for logging trades with R:R, result, and notes
  - Created Zustand store `useJournalStore.ts` to manage journal entry state
  - Included success confirmation UI and form validation

## [v0.1.3] – 2025-05-26
- Implemented Check-In UX flow
  - Added `CheckIn.tsx` component to prompt daily discipline check
  - Created Zustand store `useCheckInStore.ts` to log daily check-in data
  - Prevents duplicate check-ins and stores state per session

## [v0.1.2] – 2025-05-26
- Fully configured and verified working Electron + Vite + React + TypeScript stack
- Switched to Electron-based launcher using `esbuild-register` for TypeScript support
- Installed and configured Tailwind CSS v4 with `@tailwindcss/postcss`
- Implemented base layout shell including sidebar, header, and main content area
- Added `Layout.tsx` reusable component and wrapped `App.tsx` for consistent structure
- Verified live dev environment with `npm run start` and Vite/Electron hot reload

## [v0.1.1] – 2025-05-25
- Added GitHub project board link to README
- Included all 11 documentation files in Full Documentation section
- Updated file structure overview to include `.github/` and `docs/_index.md`
- Confirmed screenshots table and placeholder references are in place
- Standardized section headers and polished README layout

## [v0.1.0] – 2025-05-25
- Completed SDLC documentation (Phases 1–11)
- Added README, LICENSE, TODO, and changelog
- Finalized user stories, personas, metrics
