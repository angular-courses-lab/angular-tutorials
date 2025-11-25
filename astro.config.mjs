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
      title: "tutorials.angular.courses",
      favicon: "/favicon.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/angular-courses-lab/angular-tutorials",
        },
      ],
      components: {
        Header: "./src/components/ui/CustomHeader.astro",
        PageTitle: "./src/components/ui/CustomPageTitle.astro",
        Head: "./src/components/ui/CustomHead.astro",
      },
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
              label: "Generate an Angular Component",
              link: "/task-listing/generate-component",
            },
            {
              label: "Display the Component",
              link: "/task-listing/display-component",
            },
            {
              label: "TypeScript Interface",
              link: "/task-listing/typescript-interface",
            },
            {
              label: "Signals Introduction",
              link: "/task-listing/signals-introduction",
            },
            {
              label: "Control Flow",
              link: "/task-listing/control-flow",
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
              label: "Add router outlet",
              link: "/create-task/add-router-outlet",
            },
            {
              label: "Define routes",
              link: "/create-task/define-routes",
            },
            {
              label: "Add router links",
              link: "/create-task/add-routerlinks",
            },
            {
              label: "HTML Form",
              link: "/create-task/html-form",
            },
            {
              label: "Reactive Forms",
              link: "/create-task/reactive-forms",
            },
            {
              label: "Event Binding",
              link: "/create-task/event-binding",
            },
            {
              label: "Generate an Angular Service",
              link: "/create-task/generate-angular-service",
            },
            {
              label: "Dependency Injection",
              link: "/create-task/dependency-injection",
            },
            {
              label: "First Service Function",
              link: "/create-task/add-task-function",
            },
            {
              label: "Inject Service Form",
              link: "/create-task/inject-service-form",
            },
            {
              label: "Router Navigation",
              link: "/create-task/router-navigation",
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
              label: "Add a new route",
              link: "/update-task/add-new-route",
            },
            {
              label: "Retrieve data from the URL",
              link: "/update-task/retrieve-data-url",
            },
            {
              label: "Form Validation",
              link: "/update-task/form-validation",
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
              label: "Update a Reactive Form",
              link: "/reusable-components/update-reactive-form",
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
              label: "Inject HttpClient",
              link: "/api-server/inject-http-client",
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
        {
          label: "Congratulations",
          link: "/congratulations",
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
