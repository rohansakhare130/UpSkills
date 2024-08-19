import React from 'react'
import { Link  } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-y bg-slate-600">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <span className="text-sm text-white sm:text-center">
            © 2024 
            <a href="https://hiteshchoudhary.com/" className="hover:underline pl-1">
             rohansakhare
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
           
            <Link
            to="#"
            className="text-white bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Register fro free
          </Link>
            
           
          
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer