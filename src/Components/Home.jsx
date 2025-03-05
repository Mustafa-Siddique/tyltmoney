import React from 'react'
import rightimg from '../assets/rightimg.avif'

const Home = () => {
  return (
    <div className='bg-gray-300'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 container '>
            <div className=' mt-[10%]'>
                <h1>P2P EXCHANGE</h1>
                <h1 className='mt-[60px]  text-[60px] font-semibold '> <span className='text-green-600'>Buy and sell crypto</span> <br /> instantly with Tylt’s <br /> P2P Exchange</h1>
                <p>Tylt’s P2P exchange allows you to buy and sell crypto securely,
                     with low fees and multiple payment methods. Trade directly with users
                      worldwide and enjoy fast settlements on a platform built for your convenience.
                      </p>
                      <button className='mt-[30px]'>TRADE NOW</button>
            </div>
            <div>
                <img className='h-[65%] mt-[10%] mr-[10px] ' src={rightimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home