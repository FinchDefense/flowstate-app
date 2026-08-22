# FlowState

FlowState is a local-first focus companion that turns deep work into an RPG-inspired ritual. It combines a customizable Pomodoro timer, quest planning, session analytics, ambient audio, and a themed settings system in a React and TypeScript application.

The interface is built around the idea of entering the zone, completing quests, and keeping a record of focused work without requiring an account or backend.

[View the source on GitHub](https://github.com/FinchDefense/flowstate-app)

## Features

### Focus timer

- Focus, short-break, and long-break sessions
- Custom focus and break durations
- Configurable long-break interval
- Start, pause, restart, reset, and skip controls
- Keyboard controls: `Space` to start or pause, `R` to reset, and `S` to skip
- Optional immersive Focus Mode with rotating motivational quotes
- Mood presets that change the timer glow and atmosphere
- Pomodoro session counter and automatic document-title status

### Quest log

- Create quests with a campaign, threat tier, battle steps, and lore
- Edit and complete existing quests
- Filter quests by all, active, completed, or priority
- RPG-flavored categories for work, fitness, school, chores, and finances
- Quest data is persisted in the browser

### Performance dashboard

- Focus time and session totals for today and all time
- Current focus streak
- Seven-day focus chart
- Daily focus goal with progress indicator
- Recent session history with duration and time range

### Personalization and audio

- Set an adventurer name displayed on the welcome screen
- Toggle dark mode and light mode
- Enable Compact / Zen mode for a reduced timer layout
- Configure automatic focus and break starts
- Set alarm volume and repeat count
- Upload a personal wallpaper
- Add local music, control playback and volume, and skip tracks
- Mute all application audio

All supported preferences, quests, timer settings, session records, profile data, wallpaper data, and audio settings are stored locally with browser storage. FlowState does not currently require a server or user account.

## Tech stack

- React 19
- TypeScript
- Vite
- CSS
- React hooks for state and application behavior
- `localStorage` for persistence
- Recharts for the performance chart
- React Circular Progressbar for daily-goal progress
- Day.js and `idb-keyval` for supporting utilities and browser data handling

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run TypeScript checks and create a production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
├── components/
│   ├── GameMenu/       Main navigation, wallpaper, and music controls
│   ├── Settings/       Profile, timer, audio, appearance, and reset options
│   ├── Statistics/     Focus metrics, streaks, chart, and session history
│   ├── TaskList/       Quest creation, editing, filtering, and completion
│   └── Timer/          Timer display, controls, presets, and Focus Mode
├── hooks/              Timer, settings, audio, music, navigation, and quote logic
├── App.tsx             Application state and top-level page routing
└── index.css           Theme tokens, typography, and global styles
```

## Notes

FlowState is a client-side portfolio project. Data is scoped to the current browser profile, so clearing site data removes saved quests, settings, wallpaper, profile information, and session history. Music and wallpaper uploads are handled locally and are not uploaded to a remote service.
