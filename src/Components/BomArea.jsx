import React from 'react'

function BomArea() {
  return (
    <section className='bg-[#5F62E2] w-full h-auto mb-5'>
      <div className='flex flex-col md:flex-row items-center justify-between mt-24 max-w-[1400px] mx-auto'>
        <div className='flex-1 flex flex-col gap-8 p-5' >
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white text-center md:text-start'>The quickest way to create awesome presentation</h1>
            <div className='flex gap-3 flex-wrap mb-10'>
                <button className='bg-green-500 hover:bg-green-600 rounded-md px-3 py-2 text-white'>Get Started</button>
                <button  className='bg-indigo-400 hover:bg-indigo-500 rounded-md px-3 py-2 text-white' >Learn More</button>
            </div>
        </div>
        <div className='flex-1'>
            <img className='w-full h-auto md:h-[300px]' src="/bomb.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default BomArea
