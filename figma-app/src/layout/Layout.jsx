import React from 'react'

import Navbar from '../componentes/navbar/Navbar'
import Footer from '../componentes/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
<Outlet/>
    <Footer/>
  </>
  )
}

export default Layout
