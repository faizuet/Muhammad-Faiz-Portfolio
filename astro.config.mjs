import { defineConfig,svgoOptimizer } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    experimental: {
      svgOptimizer: svgoOptimizer()
  },
  integrations: [
    preact(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      // Astro already optimizes image assets; avoid invoking the optional native Sharp binary.
      Image: false,
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
