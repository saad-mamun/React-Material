import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Presentation() {

  const cardData = [
    {
    Source:"/Document.png",
    Heading:"Managment",
    text:"Software platform for running your new internet business"
  },
    {
    Source:"/Equepment.png",
    Heading:"Entertainment",
    text:"Software platform for running your new internet business"
  },
    {
    Source:"/Marketing.png",
    Heading:"Marketing",
    text:"Software platform for running your new internet business"
  },
    {
    Source:"/Reference.png",
    Heading:"References",
    text:"Software platform for running your new internet business"
  },
]
const socialLinks =[
  {
    link:"/fb.png"
  },
  {
    link:"insta.png"
  },
  {
    link:"x.png"
  }
]
  return (
    <>
      <section className='bg-gray-50'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 py-12 px-6 md:px-12 lg:px-16 max-w-[1400px]'>
            {/* first div left section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2 '>
            {
              cardData.map((card, index)=>(
                <div key={index} className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center'>
                  <div className='flex items-center justify-center'>
                    <img src={card.Source} alt="Managment" />
                  </div>
                  <div>
                    <h3 className='text-black text-lg md:text-xl font-semibold'>{card.Heading}</h3>
                    <p className='text-gray-400 text-sm md:text-base' >{card.text}</p>
                  </div>
                </div>
              ))
            }
            </div>
            {/* second div right section */}
            <div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
            <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-start lg:max-0'>The quickest way to create modern presentation</h1>

            <p className='text-gray-400 text-center lg:text-start max-w-md mx-auto lg:mx-0 text-sm md:text-base '>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
            <button className='bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-200 mx-auto sm:mx-0'>
              Explore All
              <ArrowForwardIcon sx={{fontSize:22}}/>
              </button>

              <p className='text-gray-500 text-center lg:text-start !mt-[85px] '>Follow us</p>
              <div className='flex justify-center lg:justify-start gap-4 mt-6 items-center'>
                {
                  socialLinks.map((social)=>(
                    <a href="" className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300'>
                      <img className='w-[30px] h-[30px]' src={social.link} alt="Social Link" />
                    </a>
                  ))
                }
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Presentation
