# Fitness & Diet Tracking Platform — Phase 1 (Demo)

## Project Title
Fitness & Diet Tracking Platform (Phase 1) — Separate demo setups (Frontend & Backend)

## Aim
Provide a basic, ready-to-upload GitHub project showing a working demo frontend (React) and a demo backend (Node + Express). This Phase 1 submission demonstrates structure, example routes, sample React components, and a MySQL schema.

## Features
- Demo user registration and login routes (in-memory for demo)
- Demo diet and workout endpoints with sample data
- React dashboard with ProgressChart, QuickActions, SummaryCards
- Sample MySQL schema (schema.sql) for Phase 1
- Clear instructions in README for running frontend and backend separately

## Technologies Used
- Frontend: React, Recharts
- Backend: Node.js, Express
- Database (schema): MySQL (schema.sql provided)
- Tools: npm, Postman (recommended), VS Code

## Short Notes / Sample Content
- Backend runs on port 5000 by default. (`npm install` → `npm start`)
- Frontend runs on port 3000 by default. (`npm install` → `npm start`)
- The backend included here is a demo: it stores users/meals/workouts in memory for Phase 1. For production, connect the server to MySQL using the provided `config/db.js` and `schema.sql`.
- `output.png` is a placeholder image for your GitHub repo README or project page.

## How to run (separate demo setups)
1. Backend
   - cd backend
   - npm install
   - (optional) create a .env file with `JWT_SECRET`, `DB_*` if you plan to connect a database
   - npm start
2. Frontend
   - cd frontend
   - npm install
   - npm start

## Files of interest
- `/backend/server.js` - entry point for backend demo API
- `/backend/routes` - sample API endpoints
- `/backend/schema.sql` - MySQL schema for Phase 1
- `/frontend/src/components` - React components (Dashboard, Header, ProgressChart, etc.)
- `output.png` - demo output screenshot placeholder

Good luck! Use this repository as a Phase 1 submission and expand features in Phase 2 (authentication persistence, MySQL integration, real analytics, CI/CD).
