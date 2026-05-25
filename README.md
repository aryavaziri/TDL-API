# To Do List Software

A full-stack to-do list application built with Next.js, Express, MongoDB, Mongoose, JWT authentication, and Google OAuth. The project is structured as a separate frontend and backend app, with list management features and early GraphQL/Apollo API experiments.

## Features

- Next.js frontend with a responsive Tailwind CSS interface
- Express backend with REST routes for authentication and list operations
- MongoDB/Mongoose models for users, lists, items, collaborators, and item status
- JWT-based authentication validation and Google OAuth login flow
- List/item actions for adding items, marking items complete, deleting items, and clearing list state
- Apollo GraphQL setup for experimenting with schema-driven APIs
- Light/dark theme state and navigation/menu UI components

## Project Structure

- `frontend/` - Next.js application, UI components, navigation, list views, and Tailwind styling
- `backend/` - Express API, MongoDB connection, auth routes, list routes, models, and GraphQL schema/resolvers

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Node.js
- Express
- MongoDB / Mongoose
- JWT
- Google OAuth
- GraphQL / Apollo

## Running Locally

Backend:

```bash
cd backend
npm install
npm start
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

The backend listens on port `3000`, and the frontend development server is configured for port `3010`.

Create a backend `.env` file with your MongoDB connection string and Google OAuth credentials before running the authentication flow.
