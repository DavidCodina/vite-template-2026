import { RouterProvider } from 'react-router'
import { router } from './router'

/* ========================================================================

======================================================================== */

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        // https://reactrouter.com/upgrading/v6#v7_partialhydration
        // fallbackElement={<RouterFallback />}
      />
    </>
  )
}

export default App
