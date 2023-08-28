import React from 'react';

const BuyCard = () => {
    return (
        <>
            <p className='text-6xl font-semibold text-white text-center my-10'>How to Buy</p>

            <div className=" mx-auto  max-w-[80rem] flex lg:flex-nowrap  xl:flex-nowrap flex-wrap justify-center lg:justify-normal  xl:justify-normal  gap-1">
                <div className="w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative mt-[50px] ">
                    <span className="text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block">01</span>
                    <div className="flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base">
                        <p className="w-[52%] xs:w-[70%] ">First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>
                    </div>
                    <div className="lg:h-[86px] lg:w-[86px] xl:h-[86px] xl:w-[86px] w-[60px] h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[60%] lg:left-[90%] xl:top-[43%] xl:left-[90%] left-[50%] top-[100%] -translate-x-2/4 -translate-y-2/4 xl:transform-none   lg:transform-none z-[50] ">
                        <div>
                             <svg className="rotate-90 lg:rotate-0 xl:rotate-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#22A75D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[110px] xl:ml-5 xl-[110px] sm:mt-5 xs:mt-5">
                    <span className="text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block">02</span>
                    <div className="flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base">
                        <p className="w-[50%] xs:w-[70%]">Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet</p>
                    </div>
                    <div className="lg:h-[86px] lg:w-[86px] xl:h-[86px] xl:w-[86px]  w-[60px] h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[20%] lg:left-[90%] xl:top-[20%] xl:left-[90%] left-[50%]   top-[100%] -translate-x-2/4 -translate-y-2/4  lg:transform-none xl:transform-none z-50">
                        <div>
                            <svg  className="rotate-90 lg:rotate-0 xl:rotate-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#FFD100" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[50px] xl:ml-5 xl:mt-[50px] sm:mt-5 xs:mt-5">
                    <span className="text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block">03</span>
                    <div className="flex flex-col justify-center items-center  text-lg  font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base">
                        <p className="w-[50%] xs:w-[70%]">Then after you will received your $WNTR to your address within 24hours. </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default BuyCard;

