// Import necessary modules and plugins
import react from "@vitejs/plugin-react-swc"; // Import the React plugin for Vite using SWC
import autoprefixer from "autoprefixer"; // Import Autoprefixer for adding vendor prefixes to CSS
import tailwindcss from "tailwindcss"; // Import Tailwind CSS for styling
import { defineConfig } from "vite"; // Import Vite's defineConfig function to create a configuration object

// Export the Vite configuration object
export default defineConfig({
  // Configure plugins used by Vite
  plugins: [react()], // Use the React plugin with SWC for transforming React code

  // Optimize dependencies
  optimizeDeps: {
    include: ["@emotion/styled"], // Include '@emotion/styled' for optimization to speed up development builds
  },

  // Configure CSS processing
  css: {
    postcss: {
      // Configure PostCSS plugins
      plugins: [
        tailwindcss, // Use Tailwind CSS for utility-first styling
        autoprefixer, // Use Autoprefixer to ensure CSS compatibility with different browsers
      ],
    },
  },
});
