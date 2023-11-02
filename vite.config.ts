import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react(), dynamicImport()],
    base: "/react-cms/",
  };
  return config;
});
