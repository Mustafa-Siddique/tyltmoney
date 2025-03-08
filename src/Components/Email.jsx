import React from 'react'

const Email = () => {
  return (
    <div className='bg-gray-50 w-[100%] absolute z-50'>
        <div className='container py-[10%] grid grid-cols-1 md:grid-cols-2  ' >
            <div className="ml-[10px] lg:ml-[60px]">
                <h1 className='text-[22px] font-semibold lg:text-[50px]  '>Stay Ahead of the Curve! Subscribe to Our Mailing List</h1>
                <p className='text-lg  py-7'>Join our mailing list to receive the latest Tylt updates, industry news, and insightful market analysis directly to your inbox. Be the first to know and stay informed with every update!</p>
            </div>

           <div className='flex flex-col justify-center ml-[5px]  lg:ml-[100px]'>
           <p className='py-2 text-sky-400' >Email</p>
            <div className='w-[200px] h-10 bg-white  border-solid border-2 border-black  lg:w-[298px] h-10'>
            <input className='h-7 outline-none p-2 lg:h-9' type="Email" placeholder='Please enter your email' />
            </div>
           
           <p className='py-2 text-sky-400'>Country</p>
           <div className='w-[200px] h-10 bg-white border-solid border-2 border-black lg:w-[298px] h-10 '>
            <input className='h-7  p-2 outline-none lg:h-9' type="Country" placeholder='Please enter your Country' />
            </div>
           <div>
           <button className=' py-2 px-5 rounded-md  items-center bg-sky-200 font-bold mt-3 shadow-md'>SUBSCRIBE</button>
           </div>
           </div>
           
        </div>
    </div>
  )
}

export default Email