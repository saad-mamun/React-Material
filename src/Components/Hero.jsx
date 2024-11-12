import React from 'react'

function Hero() {
  return (
   <>
       <section className='flex flex-col-reverse lg:flex-row items-center justify-between  gap-8 py-16 px-6 lg:px-16 container mx-auto'>
        {/* First div */}
        <div className='flex-1 flex flex-col items-start lg:gap-12 gap-5'>
          <h1 className='text-2xl lg:text-6xl font-bold max-w-lg'>Simply explained with illustrations</h1>
          <p className='text-lg lg:text-xl text-gray-500 max-w-md'>There are a lot of different components that will help you create the perfect look for your project</p>

          <div className='flex gap-3 flex-wrap'>
            <button className='bg-[#5F62E2] hover:bg-blue-700 text-white  font-semibold py-2 sm:py-3 px-5 sm:px-6 transition duration-300 rounded-[10px]'>Get Started</button>

            <button className='bg-indigo-100 hover:bg-indigo-200 transition delay-300 font-semibold rounded-lg text-[#5F62E2]  py-2 sm:py-3 px-5 sm:px-6  '>Learn More</button>
          </div>
        </div>
        {/* Second div */}
        <div className='flex'>
          <img className='w-full max-w-lg h-auto' src="/rocket.png" alt="Rocket" />
        </div>
       </section>
   </>
  )
}

export default Hero
