import { Suspense } from 'react'
import { Outlet } from 'react-router'

import { ErrorBoundary } from 'react-error-boundary'
import { SuspenseFallback } from './components'
import type { CSSProperties } from 'react'
import { Toaster } from '@/components/Sonner'

import {
  AppSidebar,
  SidebarFlipper,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components'

import PageError from '@/pages/PageError'

/* ========================================================================
                              MainLayout
======================================================================== */

export const MainLayout = () => {
  /* ======================
        handleError()
  ====================== */

  const handleError = (_error: any, _errorInfo: any) => {
    // This is where you'd call your logging service.
    // console.log('Error: ', error)
    // console.log('Error Info: ', errorInfo)
  }

  /* ======================
        handleReset()
  ====================== */

  const handleReset = () => {
    // console.log('handleReset() was called.')
  }

  /* ======================
          return
  ====================== */

  return (
    <>
      {/* ⚠️ Make sure <Toaster /> is placed first to avoid potential race conditions when a page mounts.
      Also, make sure <Toaster /> is inside of <Providers>, so it has access to the theme. */}
      <Toaster />

      {/* The SidebarProvider is consumed here and not with the other providers in order
      to implement the optional 'persisted State' feature with cookies. */}

      <SidebarProvider
        defaultOpen={false}
        // defaultSide='right'
        defaultCollapsible='icon'
        // defaultVariant='inset'
        forceMobile={false}
        // For multiple sidebars in your application, you can use the style prop to set
        // the width of the sidebar. To set the width of the sidebar, you can use
        // the --sidebar-width and --sidebar-width-mobile CSS variables in the style prop.
        // The values must be of type string. They will have precedence over the SIDEBAR_WIDTH
        //  and SIDEBAR_WIDTH_MOBILE constants set in the component files.
        style={
          {
            // '--sidebar-width': '20rem',
            // '--sidebar-width-mobile': '20rem'
            marginBottom: 250
          } as CSSProperties
        }

        // Gotcha: The presence of this prop assumes it's a controlled component
        // being used in conjunction with the `open` prop. Consequently, the normal
        // behavior of the SidebarTrigger will not work. Moreover, if you want to
        // implement a controlled implementation, then the provider must me moved into
        // a client component.
        // onOpenChange={(open) => { }}
      >
        <SidebarFlipper AppSidebar={AppSidebar} SidebarTrigger={SidebarTrigger}>
          <SidebarInset
            // SidebarInset checks the value of variant internally and only applies className and style
            // when variant === 'inset'.

            // ❌ md:max-h-[calc(100vh_-_16px)]
            className='md:border-primary md:max-h-[calc(100dvh-16px)] md:overflow-y-auto md:border'
          >
            <ErrorBoundary
              FallbackComponent={PageError}
              onError={handleError}
              onReset={handleReset}
            >
              <Suspense fallback={<SuspenseFallback />}>
                <Outlet context={{ test: 'Outlet value!' }} />
              </Suspense>
            </ErrorBoundary>
          </SidebarInset>
        </SidebarFlipper>
      </SidebarProvider>
    </>
  )
}

export default MainLayout
