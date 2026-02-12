'use client'

import * as React from 'react'
import { PageContainer } from './PageContainer'
import { cn } from '@/utils'

type MainProps = React.ComponentProps<'main'>
type PageProps = MainProps

/* ========================================================================
                                  Page
======================================================================== */

const Page = ({
  children,
  className = '',
  style = {},
  ...otherProps
}: PageProps) => {
  /* ======================
          return
  ====================== */

  return (
    <>
      <main
        data-slot='page'
        ///////////////////////////////////////////////////////////////////////////
        //
        // ⚠️ New: Changed `overflow-x-auto` here to `overflow-hidden` and put `overflow-x-auto`
        // on Pagecontainer. Note: Some kind of overlflow strategy is necessary in order to
        // prevent a a right-aligned, defaultCollapsible='none' Sidebar from getting pushed off
        // the right side of the viewport when content gets scrunched.
        //
        // ⚠️ Normally, this would also be added: min-h-dvh. However, using just flex-1 here
        // works because both SidebarProvider (flex min-h-svh) and SidebarInset (flex flex-1)
        // manage to set the height to at least 100% of the viewport height. In fact, if we
        // were to set min-h-dvh here, it would be too much height for the Sidebar component's
        // inset variant.
        //
        ///////////////////////////////////////////////////////////////////////////

        // ❌ min-h-dvh

        className={cn(
          `relative mx-auto flex w-full flex-1 flex-wrap overflow-hidden`,

          className
        )}
        style={style}
        {...otherProps}
      >
        {children}

        <div
          // Either self-end or mt-auto on its own would push
          // the element down in the absence of content.
          className='mt-auto h-0 w-full self-end'
        />
      </main>
    </>
  )
}

// Again, <Page.Container> will not work directly within a server component,
// but will work when wrapped in another client component.
const CompoundComponent = Object.assign(Page, {
  Container: PageContainer
})

export { CompoundComponent as Page, PageContainer }
