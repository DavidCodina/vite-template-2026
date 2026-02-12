import * as React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { ChevronLeft, House } from 'lucide-react'
import sadPanda from './sad-panda.png'
import { Button, HR, Page, PageContainer } from '@/components'

/* ========================================================================
                                 PageError
======================================================================== */

const PageError = ({ error, resetErrorBoundary }: any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [imgLoaded, setImgLoaded] = React.useState(false)
  const pathname = location.pathname

  /* ======================
        useEffect()
  ====================== */

  React.useEffect(() => {
    if (pathname === '/') {
      resetErrorBoundary()
    }
  }, [pathname, resetErrorBoundary])

  /* ======================
      renderContent()
  ====================== */
  // There was an issue where it took the browser a half second to load the image.
  // This resulted in the text rendering, then the image blinking in a momement later.
  // One strategy to prevent this type of behavior is to use onLoad, and wait until
  // the image is ready before showing anything. To do this, a dummy img is first rendered
  // with display:none. Once onLoad happens, the image is now cached in browser memory, and
  // we can unmount that and instead render the actual content.

  const renderContent = () => {
    if (!imgLoaded) {
      return (
        <img
          alt='Sad Panda'
          src={sadPanda}
          style={{ display: 'none' }}
          onLoad={() => {
            setImgLoaded(true)
          }}
        />
      )
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <img
          alt='Sad Panda'
          className='inline-block'
          src={sadPanda}
          style={{ marginBottom: 25, maxHeight: '150px' }}
        />

        <h3 style={{ color: '#409', fontWeight: 'bold' }}>Uh Oh...</h3>

        {import.meta.env.DEV && error.message && (
          <p
            style={{
              color: '#FF355E',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 10
            }}
          >
            {error.message}
          </p>
        )}

        <p style={{ fontSize: 14, margin: '0 auto 25px auto', maxWidth: 450 }}>
          It looks like something did not go as expected. Our team has been
          notified about this error and we will look into it right away!
        </p>

        <div className='flex items-center justify-center gap-4'>
          <Button
            onClick={() => {
              navigate('/')
            }}
            style={{ minWidth: 100 }}
            size='sm'
          >
            <House />
            Go Home
          </Button>
          <Button
            onClick={() => {
              // From the user's perspective, PageError is an actual page.
              // Thus, going back would entail going back to the page that
              // initially broke. Thus, we probably want resetErrorBoundary()
              // and not navigate(-1)
              resetErrorBoundary()
            }}
            size='sm'
            style={{ minWidth: 100 }}
          >
            <ChevronLeft />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  /* ======================
          return
  ====================== */

  return (
    <>
      <title>Error!!!</title>
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
            _ERROR
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

          {renderContent()}
        </PageContainer>
      </Page>
    </>
  )
}

export default PageError
