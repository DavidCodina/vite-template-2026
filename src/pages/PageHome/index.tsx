import { HR, Page, PageContainer } from 'components'

/* ========================================================================
                                PageHome
======================================================================== */

const PageHome = () => {
  /* ======================
          return
  ====================== */

  return (
    <>
      <title>Home</title>

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
            _HOME
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
        </PageContainer>
      </Page>
    </>
  )
}

export default PageHome
