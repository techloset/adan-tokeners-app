import Header from './components/header/Header';
import Dashboard from "./components/dashboard/Dasboard"
import Card from './components/card/Card';
import InstructionCard from './components/card/InstructionCard';
import Aboutus from './components/aboutus/Aboutus';
import PresaleCards from './components/card/PresaleCards';
import BuyCard from './components/card/BuyCard';
import foortergarient from '../src/images/garient/footergarient.svg'
import Footer from './components/footer/Footer';
import Colors from './components/Colors/Colors';

function App() {

  return (
    <div className='relative'>
      <Header />
      <Dashboard />
      <Card />
      <Colors />
      <div className='lg:p-20 xl:p-20 md:p-10 p-5  mb-0  relative'>
        <svg className="absolute top-[-1%] right-[0%] hidden 2xl:block xl:block" xmlns="http://www.w3.org/2000/svg" width="278" height="287" viewBox="0 0 278 287" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0C153.535 0 278 124.465 278 278V0H0ZM277.857 287H278V278C278 281.011 277.952 284.012 277.857 287Z" fill="white" />
        </svg>
        <InstructionCard />
      </div>
      <Aboutus />
      <PresaleCards />
      <div className="bg-cover h-auto w-auto  lg:pb-[30%] xl:pb-[30%] pb-[70%]" style={{ backgroundImage: `url(${foortergarient})` }}>
        <BuyCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;

