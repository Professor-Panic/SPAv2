# Project Manager

A simple React project-management interface built with **React** and **Vite**. It allows users to view, create, and search projects through a responsive interface.

## Features

* **Project Landing Page** — Displays a list of existing projects.
* **Add Projects** — Create new projects by providing a project name and description.
* **Dynamic Search** — Filter projects in real time by their name.
* **Responsive Design** — Layout adapts to different screen sizes.
* **React State Management** — Uses `useState` to manage projects, form inputs, and search queries.
* **Component-Based Architecture** — UI functionality is separated into reusable React components.

## Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **CSS**
* **ESLint**

## How It Works

Projects are stored in React state:

```text
Initial Projects
      │
      ▼
  projects state
      │
      ├──────────────┐
      ▼              ▼
 Add Project      Search
      │              │
      ▼              ▼
 Update state    Filter projects
      │              │
      └───────┬──────┘
              ▼
        ProjectsList
```

When a user enters a project name and description, clicking **Add** adds the project to the existing project collection.

The search field updates a query stored in state. The query is then passed to the search function, which filters the projects before they are rendered.

## Project Structure

```text
src/
├── components/
│   ├── AddProject.jsx
│   ├── ProjectsList.jsx
│   └── Search.jsx
│
├── ...
└── main.jsx
```

The project separates functionality into components to keep the application easier to maintain and extend.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Future Improvements

Possible extensions include:

* Persistent project storage using `localStorage` or a database
* Project editing and deletion
* Search across both project names and descriptions
* Project categories or tags
* Sorting and filtering options
* Project detail pages
* Backend integration

## License

This project is intended as a learning/project exercise and can be freely modified for personal use.
