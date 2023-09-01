import React from 'react'
import logo from '../../images/logo/logo.svg'
import Links from './links'

const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full ' >


      <div className='xl:flex lg:flex 2xl:flex hidden flex-row justify-center items-center w-full  lg:gap-8 xl:gap-14 2xl:gap-14 text-white'>
        <div className='flex lg:gap-8 xl:gap-14 2xl:gap-14'>
          <p className='font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>Our team</p>
          <p className=' opacity-[0.16] font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>/</p>
        </div>
        <div className='flex lg:gap-8 xl:gap-14 2xl:gap-14'>
          <p className='font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>Tokens</p>
          <p className=' opacity-[0.16] font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>/</p>
        </div>
        <div className='flex lg:gap-8 xl:gap-14 2xl:gap-14'>
          <p className='font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>Connect wallet</p>
          <p className=' opacity-[0.16] font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>/</p>
        </div>
        <div className='flex lg:gap-8 xl:gap-14 2xl:gap-14'>
          <p className='font-bold underline uppercase text-[16px] tracking-[-0.32px] leading-[normal] cursor-pointer'>Lightpaper</p>
       
        </div>
      </div>

      <div className='w-full lg:justify-between xl:justify-between flex lg:flex-row xl:flex-row flex-col text-4xl lg:p-16 xl:p-16 p-4 justify-center  items-center space-y-8 '>

        <div className='flex items-center justify-center' >
          <img src={logo} alt="logo" className='w-auto h-auto' />
          <p className='xl:text-4xl lg:text-3xl text-3xl 2xl:text-5xl font-semibold text-white '>Tokners</p>
        </div>


        <Links />

        <div className=' block' >
          <p className='text-[12px] font-bold leading-[22px] text-white '>&copy; 2021 Tokners. All rights reserved.</p>
          <div className='flex items-center lg:justify-end xl:justify-end justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
              <path d="M18.3148 11.1316C17.6938 11.2085 17.0618 11.2481 16.4211 11.2481C12.1493 11.2481 8.2699 9.4886 5.40707 6.62362C7.15259 11.5664 11.0661 15.4078 15.9384 16.8808C16.8092 17.1441 17.7107 17.3317 18.636 17.4364C18.7539 17.4497 18.8722 17.4617 18.9909 17.4724L18.9951 17.4663C20.2561 15.6513 21 13.4167 21 11C21 10.8499 20.9971 10.7005 20.9914 10.5519C20.1277 10.8221 19.2332 11.0177 18.3148 11.1316Z" fill="white" />
              <path d="M2.68421 11C2.68421 15.5221 6.18346 19.188 10.5 19.188C12.0824 19.188 13.555 18.6953 14.7857 17.8484C15.7603 18.3201 16.8157 18.6398 17.9241 18.7787C16.024 20.769 13.3992 22 10.5 22C4.70101 22 0 17.0751 0 11C0 4.92487 4.70101 0 10.5 0C15.6857 0 19.9933 3.93818 20.8465 9.11543C20.0097 9.40738 19.1262 9.592 18.2106 9.6537C17.5984 5.77135 14.3794 2.81203 10.5 2.81203C6.18346 2.81203 2.68421 6.47791 2.68421 11Z" fill="white" />
            </svg>
            <p className='underline text-[12px] font-[400]  tracking-[0.24px] leading-[140%] text-slate-300'>Design by Oleg Kulik</p>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Footer