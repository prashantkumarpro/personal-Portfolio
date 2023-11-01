import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = () => {
  
    return (
        <>
         
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>

        </>
    )
}

export default Layout