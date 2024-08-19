import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'
import Header from '../navigation/Header'

function Screen() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Screen