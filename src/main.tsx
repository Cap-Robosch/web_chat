import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DocumentationPage from './Documentation.tsx';
import MoreAboutPage from './MoreAbout.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/docs",
    element: <DocumentationPage/>
  },
  {
    path:"/moreAbout",
    element: <MoreAboutPage/>
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
