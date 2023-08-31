import Desktop from "../../images/Colors/DesktopStyle.svg"
import Mobile from "../../images/Colors/MobileStyle.svg"


const Colors = () => {
    return (
        <>
            <div className='mt-[120px] grid lg:grid-cols-2 sm:grid-cols-1'>
                <div className=' lg:inline sm:hidden lg:colorfull sm:rounded-tr-[10rem] lg:rounded-tr-[50%]'>
                    <img src={Desktop} alt="Desktop-Colorfull-Style" className='w-full xs:hidden sm:hidden 2xl:h-full' /> 
                <img src={Mobile} alt="Desktop-Colorfull-Style" className='hidden  xs:block min-w-full ' /></div>
                <div className='bg-white lg:rounded-tl-[50%] sm:rounded-tr-[50%] xs:rounded-tr-[10rem] lg:rounded-tr-none 2xl:pb-[130px] lg:pb-11 sm:pb-16'>
                    <div className='ml-[143px] xs:ml-5 mt-[296px] xs:mt-[70px]'>
                        <h2 className='text-[48px] font-bold leading-[54px]
                         text-[#0F1320] xs:text-4xl xs;leading-[40px] xs:w-[70%] '>What makes us different?</h2>
                        <h3 className='mt-[30px] text-base font-bold left-5 opacity-60
                         text-[#0F1320] xs:text-sm'>We would only launch tokens with the express permission of the creators. </h3>
                        <p className='mt-[30px] text-base font-normal leading-6 
                        opacity-60 text-[#0F1320] w-[71%]  xs:text-sm xs:w-[94%] xs:pb-[70px]'>There are several thousand celebrities and creators on twitter, tiktok, Instagram and YouTube with followings in the millions who we would be actively engaging before we go viral.
                            <br />
                            <br />
                            <br />
                            We would get them on our
                            platform and they would see the opportunity to create a fan driven digital economy where their digital content can be traded as NFTs and their most loyal fans can have the monetary value of their creator's currency increase significantly as they promote their digital currency across their channels while our native token holders benefit from the Weentar popularity.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colors