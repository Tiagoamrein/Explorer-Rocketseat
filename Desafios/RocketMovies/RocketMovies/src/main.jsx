import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import Global from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <ThemeProvider theme={theme}>
    <Global/>
    <AuthProvider>
    <Routes/>
    </AuthProvider>
    </ThemeProvider>
    
  </React.StrictMode>
)
