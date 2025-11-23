import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // load all env variables (including VITE_ prefixed ones)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // base is used to set the public path for the built assets.
    // When deploying to GitHub Pages at https://<username>.github.io/jualan-toyota/
    // set VITE_BASE="/jualan-toyota/" in the build environment (the workflow below does this).
    base: env.VITE_BASE || '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
