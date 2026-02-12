import { useState } from 'react'
import { Button, HR, Page, PageContainer } from 'components'

/* ========================================================================
                              PageErrorDemo
======================================================================== */
//////////////////////////////////////////////////////////////////////////
//
// Test react-error-boundary synchronous:
//
//   let condition = false
//   condition = true
//   if (condition) {
//     throw Error('Error: A page in the app crashed!')
//   }
//
// Test react-error-boundary asynchronous:
// (needs: import { useErrorHandler } from 'react-error-boundary')
//
//   const handleError = useErrorHandler()
//   setTimeout(() => {
//     try {
//       throw new Error('Kaboom!')
//     } catch (err) {
//       handleError(err)
//     }
//   }, 3000)
//
// Test react-error-boundary rerender:
// In the async example above, we manually had to catch the error then set it using
// react-error-boundary's useErrorHandler. That said, react error boundary will
// trigger on rerender when something goes wrong (no  need to manually set anything).
// The point being that async code itself will not trigger an error boundary, but
// the potential results of an async API call would possibly trigger the error boundary
// once the data was set in state.
//
//   const [items, setItems] = useState<any>([])
//
//   <Button
//     className='block mx-auto'
//     color='green'
//     onClick={() => { setItems(undefined) }}
//   >
//     Break The Page!
//   </Button>
//
//   {items.map(() => null)}
//
// Note: React error boundaries do not handle compilation time errors.
// For example, putting abc123 in your code (i.e. an undefined variable)
// Thus, an uncaught reference error will NEVER trigger react error boundary.
// Instead this triggers the webpack error overlay.
//
///////////////////////////////////////////////////////////////////////////

const PageErrorDemo = () => {
  const [items, setItems] = useState<any>([])

  /* ======================
          return
  ====================== */

  return (
    <>
      <title>Error Demo</title>
      <Page>
        <PageContainer>
          <h1
            className='text-primary mb-12 text-center text-7xl'
            style={{
              fontFamily: 'Chakra Petch',
              fontWeight: 300,
              letterSpacing: '2vw'
            }}
          >
            _ERROR DEMO
          </h1>
          <HR
            style={{
              position: 'relative',
              marginTop: 0,
              marginBottom: 80,
              maxWidth: 1200,
              zIndex: 2
            }}
          />

          <Button
            className='mx-auto flex'
            onClick={() => {
              setItems(undefined)
            }}
            size='sm'
            variant='destructive'
          >
            Break The Page!
          </Button>

          {items.map(() => null)}
        </PageContainer>
      </Page>
    </>
  )
}

export default PageErrorDemo
