import React from 'react'
import {IoMdSearch} from "react-icons/io"
import {FaCaretDown, FaCartShopping} from "react-icons/fa6"
import Logo from '../img/Logo.svg'
import DarkMode from "../navbar/Darkmode"
import {Menu} from '../data/menu'
import { DropdownLinks } from '../data/DropdownLinks'
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
      {/* lower Navbar */}
      <div className="flex justify-center h-10">
    <ul className="sm:flex hidden items-center gap-4">
         {Menu.map((data) =>(
         <li key={data.id}>
          <a href={data.link} className="inline-block text-1.5xl  px-4 hover:text-pink-500 duration-200 ">{data.name}</a>
         </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
              </a>
              <div className="absolute z-[9999]  hidden group-hover:block w-[200px]  rounded-md bg-white p-3 text-black shadow-md">
                <ul>
                {DropdownLinks.map((data) =>(
                <li key={data.id}>
                  <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                </li>
                ))}
                </ul>
              </div>
              </li>          
</ul>
      </div>
    </div>
  )
  
}

export default Navbar
