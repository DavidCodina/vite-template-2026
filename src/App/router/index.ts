// Third-party imports
import { createBrowserRouter } from 'react-router'

// Custom imports
import { routes } from './routes'

/* ========================================================================
                                router                 
======================================================================== */

export const router = createBrowserRouter(routes, {
  basename: '/vite-template-2026'
})
