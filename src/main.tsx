// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

// // MUI
// import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// // Roboto font (weights jo chahiyein)
// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: { main: '#1976d2' },
//     secondary: { main: '#9c27b0' },
//   },
// })

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
