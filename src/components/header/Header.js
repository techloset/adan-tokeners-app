import React, { useState } from 'react'
import logo from "../../images/logo.png"
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div  className='absolute top-0 w-full ' >     
      <nav className="flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-shrink-0 text-slate-50 mr-6 cursor-pointer lg:mr-28">      
  <img src={logo} alt="Logo" height={50} width={150}  className="border:rounded-full rounded-full" />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 cursor-pointer border rounded  text-slate-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">View Cart</span>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" fillRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
            <span  className="block mt-4 text-md  lg:inline-block lg:mt-0 text-slate-50  pt-2 cursor-pointer mr-4" >Our team</span>
            <span  className="block mt-4 text-md  lg:inline-block lg:mt-0 text-slate-50  pt-2 cursor-pointer mr-4" >Tokens</span>
            <span  className="block mt-4 text-md  lg:inline-block lg:mt-0 text-slate-50  pt-2 cursor-pointer mr-4" >Connect wallet</span>
            <span  className="block mt-4 text-md  lg:inline-block lg:mt-0 text-slate-50  pt-2 cursor-pointer mr-4" >Lightpaper</span>
          </div>
          <div className="lg:flex lg:items-center lg:gap-4 ">          
                  <span className="text-md text-white  cursor-pointer"><h1>Sign in</h1></span>  
                  <span className="text-md text-slate-50 border-[3px] border-emerald-600 py-2 px-8 rounded-3xl
                    cursor-pointer"><h1>Sign Up</h1></span>  
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header