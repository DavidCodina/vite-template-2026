import { Outlet, ScrollRestoration } from 'react-router'
import { Providers } from '@/contexts'

/* ========================================================================
                              RootLayout                      
======================================================================== */

export const RootLayout = () => {
  return (
    <Providers>
      <Outlet />
      <ScrollRestoration />
    </Providers>
  )
}

export default RootLayout
