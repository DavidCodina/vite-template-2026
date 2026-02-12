'use client'

import * as React from 'react'
import { cn } from '@/utils'

type PageContainerProps = React.ComponentProps<'div'>

/* ========================================================================
                              PageContainer
======================================================================== */

export const PageContainer = ({
  children,
  className,
  style,
  ...otherProps
}: PageContainerProps) => {
  return (
    <div
      className={cn(
        `relative mx-auto w-full flex-1 p-6 2xl:container`,
        className
      )}
      data-slot='page-container'
      style={style}
      {...otherProps}
    >
      {children}
    </div>
  )
}
