import React from 'react'
import logo from '../../images/logo/logo.svg'
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <div className='flex justify-between mx-10 mt-10  lg:flex sm:hidden xs:hidden'>
        <div className='flex items-center'>
            <div className='flex justify-center text-center items-center'>
              <img src={logo} alt="Logo Tokners" />
              <p className='text-white text-2xl font-bold'>Tokners</p>
              </div>
            <div className='ml-[78px]'>
              <ul className='flex'>
                <li className='text-sm font-bold leading-normal text-white mr-[30px]  cursor-pointer'>Our team</li>
                <li className='text-sm font-bold leading-normal text-white mr-[30px]  cursor-pointer'>Tokens</li>
                <li className='text-sm font-bold leading-normal text-white mr-[30px]  cursor-pointer'>Connect wallet</li>
                <li className='text-sm font-bold leading-normal text-white mr-[30px]  cursor-pointer'>Lightpaper</li>
              </ul>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='mr-[30px]'><button className='text-sm font-bold leading-normal text-[#fff]'>Sign In</button></div>
            <div><button className='text-sm font-bold leading-normal text-white border-2 border-[#22A75D] rounded-[52px] w-[147px] h-12'>Sign Up</button></div>
        </div>
    </div>




     <nav className="w-full bg-[#0F1320] lg:hidden">
        <div className="justify-between px-5 mx-auto xs:mt-[38px] lg:max-w-7xl lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              <div className="logo lg:col-span-3 my-auto sm:col-span-6">
              <div className='flex '>
              <img src={logo} alt="Logo Tokners" />
              <p className='text-white text-2xl font-bold'>Tokners</p>
              </div>
              </div>
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="white"/>
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>

            <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden" }`}>
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                <li className="text-white cursor-pointer"> Our team</li>
                <li className="cursor-pointer text-white">Tokens </li>
                <li className="text-white  cursor-pointer">Connect wallet </li>
                <li className="text-white  cursor-pointer">Lightpaper </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Header