import { useState } from 'react'
import logo1 from '../../images/logo1.png'
import ButtonType2 from '../button/ButtonType2';

const Aboutus = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='mt-5'>
            <div className='lg:flex' >
              <img src={logo1} alt="logo" />
              <p className='text-3xl font-semibold text-white '>Tokner is coming</p>
            </div>
            <div className='mt-6 space-y-4 text-slate-300'>
              <p className='font-semibold'>
                Cryptocurrency adoption is at less than 1% of the global world population with some countries and
                entities actively fighting against its mass adoption and the smartest developers and nerds holding
                the fort.
              </p>
              <p className='font-light '> Bitcoin was the first, and it has since grown to thousands of tokens launched all aiming to
                fix one problem or the other with some quite simply FOMOing the moment. Our goal is to bring mass
                adoption to the cryptocurrency space by dumbing it down. How far down? So down that even a celebrity
                can explain it in simple words to their followers and have them download an app, buy into the social
                currency of their favourite person and watch their
                investment as is with other crypto currency project. </p>
              <div className='hidden lg:block'>
                <p className='font-light ' >
                  We are trying to do to this space what investment apps did for the "nonexistent retail investors".
                  We are gamefying digital currency, bringing in popular faces instead of hard to understand projects
                  to make it the norm and inadvertently being the "gateway drug" for a lot of people to finally give
                  this space a real look. </p>
                <p className='font-semibold'>A new digital economy is coming. People would be just as powerful as countries and
                  creators would be paid beyond the peanuts that conventional social media platforms can offer. </p>
                <p className='font-light'> There would be new markets and advertisers with little to offer would not find home there.
                  Like Kanye said,  </p>
                <p className='flex justify-center items-center text-center'><span className='mr-4 text-yellow-500 text-3xl'>“</span>
                  "Personalities would become the new currency, and services would be built on top of them".
                </p>
                <p className='font-light'>
                  Well, Kanye didn't exactly say that, but it sounds like something we hope he would say.
                </p>
                <p className='font-light'> Currency is digital, it has been that way for a while now, but this time there would be no dead
                  presidents on the money, there would people like you on the money, and you would own it because it
                  would make the most sense in the world.</p>
              </div>
              {!isExpanded && (
                <ButtonType2
                  onClick={toggleReadMore}
                  className="text-md  lg:text-slate-50 lg:border-[3px]  border-emerald-600 lg:py-2 lg:px-8 lg:rounded-3xl cursor-pointer border-dotted font-semibold border-b-2 lg:border-solid text-emerald-600 "
                >
                  Read More
                </ButtonType2>
              )}
              {isExpanded && (
                <div>
                 <p className='font-light ' >
                  We are trying to do to this space what investment apps did for the "nonexistent retail investors".
                  We are gamefying digital currency, bringing in popular faces instead of hard to understand projects
                  to make it the norm and inadvertently being the "gateway drug" for a lot of people to finally give
                  this space a real look. </p>
                <p className='font-semibold'>A new digital economy is coming. People would be just as powerful as countries and
                  creators would be paid beyond the peanuts that conventional social media platforms can offer. </p>
                <p className='font-light'> There would be new markets and advertisers with little to offer would not find home there.
                  Like Kanye said,  </p>
                <p className='flex justify-center items-center text-center'><span className='mr-4 text-yellow-500 text-3xl'>“</span>
                  "Personalities would become the new currency, and services would be built on top of them".
                </p>
                <p className='font-light'>
                  Well, Kanye didn't exactly say that, but it sounds like something we hope he would say.
                </p>
                <p className='font-light'> Currency is digital, it has been that way for a while now, but this time there would be no dead
                  presidents on the money, there would people like you on the money, and you would own it because it
                  would make the most sense in the world.</p>
                  <ButtonType2
                    onClick={toggleReadMore}
                    className="text-md lg:text-slate-50 lg:border-[3px] border-emerald-600 lg:py-2 lg:px-8 lg:rounded-3xl cursor-pointer border-dotted font-semibold border-b-2 lg:border-solid text-emerald-600 "
                  >
                    Hide
                  </ButtonType2>
                </div>
              )}
            </div>
          </div>
    )
}

export default Aboutus