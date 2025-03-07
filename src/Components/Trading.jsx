import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import tradingimg from '../assets/tradingimg.avif'


const Trading = () => {
  return (
    <div className='bg-sky-300 py-[10px] lg:py-[50px] '>
        <div className='bg-[url("https://framerusercontent.com/images/u2krKFZQ2tG3JDbhB3FH5A6fgs.png?scale-down-to=2048")]  relative w-[100vw] container bg-white z-30 rounded-xl shadow-lg h-[60vh]  '>
        <h1 className='flex justify-center items-center text-[50px] font-semibold pt-[40px] '>Start Trading with  </h1>
        <h1 className='flex justify-center items-center text-[50px] font-semibold'>Tylt P2P Exchange</h1>
        <p className='flex  justify-center items-center   '>Join the platform that makes crypto trading secure, fast, and hassle-free.  Buy, sell, and transact with confidence—get started now!</p>
        <button className='flex items-center py-3 px-3 rounded-md flex items-center bg-black font-bold text-white   '>START TRADING <MdArrowForwardIos /></button>
        <div>
            <img className='w-[35%] flex justify-center items-center mt-[70px] ml-[30%] relative z-0' src={tradingimg} alt="" />
        </div>
        
        </div>
    </div>
  )
}

export default Trading