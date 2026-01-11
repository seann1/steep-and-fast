import {defineConfig} from "vite";

export default defineConfig({
    // ... other configurations
    server: {
        watch: {
            usePolling: true,
        }
    }
});