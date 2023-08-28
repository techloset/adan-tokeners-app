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
    quarter: 'Q1',
    phase: 'Phase One',
    my:'',
    title:'',
    pb:'pb-[10%]',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: '10000 BNB',
  },
  {
    number: '02',
    bgColor: 'bg-blue-400',
    shadowColor: 'shadow-blue-400',
    quarter: 'Q2',
    phase: 'Phase Two',
    my:' space-y-28',
    title:'Presale Card',
    pb:'pb-[5%]',
    date: '0/04/2021 - 16/04/2021',
    bnbToWntr: '100000 WNTR',
    softCap: '0 BNB',
    hardCap: ' 10000 BNB',
  },
  {
    number: '03',
    bgColor: 'bg-yellow-400',
    shadowColor: 'shadow-yellow-400',
    quarter: 'Q3',
    phase: 'Phase Three',
    my:'',
    title:'',
    pb:'pb-[10%]',
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
      <div className={`bg-cover h-[100vh] pt-0 mt-0 text-center `} style={{ backgroundImage: `url(${mobilebg})` }}>
        <div className='h-full items-center justify-between flex '>
          <div className='w-full  items-center justify-center'>
            <p className='text-4xl my-2 font-semibold'>Presale cards</p>
            <div className='flex items-center justify-center mt-10'>
              <Slider
                className='w-[80%] md:items-center text-center justify-center'
                dots={true}
                infinite={true}
                arrows={false}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {cardData.map((card, index) => (
                  <div key={index} className={` bg-white p-8 justify-center items-center text-slate-950 text-center space-y-2 rounded-xl py-16 relative ${card.shadowColor}`}>
                    <div className='absolute bg-cover inset-0'>
                      <p className={`text-white drop-shadow-[0_0px_0px_rgba(0,0,0,1)] text-[12rem]`}>{card.number}</p>
                    </div>
                    <div className='my-[10%] relative'>
                      <div className='w-full flex justify-center items-center text-center mt-10'>
                        <p className={`flex justify-center text-slate-950 text-center font-semibold text-2xl items-center ${card.shadowColor} ${card.bgColor} shadow-md rounded-r-full rounded-tl-full w-16 h-16 rounded-bl-3xl`}>
                          {card.quarter}
                        </p>
                      </div>
                      <h1 className='text-3xl font-semibold pt-8'>{card.phase}</h1>
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
      </div>
      </div>


      {/* Desktop Card */}
      <div className='hidden lg:block xl:block py-0 my-0'>
      <div className={`bg-cover h-[150vh] pt-0 mt-0 text-center`} style={{ backgroundImage: `url(${desktopbg})` }}>
        <div className='h-full  justify-center flex-row lg:flex xl:flex gap-4 hidden  items-end pb-[5%]'>
          {cardData.map((card, index) => (
            <div className={` text-slate-950 w-[25%] ${card.my}`}>
              <p className={`text-white text-6xl font-semibold `}>{card.title}</p>
            <div key={index} className={`w-full   bg-white p-8 mb-[20%] justify-center items-center text-slate-950 text-center space-y-2 rounded-xl py-16 relative ${card.shadowColor} `}>
              <div className='absolute bg-cover inset-0' >
                <p className={`text-white drop-shadow-[0_0px_0px_rgba(0,0,0,1)] text-[12rem]`}>{card.number}</p>
              </div>
              <div className='my-[10%] relative'>
                <div className='w-full flex justify-center items-center text-center mt-10'>
                  <p className={`flex justify-center text-slate-950 text-center font-semibold text-2xl items-center ${card.shadowColor} ${card.bgColor} shadow-md rounded-r-full rounded-tl-full w-16 h-16 rounded-bl-3xl`}>
                    {card.quarter}
                  </p>
                </div>
                <h1 className='text-3xl font-semibold pt-8'>{card.phase}</h1>
                <p className='text-slate-950 text-xs'>{card.date}</p>
                <p className='font-semibold text-sm pt-8'>1 BNB = {card.bnbToWntr}</p>
                      <p className='text-sm font-light'>Soft cap: <span className='font-semibold text-md'>{card.softCap}</span></p>
                      <p className='text-sm font-light'>Hard cap: <span className='font-semibold text-md'>{card.hardCap}</span></p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default PresaleCards;
