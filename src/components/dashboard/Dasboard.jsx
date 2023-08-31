import React from 'react'
import Desktopdashboard from '../../images/Dashboard/DasktopDashboard.svg'
import Mobiledashboard from '../../images/Dashboard/MobileDashoard.svg'
import Button from '../button/Button';
import Headergarient from "../../images/garient/headergarient.svg"




function Dashboard() {

  return (
    <>
      <div className='overflow-hidden xl:block sm:hidden xs:hidden bgBlur  bg-no-repeat bg-cover h-[951px]  w-[80vw]' style={{ backgroundImage: `url(${Headergarient})`  }}></div>
        <div className='grid grid-cols-12  2xl:ml-[10.813rem] lg:ml-5 xl:ml-[8rem] sm:ml-3   xs:m-0 relative'>
          <div className='2xl:mt-[14.375rem] xl:mt-[9rem] lg:mt-3 sm:mt-[3rem] xs:mx-5 xs:mt-14 2xl:col-span-4 xl:col-span-6 lg:col-span-7 sm:col-span-12 xs:col-span-12'>
          <h4 className='bg-gradient-to-t from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent xs:ml-1 xs:text-sm ml-[3px] font-bold'>At Tokners we are</h4>
          <h2 className='text-5xl font-bold leading-[54px] tracking-[-0.06rem] text-[#fff] 2xl:w-[97%] xl:w-[562px] mt-[0.625rem] xs:text-4xl xs:leading-[40px]'>Reimagining social media through the power of the blockchain.</h2>
          <p className="font-['Century_Gothic'] mt-[1.875rem] text-base font-normal leading-6 text-[#DDE2FF] opacity-60 w-[88%]  xs:mt-5 xs:text-sm xs:w-[97%] ">We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
          <Button />
        </div>
        <div className='2xl:col-span-8 xl:col-span-6 lg:col-span-5 sm:col-span-12 xs:col-span-12 xl:-ml-36 xl:-mt-20 xs:!min-w-[100vw] xs:m-0 xs:p-0 overflow-hidden'>
          <img src={Desktopdashboard} alt="Desktopdashboard" className='xl:w-[100%] xs:w-[100vw] xs:overflow-hidden  xs:min-w-[100px]  xs:overflow-y-hidden xs:hidden' />
          <img src={Mobiledashboard} alt="Mobiledashboard"  className='sm:hidden block overflow-hidden w-full '/>
        </div>
      </div>

    </>
  )
}

export default Dashboard