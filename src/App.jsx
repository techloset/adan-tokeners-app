import Header from './components/header/Header';
import logo from "../src/images/bg.png"
import Dashboard from "../src/images/dashboard.png"
import Button from './components/button/Button';
import Card from './components/card/Card';
import styleimg from "../src/images/style.png"


function App() {
  return (
    <div className='bg-slate-950 text-white min-h-screen'>
      <Header />
      <div className="bg-cover h-screen" style={{ backgroundImage: `url(${logo})` }}>


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
            <img src={Dashboard}  />
          </div>
        </div>


        <Card />


        <div className="pt-12 bg-cover bg-center flex flex-col md:flex-row items-center justify-center mt-3 w-[100%] lg:h-[70%] h-auto">
          <div className="md:w-1/2 ">
            <img src={styleimg} alt="Style Image" className="w-[100%] h-auto lg:h-[80vh] " />
          </div>
          <div className="md:w-1/2 bg-white h-auto lg:h-[80vh] rounded-tl-[18rem] flex flex-col justify-center items-center text-center p-6 ">
            <p className='text-5xl text-slate-900 font-semibold mt-24'>What makes us different?</p>
            <p className='text-md font-bold text-zinc-400 mt-3'>We would only launch tokens with the express permission of the creators.</p>
            <p className='text-zinc-500 mt-5 text-md'>There are several thousand celebrities and creators on Twitter, TikTok, Instagram, and YouTube
              with followings in the millions who we would be actively engaging before we go viral.</p>
            <p className='text-zinc-500 mt-8 text-md'>We would get them on our platform, and they would see the opportunity to create a fan-driven digital economy where their digital content can be traded as NFTs and their most loyal
              fans can have the monetary value of their creator's currency increase significantly as they promote their
              digital currency across their channels while our native token holders benefit from the Weentar popularity.</p>
          </div>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
          </div>
      </div>
    </div>
  );
}

export default App;
