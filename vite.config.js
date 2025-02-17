import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(""), "./src"),
      "@ui": path.resolve(path.dirname(""), "./src/components/ui"), 
      "@shadcn": path.resolve(path.dirname(""), "./src/components/shadcn"),
    },
  },
});
