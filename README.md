# Angular Tutorials

A comprehensive Angular learning resource, featuring step-by-step tutorials for building a complete task management application.

## 📚 About This Project

This project provides a structured learning path for Angular developers, from basic concepts to advanced features. The tutorials guide you through building a complete task management application, covering:

### 🚀 Getting Started

- **Introduction to Angular** - Overview of the framework and its benefits
- **Prerequisites** - What you need to know before starting
- **TypeScript Introduction** - Essential TypeScript concepts for Angular
- **Learning Process** - How to approach Angular learning effectively
- **Getting Started** - Setting up your development environment

### 🎯 Core Concepts

- **Task Listing** - Building your first components and displaying data
  - Components introduction
  - Creating your first component
  - Task interface and data structures
  - Interpolation and data binding
  - Using pipes for data transformation
  - Displaying lists with `*ngFor`
  - Adding UI libraries for better styling

### 🔧 Advanced Features

- **Reusable Components** - Building modular, maintainable code

  - Component inputs and outputs
  - Creating reusable components
  - Event handling and communication
  - Prefilling forms and data management
  - Bulk operations (delete all tasks)

- **Task Management** - Full CRUD operations

  - **Create Task** - Forms, services, and dependency injection
  - **Update Task** - Editing existing data and form handling
  - **Delete Task** - Removing data and UI updates

- **API Integration** - Backend connectivity
  - Setting up JSON Server
  - HTTP client configuration
  - CRUD operations with REST APIs
  - Error handling and data management

## 🌍 Multi-language Support

The tutorials are available in both English, French, and German, making them accessible to a wider audience of developers.

## 🏗️ Project Structure

```
.
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── assets/            # Project images and media
│   ├── components/        # React components for enhanced UI
│   ├── content/
│   │   └── docs/
│   │       ├── en/        # English tutorials
│   │       └── fr/        # French tutorials
│   ├── styles/
│   │   └── global.css     # Global styles and Tailwind CSS
│   └── content.config.ts  # Content configuration
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🧞 Local Development

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |

## 🎨 Styling

The project uses [Tailwind CSS](https://starlight.astro.build/guides/css-and-tailwind/#tailwind-css) for styling. Customize your design by modifying `src/styles/global.css`.

## 📖 Content Management

Tutorials are written in Markdown (`.mdx`) files located in `src/content/docs/`. Each file is automatically exposed as a route based on its file name. Images can be added to `src/assets/` and embedded in Markdown with relative links.
