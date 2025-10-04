// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorials.angular.courses",
  integrations: [
    starlight({
      title: "Angular Tutorials",
      favicon: "/public/favicon.svg",
      logo: {
        src: "/public/logo.png",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/angular-courses-lab/angular-tutorials",
        },
        {
          icon: "comment",
          label: "AI RAG Assistant",
          href: "https://www.dolmen.tools/en/angular/angie/chat",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              link: "/getting-started/introduction",
            },
            {
              label: "Learning Process",
              link: "/getting-started/learning-process",
            },
            {
              label: "Prerequisites",
              link: "/getting-started/prerequisites",
            },
            {
              label: "TypeScript Introduction",
              link: "/getting-started/typescript-introduction",
            },
            {
              label: "Getting Started",
              link: "/getting-started/getting-started",
            },
          ],
        },
        {
          label: "Task Listing",
          items: [
            {
              label: "Add UI Library",
              link: "/task-listing/add-ui-library",
            },
            {
              label: "Components Introduction",
              link: "/task-listing/components-introduction",
            },
            {
              label: "Create First Component",
              link: "/task-listing/create-first-component",
            },
            {
              label: "Task Interface",
              link: "/task-listing/task-interface",
            },
            {
              label: "Display List",
              link: "/task-listing/display-list",
            },
            {
              label: "Interpolation",
              link: "/task-listing/interpolation",
            },
            {
              label: "Pipes",
              link: "/task-listing/pipes",
            },
          ],
        },
        {
          label: "Create Task",
          items: [
            {
              label: "Create Form Component",
              link: "/create-task/create-form-component",
            },
            {
              label: "Routing Introduction",
              link: "/create-task/routing-introduction",
            },
            {
              label: "HTML Form",
              link: "/create-task/html-form",
            },
            {
              label: "Form Binding",
              link: "/create-task/form-binding",
            },
            {
              label: "Event Binding",
              link: "/create-task/event-binding",
            },
            {
              label: "Angular Service",
              link: "/create-task/angular-service",
            },
            {
              label: "Dependency Injection",
              link: "/create-task/dependency-injection",
            },
            {
              label: "Add Task Service",
              link: "/create-task/add-task-service",
            },
            {
              label: "Inject Service Form",
              link: "/create-task/inject-service-form",
            },
            {
              label: "Programmatical Routing",
              link: "/create-task/programmatical-routing",
            },
            {
              label: "Component Destruction",
              link: "/create-task/component-destruction",
            },
          ],
        },
        {
          label: "Update Task",
          items: [
            {
              label: "Update Task Route",
              link: "/update-task/update-task-route",
            },
            {
              label: "Update Task Form",
              link: "/update-task/update-task-form",
            },
            {
              label: "Submit Update Form",
              link: "/update-task/submit-update-form",
            },
          ],
        },
        {
          label: "Delete Task",
          items: [
            {
              label: "Add Delete Function",
              link: "/delete-task/add-delete-function",
            },
            {
              label: "Add Delete Button",
              link: "/delete-task/add-delete-button",
            },
            {
              label: "Add Empty List",
              link: "/delete-task/add-empty-list",
            },
          ],
        },
        {
          label: "Reusable Components",
          items: [
            {
              label: "Introduction",
              link: "/reusable-components/introduction",
            },
            {
              label: "Create Reusable Component",
              link: "/reusable-components/create-reusable-component",
            },
            {
              label: "Basic Usage",
              link: "/reusable-components/basic-usage",
            },
            {
              label: "Component Inputs",
              link: "/reusable-components/component-inputs",
            },
            {
              label: "Component Outputs",
              link: "/reusable-components/component-outputs",
            },
            {
              label: "Delete All Tasks",
              link: "/reusable-components/delete-all-tasks",
            },
            {
              label: "Prefill Form",
              link: "/reusable-components/prefill-form",
            },
          ],
        },
        {
          label: "API Server",
          items: [
            {
              label: "JSON Server Installation",
              link: "/api-server/json-server-installation",
            },
            {
              label: "Add HTTP Client",
              link: "/api-server/add-http-client",
            },
            {
              label: "Retrieve Tasks",
              link: "/api-server/retrieve-tasks",
            },
            {
              label: "Create Task",
              link: "/api-server/create-task",
            },
            {
              label: "Update Task",
              link: "/api-server/update-task",
            },
            {
              label: "Delete Task",
              link: "/api-server/delete-task",
            },
          ],
        },
      ],
      customCss: ["./src/styles/global.css"],
      // Set English as the default language for this site.
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
