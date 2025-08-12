// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: 'https://dolmen-tools.github.io/angular-tutorials',
    base: '/angular-tutorials/',
  integrations: [starlight({
    title: "Docs with Tailwind",
    social: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/withastro/starlight",
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
  }), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
