import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import CreatePostPage from './pages/createPostPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path:'/:PostID',
    element: <App isSinglePost={true} />
  },
  {
    path:'/submit',
    element: <App submitPage={true} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
