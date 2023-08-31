import React from 'react';

const BuyCard = () => {
    return (  
        <div className=' xl:mx-[173px] sm:mx-10 lg:mt-0 sm:mt-20 xs:mt-20 justtify-center items-center'>
            <h2 className='text-4xl font-bold leading-[54px] text-[#F7F5F9] text-center'>How to buy</h2>
            <div className='flex lg:flex-nowrap sm:flex-wrap xs:flex-wrap sm:justify-center lg:justify-normal xs:mx-7'>
              <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative mt-[50px] '>
                <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px]  2xl:pt-[30px] md:pt-[50px] xs:pt-[50px] sm:pt-[50px] block'>01</span>
                <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-2 xs:text-base'><p className='w-[52%] xs:w-[80%] opacity-80'>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p></div>
                <div className='h-[86px] w-[86px] xs:w-[60px] xs:h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[57%] lg:left-[102%] sm:left-[50%] xs:left-[50%] sm:top-[100%] xs:top-[102%]  sm:-translate-x-2/4 xs:-translate-x-2/4 sm:-translate-y-2/4 xs:-translate-y-2/4  z-50'><div>
                  
                    <svg className='sm:rotate-90 xs:rotate-90 lg:rotate-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M9 18L15 12L9 6" stroke="#22A75D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div></div>
              </div>
    
              <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[110px] sm:mt-5 xs:mt-7'>
                <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px]  2xl:pt-[30px] md:pt-[50px] xs:pt-[50px] sm:pt-[50px] block'>02</span>
                <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-2 xs:text-base'><p className='w-[50%] xs:w-[80%] opacity-80'>Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet</p></div>
                <div className='h-[86px] w-[86px] xs:w-[60px] xs:h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[5%] lg:left-[102%] sm:left-[50%]  xs:left-[50%] sm:top-[72%] xs:top-[102%] -translate-x-2/4 translate-y-2/4 xs:-translate-x-2/4 xs:-translate-y-2/4  z-50'><div>
                
                    <svg className='sm:rotate-90 xs:rotate-90 lg:rotate-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#FFD100" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div></div>
              </div>
              <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[50px] sm:mt-5 xs:mt-7'>
                <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] 2xl:pt-[30px] md:pt-[50px] xs:pt-[50px] sm:pt-[50px]
                 block'>03</span>
                <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-2 xs:text-base'><p className='w-[50%] xs:w-[80%] opacity-80'>Then after you will received your $WNTR to your address within 24hours. </p></div>
              </div>
            </div>
          </div>

    );
}

export default BuyCard;

