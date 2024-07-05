import React from 'react'
import {IoMdSearch} from "react-icons/io"
import { FaCartShopping} from "react-icons/fa6"
import Logo from '../img/Logo.svg'
import DarkMode from "../navbar/Darkmode"
import Navigation from "../navbar/Navigation"




function Navbar() { 
  return (
    <div className="shadow-md bg-white dark:bg-black dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary py-2 ">
        <div className="container flex justify-between items-center">
           <div>
             <a href = "#" className="font-bold text-2xl sm:text-2.5xl flex gap-1">
              <img src={Logo} alt="Logo" className="w-10 "/>
              Trynu
             </a>
           </div>
           <div className="flex justify-between items-center gap-4  ">
           
            <div className="relative group hidden sm:block">
              <input type='text' placeholder='search' className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-pink-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"/>
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
            </div>
           
           {/*order button */}
           <button onClick={() => alert("Ordering not available yet")} className="bg-gradient-to-r bg-[#FE009A] transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-3 group">
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
           <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
           </button>
           {/* Darkmode switch */}
           <div>
            < DarkMode/>
           </div>
           </div>
           
        </div>
        
      </div>
      <div>
            <Navigation/>
           </div>
      </div>
    )
    }
    export default Navbar