import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Skills',
        element: <Skills />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
      {
        path: '/Projects',
        element: <Projects />
      },
     
      {
        path: '/Contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
