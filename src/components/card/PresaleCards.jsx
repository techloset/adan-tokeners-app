import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Number1 from '../../images/Numbers/01.svg'
import Number2 from '../../images/Numbers/02.svg'
import Number3 from '../../images/Numbers/03.svg'

const cardData = [
  {
    number: '01',
    bgColor: 'bg-[#22A75D]',
    shadowColor: 'DropshadowGreen',
    quarter: `${Number1}`,
    phase: 'Phase One',
    mt: '',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: '10000 BNB',
  },
  {
    number: '02',
    bgColor: 'bg-[#2278D4]',
    shadowColor: 'DropshadowBlue',
    quarter: `${Number2}`,
    phase: 'Phase Two',
    mt: 'mt-[5%]',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: ' 10000 BNB',
  },
  {
    number: '03',
    bgColor: 'bg-[#FFD100]',
    shadowColor: 'DropshadowYellow',
    quarter: `${Number3}`,
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
                <div key={index} className={`w-[335px] h-[465px] flex flex-col bg-white p-8 justify-center items-center text-[#191B21]  text-center rounded-[25px]  relative ${card.shadowColor}`}>
                   <div className='absolute bg-cover justfy-center flex flex-col top-[90px] right-[70px]  w-auto' >
                  <img src={card.quarter} className='w-[180px]' alt='Numbers'/>
                  </div>
                  <div className='my-[10%] relative'>
                    <div className='w-full flex justify-center items-center text-center mt-10'>
                      <p className={`flex justify-center text-[#191B21] text-center font-semibold text-2xl items-center  ${card.shadowColor} ${card.bgColor} shadow-xl rounded-r-full rounded-tl-full  rounded-bl-3xl w-[82px] h-[82px]`}>
                        {card.number}
                      </p>
                    </div>
                    <h1 className='pt-8 text-[#191B21] text-[32px] leading-[54px] font-bold'>{card.phase}</h1>
                    <p className='text-[#191B21] text-[16px] leading-[20px] font-bold opacity-[0.8]'>{card.date}</p>
                    <p className='text-[#191B21] text-[20px] leading-[20px] font-bold opacity-[0.8] mt-10'>1 BNB = {card.bnbToWntr}</p>
                    <p className='text-[#191B21] text-[16px] leading-[20px] font-[400] opacity-[0.8] mt-4 mb-2'>Soft cap: <span className='font-bold'>{card.softCap}</span></p>
                    <p className='text-[#191B21] text-[16px] leading-[20px] font-[400] opacity-[0.8]'>Hard cap: <span className='font-bold text-md'>{card.hardCap}</span></p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>



      {/* Desktop Card */}
      <div className='bgpresale pb-[160px] pt-0 mt-0 lg:block sm:hidden xs:hidden ' >
        <div className='2xl:mx-[173px] sm:mx-10 pt-[450px]'>
          <h2 className='text-center text-[#fff] text-5xl font-bold leading-[54px]'>Presale Details</h2>
          <div className='flex items-center justify-center gap-6' >
            {cardData.map((card, index) => (
              
                <div key={index} className={`${card.mt} w-[511px] h-[585px]   bg-white p-8  justify-center items-center text-slate-950 text-center space-y-2 rounded-[25px] py-16 relative `}>
                  <div className='absolute bg-cover  flex flex-col top-[97px] 2xl:right-[120px] xl:right-[100px] lg:right-[70px]' >
                  <img src={card.quarter} alt='Numbers' className='w-[288px]'/>
                  </div>
                  <div className='my-[10%] flex flex-col justify-center items-center text-center w-full h-full relative'>
                    <div className='w-full flex justify-center items-center text-center '>
                      <p className={` rounded-bl-lg  flex justify-center text-[#191B21]  text-center font-semibold text-3xl items-center  ${card.shadowColor}  ${card.bgColor} shadow-xl rounded-r-full rounded-tl-full w-[82px] h-[82px] rounded-bl-[20rem]`}>
                        {card.number}
                      </p>
                    </div>
                    <h1 className='text-[32px]  leading-[54px] font-bold text-[#191B21] pt-16'>{card.phase}</h1>
                    <p className='text-[#191B21] text-[16px] leading-[20px] font-bold opacity-[0.8]'>{card.date}</p>
                    <p className='text-[#191B21] text-[20px] leading-[20px] font-bold opacity-[0.8] mt-10'>1 BNB = {card.bnbToWntr}</p>
                    <p className='text-[#191B21] text-[16px] leading-[20px] font-[400] opacity-[0.8] mt-4'>Soft cap: <span className='font-bold'>{card.softCap}</span></p>
                    <p className='text-[#191B21] text-[16px] leading-[20px] font-[400] opacity-[0.8] mt-1'>Hard cap: <span className='font-bold'>{card.hardCap}</span></p>
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
