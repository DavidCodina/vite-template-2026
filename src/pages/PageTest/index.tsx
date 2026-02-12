import { HR, Page, PageContainer } from '@/components'
import {
  // TableDemo1,
  // TableDemo2,
  TableDemo3
} from '@/components/Table/demos'

/* ========================================================================

======================================================================== */

const PageTest = () => {
  /* ======================
          return
  ====================== */

  return (
    <>
      <title>Test</title>

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
            _TEST
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

          <TableDemo3 />
        </PageContainer>
      </Page>
    </>
  )
}

export default PageTest
