import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer"
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AppartmentPage from './pages/AppartmentPage'
import About from './pages/About'
import ErrorPage404 from './pages/ErrorPage404'

const router = createBrowserRouter([
  {
  path:"/",
  element: <App/>,
  errorElement: (
    <>
    <Navbar/>
    <ErrorPage404/>
    </>
  ),
},
{
  path:"/Appartements",
  element: (
    <>
    <Navbar/>
    <AppartmentPage/>
    <Footer/>
    </>
  ),
},
{
  path:"/about",
  element: (
    <>
    <Navbar/>
    <About/>
    <Footer/>
    </>
  )
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
