import React from 'react';

const BuyCard = () => {
    return (
        <>
            <p className='text-6xl font-semibold text-white text-center my-10'>How to Buy</p>

            <div className=' items-center justify-center lg:flex-row flex gap-4 flex-col'>

                <div className='relative lg:w-[30%] w-[90%]  bg-slate-800 '>
                    <p className='mt-4 ml-4 text-lg text-slate-500'>01</p>
                    <div className='absolute right-[-5%] top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-slate-900 rounded-full'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#22A75D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className='text-white text-xl font-semibold text-center px-[6rem] py-[4rem]'>First, connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>

                </div>

                <div className='relative lg:w-[30%] w-[90%]  bg-slate-800 mt-16'>
                    <p className='mt-4 ml-4 text-lg text-slate-500'>02</p>
                    <div className='absolute right-[-10%] top-1/2  transform -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-slate-900 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#FFD100" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className='text-white text-xl font-semibold text-center px-[6rem] py-[4rem]'>Then send a minimum of 0.1 BNB or a maximum of 10 BNB to the Presale wallet</p>
                </div>

                <div className='lg:w-[30%] w-[90%]  bg-slate-800'>
                    <p className='mt-4 ml-4 text-lg text-slate-500'>03</p>
                    <p className='text-white text-xl font-semibold text-center px-[6rem] py-[4rem]'>Then after, you will receive your $WNTR to your address within 24 hours.</p>
                </div>

            </div>
        </>

    );
}

export default BuyCard;
