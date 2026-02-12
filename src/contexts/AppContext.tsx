import { useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export type AppContextValue = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

/* ========================================================================

======================================================================== */

export const AppContext = createContext({} as AppContextValue)

// This won't work with use-context-selector:
// https://github.com/dai-shi/use-context-selector?tab=readme-ov-file#limitations
// export const AppConsumer = AppContext.Consumer

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0)

  /* ======================
          return
  ====================== */

  return (
    <AppContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContextSelector = <T extends keyof AppContextValue>(
  key: T
) => {
  const value = useContextSelector(AppContext, (state) => state[key])
  return value
}
