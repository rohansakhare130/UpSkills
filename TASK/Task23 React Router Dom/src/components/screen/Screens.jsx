import React from 'react'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'

function Screens() {
  return (
    <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Screens