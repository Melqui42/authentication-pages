import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Page } from 'style/globalStyle'

import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'

import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Page>
      <RouterProvider router={router} />
    </Page>
  </React.StrictMode>,
)
reportWebVitals()
