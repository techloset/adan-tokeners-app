import Header from './components/header/Header';
import Headergarient from "../src/images/garient/headergarient.svg"
import Dashboard from "../src/images/dashboard.png"
import Button from './components/button/Button';
import Card from './components/card/Card';
import styleimg from "../src/images/style/style.svg"
import InstructionCard from './components/card/InstructionCard';
import phoneimg from '../src/images/iphone.png'
import Aboutus from './components/aboutus/Aboutus';
import PresaleCards from './components/card/PresaleCards';
import BuyCard from './components/card/BuyCard';
import foortergarient from '../src/images/garient/footergarient.svg'
import Footer from './components/footer/Footer';
function App() {

  return (
    <div className='bg-slate-950 text-white relative '>
      <Header />
      <div className="bg-cover h-auto w-auto bg-center " style={{ backgroundImage: `url(${Headergarient})` }}>

        <div className='grid lg:grid-cols-2 grid-cols-1 '>
          <div className='lg:mt-[15rem] mt-[5rem] lg:ml-20 ml-5 '>
            <p className='text-cyan-700 text-sm font-semibold'>At Tokners we are</p>
            <p className='text-slate-50 text-5xl font-bold '>Reimagining social media through the power of the blockchain.</p>
            <p className='text-zinc-400 mt-5 text-sm lg:w-[562px] w-auto font-semibold'>We are creating social media 3.0 with influencers, celebrities and creators  being able to launch their
              own digital currency by simply creating a profile with media content posted as Non fungible Tokens that
              can be owned and traded on the Tknrs network</p>
            <Button />
          </div>
          <div className='mt-[5rem]'>
            <img src={Dashboard} alt='Dashboardpic' />
          </div>
        </div>
      </div>

      <Card />

      <div className="pt-12 bg-cover bg-center flex flex-col lg:flex-row items-center justify-center mt-3 w-[100%] h-auto">
        <div className="lg:w-1/2  ">
          <img src={styleimg} alt='ImageStyle' className="w-[100%] h-auto lg:h-[80vh]  xl:h-[80vh]  rounded-tl-[50%] lg:rounded-tr-[50%] lg:rounded-tl-[0%]" />
        </div>
        <div className="lg:w-1/2 bg-white h-auto lg:h-[80vh]  xl:h-[80vh]  lg:rounded-tl-[50%] rounded-tr-[50%] lg:rounded-tr-[0%] flex flex-col justify-center items-center text-center p-6 overflow-hidden">
          <p className='text-5xl text-slate-900 font-semibold mt-24'>What makes us different?</p>
          <p className='text-md font-bold text-zinc-400 mt-3'>We would only launch tokens with the express permission of the creators.</p>
          <p className='text-zinc-500 mt-5 text-md'>There are several thousand celebrities and creators on Twitter, TikTok, Instagram, and YouTube
            with followings in the millions who we would be actively engaging before we go viral.</p>
          <p className='text-zinc-500 mt-8 text-md'>We would get them on our platform, and they would see the opportunity to create a fan-driven digital economy where their digital content can be traded as NFTs and their most loyal
            fans can have the monetary value of their creator's currency increase significantly as they promote their
            digital currency across their channels while our native token holders benefit from the Weentar popularity.</p>
        </div>
      </div>

      <div className='lg:p-20 md:p-10 p-5 relative'>
        <svg className="absolute top-0 right-0 hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="278" height="287" viewBox="0 0 278 287" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0C153.535 0 278 124.465 278 278V0H0ZM277.857 287H278V278C278 281.011 277.952 284.012 277.857 287Z" fill="white" />
        </svg>
        <InstructionCard />
      </div>

      <div className='grid lg:grid-cols-2 grid-cols-1 space-y-2 lg:mx-16 mx-2'>
        <Aboutus />
        <div className=''>
          <img
            src={phoneimg}
            alt='iphone'
          />
        </div>

      </div>
      <PresaleCards />

      <div className="bg-cover h-auto w-auto  lg:pb-[30%] pb-[70%]" style={{ backgroundImage: `url(${foortergarient})` }}>
        <BuyCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;

