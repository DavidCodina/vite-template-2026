import * as React from 'react'
import { AppProvider, ThemeProvider } from 'contexts'

/* ========================================================================
             
======================================================================== */

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <AppProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AppProvider>
  )
}
