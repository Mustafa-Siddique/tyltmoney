import React from 'react'
import './Slider2.css'

import sliderimg from '../assets/sliderimg.avif'
import sliderom from '../assets/sliderom.avif'

const Slider2 = () => {
  return (
     <div class="bodys">
            <h1 className='text-[15px] px-10 font-semibold lg:text-[25px] pt-10  '> Supported Coins and Networks</h1>
        
            <div class="cantainer">
            <div class="slide-cantainer flex px-[100px] gap-[10px]">
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderom} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderom} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderom} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderom} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderom} alt="" /> 
                </div>
                <div class="slide-image">
                   <img className='w-[90px]' src={sliderimg} alt="" /> 
                </div>
                </div>
                </div>
                </div>

  )
}

export default Slider2