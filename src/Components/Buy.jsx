import React from 'react'
import buyimg from '../assets/buyimg.avif'
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdOutlineImportContacts } from "react-icons/md";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";

const Buy = () => {
  return (
    <div className='bg-gray-100 py-20 mb-20' >
        <div className='grid grid-cols-1 lg:grid-cols-2 container'>
           <div className=' '>
             <h1 className='text-[28px] font-semibold lg:text-[40px] font-bold ' > Want to create offers on Tylt ? Become a <span className='text-green-500'>Supplier</span> today!</h1>
            <p className='mt-[10px] w-[100%] text-lg text-gray-800 '>Create offers, attract more buyers, and enjoy exclusive benefits with our Verified Supplier Program. Fill out the form to get approved and start leading the market.</p>
            <button className='flex items-center py-3 px-5 rounded-md flex items-center bg-green-100 font-bold shadow-lg border-solid border-2 border-green-500 mt-[50px] hover:bg-green-600 lg:' >BECOME A SUPPLIER <MdArrowForwardIos /></button>
            </div>
            <div>
                <img className=' mt-5 ml-1  lg:container ' src={buyimg} alt="" />
            </div>
        </div>
        <div className='container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 py-10'>
            <div className=' hover:scale-105 duration-100 mt-10'>
            <IoMdContact className='text-[30px]' />
            <h1 className='font-bold text-lg text-gray-700 py-5' >First Mover Advantage</h1>
            <p className='font-semibold text-md text-gray-700'>Gain an edge by becoming a trusted trader early on, building your reputation and attracting more buyers.</p>
            </div>
            <div className=' hover:scale-105 duration-100 mt-10'>
            <FaUpRightAndDownLeftFromCenter className='text-[30px]' />
            <h1 className='font-bold text-lg text-gray-700 py-5'>Exclusive Growth Opportunities</h1>
            <p className='font-semibold text-md text-gray-700'>Perform well and qualify for Tylt Prime, our premium platform offering institutional order flow and enhanced rewards.</p>
            </div>
            <div className=' hover:scale-105 duration-100 mt-10'>
            <MdOutlineImportContacts className='text-[30px]' />
            <h1 className='font-bold text-lg text-gray-700 py-5'>Tailored Support for Success</h1>
            <p className='font-semibold text-md text-gray-700'>Unlock additional benefits like liquidity support, rebates, and OTC pricing based on your trading performance.</p>
            </div>
        </div>
    </div>
  )
}

export default Buy