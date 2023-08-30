import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import desktopbg from '../../images/style/desktopbg.svg';
import mobilebg from '../../images/style/mobilebg.svg'


const cardData = [
  {
    number: '01',
    bgColor: 'bg-green-400',
    shadowColor: 'shadow-green-400',
    quarter: '1',
    phase: 'Phase One',
    mt: '',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: '10000 BNB',
  },
  {
    number: '02',
    bgColor: 'bg-blue-400',
    shadowColor: 'shadow-blue-400',
    quarter: '2',
    phase: 'Phase Two',
    mt: 'mt-[10%]',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: ' 10000 BNB',
  },
  {
    number: '03',
    bgColor: 'bg-yellow-400',
    shadowColor: 'shadow-yellow-400',
    quarter: '3',
    phase: 'Phase Three',
    mt: '',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: '10000 BNB',
  },
];

const PresaleCards = () => {
  return (
    <>

      {/* Mobile Card */}
      <div className='lg:hidden xl:hidden block py-0 my-0'>
        <div className='bgpresaleiphone pb-[160px]  '>
          <h2 className='text-center text-[#fff] text-5xl font-bold leading-[54px] pt-[127px]'>Presale Details</h2>
          <div className='flex items-center justify-center mt-10'>
            <Slider
              className='w-[335px] h-[465px] md:items-center text-center justify-center'
              dots={true}
              infinite={true}
              arrows={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {cardData.map((card, index) => (
                <div key={index} className={`w-[335px] h-[465px] bg-white p-8 justify-center items-center text-slate-950  text-center rounded-xl py-16 relative ${card.shadowColor}`}>
                  <div className='absolute bg-cover inset-0'>
                    <p className={`text-white drop-shadow-[0_0px_0px_rgba(0,0,0,1)] text-[12rem]`}>{card.number}</p>
                  </div>
                  <div className='my-[10%] relative'>
                    <div className='w-full flex justify-center items-center text-center mt-10'>
                      <p className={`flex justify-center text-slate-950 text-center font-semibold text-2xl items-center ${card.shadowColor} ${card.bgColor} shadow-md rounded-r-full rounded-tl-full w-16 h-16 rounded-bl-3xl`}>
                        {card.quarter}
                      </p>
                    </div>
                    <h1 className='text-3xl font-semibold  pt-8'>{card.phase}</h1>
                    <p className='text-slate-950 text-xs'>{card.date}</p>
                    <p className='font-semibold text-sm pt-8'>1 BNB = {card.bnbToWntr}</p>
                    <p className='text-sm font-light'>Soft cap: <span className='font-semibold text-md'>{card.softCap}</span></p>
                    <p className='text-sm font-light'>Hard cap: <span className='font-semibold text-md'>{card.hardCap}</span></p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>



      {/* Desktop Card */}
      <div className='bgpresale pb-[160px] lg:block sm:hidden xs:hidden'>
        <div className='2xl:mx-[173px] sm:mx-10 pt-[450px]'>
          <h2 className='text-center text-[#fff] text-5xl font-bold leading-[54px]'>Presale Details</h2>
          <div className='flex items-center justify-center gap-6' >
            {cardData.map((card, index) => (
              
                <div key={index} className={`${card.mt} w-[511px] h-[585px]   bg-white p-8  justify-center items-center text-slate-950 text-center space-y-2 rounded-xl py-16 relative ${card.shadowColor} `}>
                  <div className='absolute bg-cover inset-0' >
                    <p className={`text-white drop-shadow-[0_0px_0px_rgba(0,0,0,1)] text-[18rem]`}>{card.number}</p>
                  </div>
                  <div className='my-[10%] flex flex-col justify-center items-center text-center w-full h-full relative'>
                    <div className='w-full flex justify-center items-center text-center '>
                      <p className={` rounded-bl-lg  flex justify-center text-slate-950 text-center font-semibold text-4xl items-center ${card.shadowColor} ${card.bgColor} shadow-md rounded-r-full rounded-tl-full w-24 h-24 rounded-bl-3xl`}>
                        0{card.quarter}
                      </p>
                    </div>
                    <h1 className='text-4xl font-semibold pt-16'>{card.phase}</h1>
                    <p className='text-slate-950 text-sm'>{card.date}</p>
                    <p className='font-semibold text-lg pt-8'>1 BNB = {card.bnbToWntr}</p>
                    <p className='text-md font-light'>Soft cap: <span className='font-semibold text-md'>{card.softCap}</span></p>
                    <p className='text-md font-light'>Hard cap: <span className='font-semibold text-md'>{card.hardCap}</span></p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </>
  );
}

export default PresaleCards;
