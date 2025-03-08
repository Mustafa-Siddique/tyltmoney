import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import tradingimg from '../assets/tradingimg.avif'


const Trading = () => {
  return (
    <div className='bg-sky-300 py-[30px] lg:py-[10px]     z-0 '>
        <div className='bg-[url("https://framerusercontent.com/images/u2krKFZQ2tG3JDbhB3FH5A6fgs.png?scale-down-to=2048")]  relative w-[70vw] container bg-white z-30 rounded-xl shadow-lg h-[72vh]  lg:w-[100vw] h-[60vh]  '>
        <h1 className=' flex justify-center items-center text-[20px] font-semibold pt-[40px]  lg:text-[50px]'>Start Trading with  </h1>
        <h1 className='flex justify-center items-center text-[20px] font-semibold lg:text-[50px]'>Tylt P2P Exchange</h1>
        
        <div className='flex justify-center items-center p-6 pl-5 lg:pl-[10] '><p>Join the platform that makes crypto trading secure, fast, and hassle-free.  Buy, sell, and transact with confidence—get started now!</p>
        </div>
       <div className='flex justify-center items-center py-3'> 
        <button className='flex items-center py-3 px-3 rounded-md  bg-black font-bold text-white    '>START TRADING <MdArrowForwardIos /></button>
       </div>
        <div>
            <img className='w-[40%] flex justify-center items-center  ml-[30%] relative z-0 mt-[50px] lg:w-[35%] mt-[70px] ' src={tradingimg} alt="" />
        </div>
        
        </div>
    </div>
  )
}

export default Trading