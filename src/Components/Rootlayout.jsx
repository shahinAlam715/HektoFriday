import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Fotter from './Fotter'
import Footerbot from './Footerbot'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet/>
            <Fotter />
            <Footerbot />
        </>
    )
}

export default Rootlayout