import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './routes/myCreateRouter'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={myCreateRouter}/>
    </AuthProvider>
    <Toaster/>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
