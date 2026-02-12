// This must come first in order to prevent preflight attribute selectors with equal
// specificity like [type='button'] from overriding certain class selectors.
import 'styles/globals.css'

import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'
import App from './App'

/* ========================================================================
                           
======================================================================== */

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as Element)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
