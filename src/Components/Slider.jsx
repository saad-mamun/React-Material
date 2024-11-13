import React, { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function Slider() {
    const slides =[
        {
            id:1,
            heading:"Make more time for the work that matters most",
            des:"Best software platform for running an internet business.",
            image:"/Slider.png"
        },
        {
            id:2,
            heading:"Take more time for the work that matters most",
            des:"Best software platform for running an internet business.",
            image:"/Marketing.png"
        },
        {
            id:3,
            heading:"Build more time for the work that matters most",
            des:"Best software platform for running an internet business.",
            image:"/Reference.png"
        },
        {
            id:4,
            heading:"Heard work more time for the work that matters most",
            des:"Best software platform for running an internet business.",
            image:"/Document.png"
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () =>{
            setCurrentIndex((prevIndex)=> (prevIndex === 0 ? slides.length -1: prevIndex -1 ))
};

    const NextSlide = () => {
            setCurrentIndex((prevIndex)=> ( prevIndex === slides.length -1 ? 0 : prevIndex + 1 ))
};

    const {heading, des, image} = slides[currentIndex]


  return (
    <section className='max-w-[1400px] py-24 px-6 md:px-12 mx-auto'>
      <div className='flex flex-col justify-between md:flex-row items-center gap-20 '>
        {/* left side */}
        <div className='flex flex-col justify-between w-full md:w-1/2 space-y-6'>
           <div className='flex items-center space-x-6 md:space-x-12'>
              <img className='w-16 mb-4 md:w-20'  src="/logo2.png" alt="Logo" />
              <h2 className='text-4xl font-bold'>Logo</h2>
           </div>
          <h1 className='text-2xl md:text-5xl font-bold text-black max-w-md'>{heading}</h1>
          <p className='text-gray-400 max-w-sm text-[20px]'>{des}</p>

          <div className='flex items-center space-x-4 mt-4'>
            <button onClick={prevSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'>
                <ChevronLeftIcon className='text-black' />
            </button>

            <button onClick={NextSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'>
                <ChevronRightIcon className='text-black' />
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className='w-full md:w-1/2 flex justify-center'>
            <img className='w-full md:w-[65%] object-cover' src={image} alt="" />
        </div>
      </div>
      {/* Breand name */}
      <div class="overflow-hidden whitespace-nowrap pt-6 container mx-auto ">
          <div class="inline-block animate-marquee">
            <div className='flex items-center gap-20'>
                <img src="google.png" alt="Google" />
                <img src="airbnb.png" alt="Airbnb" />
                <img src="mastercard.png" alt="Mastercard" />
                <img src="Path.png" alt="Path" />
                <img src="stripe.png" alt="stripe" />
                <img src="UBER.png" alt="UBER" />
            </div>
         </div>
     </div>
    </section>
  )
}

export default Slider
