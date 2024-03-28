import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from './globalStyle.ts'
import { theme } from './styles/index.ts'
import Route from './Route.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Route />
    </ThemeProvider>
  </React.StrictMode>
)
