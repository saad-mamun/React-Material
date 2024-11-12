import React from 'react'

function Work() {
  return (
    <>
      <section>
        {/* main div */}
        <div className='container mx-auto py-6 px-12 lg:px-16'>
            {/* top section */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12 py-6'>
                <div className=''>
                    <img src="/work.png" alt="Work" />
                </div>
                <div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl lg:text-4xl font-semibold '>Make more time for the work</h1>
                        <p className='flex flex-row gap-2'>
                            <img src="/mark.png" alt="Mark" />
                            Many ways to use illustrations in design
                        </p>
                        <p  className='flex flex-row gap-2'>
                        <img src="/mark.png" alt="Mark" />
                        Simply explained with illustrations
                        </p>
                        <p  className='flex flex-row gap-2'>
                        <img src="/mark.png" alt="Mark" />
                        Make more time for the work
                        </p>
                    </div>
                </div>
            </div>
            {/* bottom section */}
            <div  className=''>
                <div className='flex flex-col-reverse items-center justify-between lg:flex-row'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl lg:text-4xl font-semibold '>Make more time for the work</h1>
                        <p className='flex flex-row gap-2'>
                            <img src="/mark.png" alt="Mark" />
                            Many ways to use illustrations in design
                        </p>
                        <p  className='flex flex-row gap-2'>
                        <img src="/mark.png" alt="Mark" />
                        Simply explained with illustrations
                        </p>
                        <p  className='flex flex-row gap-2'>
                        <img src="/mark.png" alt="Mark" />
                        Make more time for the work
                        </p>
                    </div>
                    <div>
                        <img src="time.png" alt="Time" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Work
