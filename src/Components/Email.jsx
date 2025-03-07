import React from 'react'

const Email = () => {
  return (
    <div className='bg-gray-50 w-[100vw] h-[100vh] absolute z-50'>
        <div className='container py-[30px] grid grid-cols-1 md:grid-cols-2' >
            <div className="">
                <h1 className='text-[50px] font-semibold '>Stay Ahead of the Curve! Subscribe to Our Mailing List</h1>
                <p className='text-lg font-semibold'>Join our mailing list to receive the latest Tylt updates, industry news, and insightful market analysis directly to your inbox. Be the first to know and stay informed with every update!</p>
            </div>
           <div>
            <p>Email</p>
           <input type="Email" placeholder='Please enter your email' />
           <p>Country</p>
           <input type="Country" placeholder='Please enter your Country' />
           <button>SUBSCRIBE</button>
           </div>
        </div>
    </div>
  )
}

export default Email