import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import tradingimg from '../assets/tradingimg.avif'


const Trading = () => {
  return (
    <div className='bg-sky-300 pt-[100px] '>
        <div className='bg-[url("https://framerusercontent.com/images/u2krKFZQ2tG3JDbhB3FH5A6fgs.png?scale-down-to=2048")] container '>
        <h1>Tylt P2P Exchange Start Trading with</h1>
        <p>Join the platform that makes crypto trading secure, fast, and hassle-free. Buy, sell, and transact with confidence—get started now!</p>
        <button className='flex items-center'>START TRADING <MdArrowForwardIos /></button>
        <div>
            <img className='w-[35%] flex justify-center items-center' src={tradingimg} alt="" />
        </div>
        
        </div>
    </div>
  )
}

export default Trading