import React from 'react'
import imgg1 from '../assets/imgg1.avif'
import imgg2 from '../assets/imgg2.avif'
import imgg3 from '../assets/imgg3.avif'
import { MdArrowForwardIos } from "react-icons/md";

const Exchange = () => {
  return (
    <div>
    <div className='container '>
        <div className=' py-12 text-[40px] font-semibold'>Why choose Tylt’s <span className='text-green-500'>P2P Exchange?</span> </div>
        <div className='max-w-8xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  '>
            <div className='p-6 bg-white rounded-xl shadow-md border border-solid border-2 border-black h-[130px] '>
                <h1 className='text-lg font-semibold'>Safety First with Escrow</h1>
            <p className='text-gray-600'>Crypto is securely held in escrow until both parties fulfil their obligations.</p>
            </div>
            <div className='bg-white rounded-xl shadow-md border border-solid border-2 border-black rounded-md  '>
               <div className='p-6'> 
                <h1 className='font-semibold text-lg'>KYC Verification</h1>
                <p className='text-gray-500'>All traders on Tylt are verified, fostering trust and accountability in every transaction.</p>
                </div>
                <img src={imgg1} alt="" />
            </div>
            <div className='p-6 bg-white rounded-xl shadow-md border border-solid border-2 border-black h-[130px] '>
                <h1 className='text-lg font-semibold'>Dedicated Customer Support</h1>
                <p className='text-gray-500'>Tylt’s support team is always available to assist you with any issues or questions.</p>
            </div>
            <div className=' bg-white rounded-xl shadow-md border border-solid border-2 border-black   '>
                <div className=' p-6'><h1 className='text-lg font-semibold'>High Completion Rates</h1>
                <p className='text-gray-600'>Our efficient system ensures most trades are successfully completed.</p></div>
                <img src={imgg2} alt="" />
            </div>
            <div className='bg-white rounded-xl shadow-md border border-solid border-2 border-black p-6 h-[130px] '>
                <h1 className='text-lg font-semibold '>Quick Dispute Resolution</h1>
                <p className='text-gray-500'>Quick and fair dispute handling ensures that buyers and sellers can trade with confidence.</p>
            </div>
            <div className='bg-white rounded-xl shadow-md border border-solid border-2 border-black     '>
                <div className='p-6'>
                    <h1 className='text-lg font-semibold'>Fast Transactions</h1>
                <p className='text-gray-500'>Trades are quick and seamless, with escrow auto-released if the seller doesn’t act.</p>
                </div>
                <img src={imgg3} alt="" />
            </div>
        </div>
        <button className='flex items-center p-3 bg-blue-500 mt-[40px] rounded-md shadow-md border text-lg font-semibold hover:bg-blue-300 '>TRADE NOW <MdArrowForwardIos /></button>
    </div>
    </div>
  )
}

export default Exchange