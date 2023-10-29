// Import necessary types and configurations
import type { Config } from "tailwindcss"; // Import the Config type from Tailwind CSS
import sharedConfig from "tailwind-config/tailwind.config.ts"; // Import a shared Tailwind CSS configuration

// Define the custom Tailwind CSS configuration
const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "", // Set the CSS class prefix to "ui-"
  presets: [sharedConfig], // Use the shared configuration as a preset
};

// Export the custom Tailwind CSS configuration
export default config;
