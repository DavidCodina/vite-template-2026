import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

/* ========================================================================

======================================================================== */

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    port: 3000

    ///////////////////////////////////////////////////////////////////////////
    //
    // ⚠️ TL;DR: Using a proxy (even in development) is a bad idea!!!
    //
    // The Vite dev server proxy will not work in production. The proxy
    // configuration is only active during development when running vite or vite dev.
    //
    // The proxy is only applied during development, so we don't necessarily need to
    // worry about modifying it for production. That said, if your app uses routes like
    // '/api/...', then you need to set up specific rewrites and redirects through the hosting provider.
    //
    // An easier solution is to simply not rely on proxies or redirects at all, and
    // instead use a VITE_API_URL environment variable. Ultimately, we want to
    // write  application code the same way it will run in production.
    //
    // Even if your hosting solution can handle redirects, it's introducing an unnecessary layer
    // of complexity. Good application code should work regardless of deployment infrastructure.
    //
    // Why did Vite even add this feature? If your API layer doesn't have CORS setup properly, the
    // proxy allows you to bypass CORS errors. Vite likely expected developers to use the proxy
    // to avoid CORS issues during development, but still write absolute URLS: fetch('http://localhost:5000/api/health').
    // The problem is that Vite's documentation and examples often show relative URLs like fetch('/api/health'),
    //  which makes it seem like the proxy is meant to be part of your application architecture rather than
    // just a CORS workaround. Solution:
    //
    //   Configure CORS properly on your API server and use VITE_API_URL on the client.
    //
    ///////////////////////////////////////////////////////////////////////////

    // proxy: { '/api': 'http://localhost:5000' }
  }
})
