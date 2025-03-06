import React from 'react'
import rightimg from '../assets/rightimg.avif'
import { MdArrowForwardIos } from "react-icons/md";


const Home = () => {
  return (
    <div className='bg-gray-300 h-[100vh]'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 container  pt-[10%] '>
            <div className=' '>
              <button className='bg-gray-400 p-3  rounded-md'>P2P EXCHANGE</button>
                <h1 className='  text-[70px] font-semibold '> <span className='text-green-600'>Buy and sell crypto</span> <br /> instantly with Tylt’s <br /> P2P Exchange</h1>
                <p className='font-semibold text-[25px]'>Tylt’s P2P exchange allows you to buy and sell crypto securely,
                     with low fees and multiple payment methods. Trade directly with users
                      worldwide and enjoy fast settlements on a platform built for your convenience.
                      </p>
                      <button className='mt-[30px] flex items-center bg-blue-500 p-3 rounded-md font-semibold'>TRADE NOW <MdArrowForwardIos /></button>
            </div>
            <div>
                <img className='h-[90%]  mt-[10%] mr-[10px] ' src={rightimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home