import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Blog() {

const Cards = [
  {
    id:1,
    image:"/vaseblue.png",
    heading:"Make myspace your best designed space",
    description:"A lot of different components that will help you create the perfect look for your project",
    click:"Design"
  },
  {
    id:1,
    image:"/vasered.png",
    heading:"My company culture has changed today",
    description:"A lot of different components that will help you create the perfect look for your project",
    click:"3D illustrations"
  },
  {
    id:1,
    image:"/vaseorange.png",
    heading:"Professionals in craft! All products were super great",
    description:"A lot of different components that will help you create the perfect look for your project",
    click:"Development"
  },
];

  return (
    <section>
      <div className='flex flex-col container mx-auto py-10 md:py-16 lg:py-20 px-6 md:px-12 '>

          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold' >Get more from our blog</h1>

          <div className='flex flex-col md:flex-row gap-8 items-start  md:items-center md:justify-between py-4 md:py-6'>
            <h5 className='text-gray-500 max-w-[448px] text-base md:text-[21px]'>There are a lot of different components that will help you create the perfect look for your project</h5>
            <button className='bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-200 mx-auto sm:mx-0'>
             Explore All
            <ArrowForwardIcon sx={{fontSize:22}}/>
          </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 md:mt-12'>
            {
              Cards.map((card, index)=>(
                <div key={index} className='space-y-4'>
                  <div className='flex justify-center bg-gray-100 p-10 rounded-lg shadow-sm hover:shadow-lg'>
                     <img src={card.image} alt="Blog" />
                  </div>
                  <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-[327px]'>{card.heading}</h1>
                  <p className='text-gray-500 max-w-[327px]'>{card.description}</p>
                  <button className='text-[#2AB691] text-[13px] bg-green-100 py-1 px-4 rounded-md'>{card.click}</button>
                </div>
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default Blog
