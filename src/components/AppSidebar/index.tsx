'use client'

import { Link, NavLink } from 'react-router'
import { FlaskConical, Home } from 'lucide-react'
import { SIDEBAR_ZINDEX_CLASS } from '@/components/component-constants'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
} from '@/components/Sidebar'
import { ThemeToggle } from '@/components'
import {
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_MOBILE
} from '@/components/Sidebar/SidebarConstants'

import { cn } from '@/utils'

/* ========================================================================

======================================================================== */

export const AppSidebar = () => {
  // const { logOut } = useAuthContext()
  const { open, openMobile, isMobile, collapsible, variant /*, side */ } =
    useSidebar()
  const isOpen = (open && !isMobile) || (openMobile && isMobile)
  const isClosed = !isOpen

  const _isOffcanvas = collapsible === 'offcanvas'
  const isIcon = collapsible === 'icon'
  const isNone = collapsible === 'none'

  const _isIconAndOpen = isIcon && isOpen
  const _isIconAndClosed = isIcon && isClosed

  const sidebarWidth = isMobile ? SIDEBAR_WIDTH_MOBILE : SIDEBAR_WIDTH
  const floatingOffset = '16px'

  /* ======================

  ====================== */

  const brackets = (
    <>
      {/* Top Left Corner */}
      <div
        className={cn(
          'border-foreground/50 absolute top-1 left-1 size-2 border-t border-l opacity-0 transition-all',
          'group-hover/brackets:top-0 group-hover/brackets:left-0 group-hover/brackets:opacity-100'
        )}
      ></div>

      {/* Top Right Corner */}
      <div
        className={cn(
          'border-foreground/50 absolute top-1 right-1 size-2 border-t border-r opacity-0 transition-all',
          'group-hover/brackets:top-0 group-hover/brackets:right-0 group-hover/brackets:opacity-100'
        )}
      ></div>

      {/* Bottom Left Corner */}
      <div
        className={cn(
          'border-foreground/50 absolute bottom-1 left-1 size-2 border-b border-l opacity-0 transition-all',
          'group-hover/brackets:bottom-0 group-hover/brackets:left-0 group-hover/brackets:opacity-100'
        )}
      ></div>

      {/* Bottom Right Corner */}
      <div
        className={cn(
          'border-foreground/50 absolute right-1 bottom-1 size-2 border-r border-b opacity-0 transition-all',
          'group-hover/brackets:right-0 group-hover/brackets:bottom-0 group-hover/brackets:opacity-100'
        )}
      ></div>
    </>
  )

  /* ======================
     renderNavLinkGroup()
  ====================== */
  // Use the isActive prop to mark a menu item as active.
  // This essentially changes the styles in the component by setting this: data-active={isActive}
  // Then using the data-[active=true]: modifier. The current styles are very subtle.
  // Right now it doesn't make any sense to implement isActive because we're mapping over the
  // dummy items, but eventually, we can set it.

  const renderNavLinkGroup = () => {
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className='gap-2'>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip='Home'>
                <NavLink
                  to='/'
                  className='group/brackets hover:bg-accent relative rounded-none text-inherit hover:shadow-none'
                >
                  {brackets}
                  <Home />
                  <span>Home</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip='Test'>
                <NavLink
                  to='/test'
                  className='group/brackets hover:bg-accent relative rounded-none text-inherit hover:shadow-none'
                >
                  {brackets}
                  <FlaskConical />
                  <span>Test</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  /* ======================
          return
  ====================== */

  return (
    <Sidebar className={SIDEBAR_ZINDEX_CLASS}>
      <div
        className={cn('flex items-center px-2', {
          'justify-between': !isNone
        })}
        style={{
          // When floating or inset, the Sidebar component sets `p-2`. This offsets that.
          minWidth:
            variant === 'floating' || variant === 'inset'
              ? `calc(${sidebarWidth} - ${floatingOffset})`
              : sidebarWidth
        }}
      >
        {collapsible !== 'none' && (
          <SidebarTrigger className='cursor-pointer' />
        )}

        <SidebarHeader className='text-foreground'>
          <Link className='font-mono hover:underline' to='/'>
            DEMO APP
          </Link>
        </SidebarHeader>

        {/* Conditionally setting tabIndex to -1 is very important! 
        When defaultCollapsible='icon', the content is hidden with
        overflow-hidden (now overflow-clip) in Sidebar.tsx. If you try 
        to tab to an element that is effectively hidden, the browser will 
        have a meltdown and crash the layout. This ultimately was causing
        all of SidebarContent to momentarily disappear! */}
        <ThemeToggle tabIndex={isClosed ? -1 : 0} />
      </div>

      <SidebarSeparator />

      <SidebarContent>{renderNavLinkGroup()}</SidebarContent>
    </Sidebar>
  )
}
