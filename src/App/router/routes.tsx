import { Navigate, Route, createRoutesFromElements } from 'react-router'

import { RouterFallback } from './RouterFallback'
import { MainLayout, RootLayout } from '@/layouts'
import PageHome from '@/pages/PageHome'
import PageTest from '@/pages/PageTest'
import PageNotFound from '@/pages/PageNotFound'
import PageUnauthorized from '@/pages/PageUnauthorized'
import PageErrorDemo from '@/pages/PageErrorDemo'

/* ========================================================================
                                   Routes      
======================================================================== */

export const routes = createRoutesFromElements(
  <Route element={<RootLayout />} hydrateFallbackElement={<RouterFallback />}>
    <Route element={<MainLayout />}>
      <Route path='/' element={<PageHome />} />
      <Route path='/home' element={<Navigate to='/' replace />} />
      <Route path='/test' element={<PageTest />} />
      <Route path='/error-demo' element={<PageErrorDemo />} />
      <Route path='/unauthorized' element={<PageUnauthorized />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Route>
)
