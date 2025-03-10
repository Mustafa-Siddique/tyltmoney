import React from 'react'
import logo2 from '../assets/logo2.avif'
import logo3 from '../assets/logo3.avif'
import logo4 from '../assets/logo4.avif'
import { BsBank2 } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import { div } from 'framer-motion/client';
import './Slider.css'

const Slider = () => {
  return (
    <div class="body">
        <h1 className='text-[15px] px-10 font-semibold lg:text-[25px] pt-10  '>Supported Payment Methods</h1>
    
        <div class="cantainer  ">
        <div class="slide-cantainer flex px-[100px] gap-[10px]">
            <div class="slide-image " className=''>
               <img className='w-[90px]' src={logo2} alt="" /> 
            </div>
            <div class="slide-image">
                <img className='w-[90px]' src={logo3} alt="" />
            </div>
            <div class="slide-image">
                <img className='w-[90px]' src={logo4} alt="" />
            </div>
            <div class="slide-image">
                <BsBank2 className='text-[60px]'  />
            </div>
            <div class="slide-image" >
                <MdPhoneAndroid className='text-[60px]'/>
                {/* <p>Payment App</p> */}
            </div>
            <div class="slide-image">
               <img className='w-[90px]' src={logo2} alt="" /> 
            </div>
            <div class="slide-image">
                <img className='w-[90px]' src={logo3} alt="" />
            </div>
            <div class="slide-image">
                <img className='w-[90px]' src={logo4} alt="" />
            </div>
            <div class="slide-image">
                <BsBank2 className='text-[60px]'  />
            </div>
            <div class="slide-image">
                <MdPhoneAndroid className='text-[60px]'/>
                {/* <p>Payment App</p> */}
            </div>  
            <div class="slide-image">
                <img className='w-[90px]' src={logo2} alt="" />
            </div>
            <div class="slide-image">
                <img className='w-[90px]' src={logo3} alt="" />
            </div>
            <div class="slide-image">
                <img className='w-[90px] ' src={logo4} alt="" />
            </div>
            <div class="slide-image">
            <BsBank2 className='text-[60px] '  />
            </div>
            <div class="slide-image">
            <MdPhoneAndroid className='text-[60px]'/>
            {/* <p>Payment App</p> */}
            </div>
            
        </div>
    </div>

    </div>
    
    
  )
}

export default Slider