import React from 'react'
import logo2 from '../assets/logo2.avif'
import logo3 from '../assets/logo3.avif'
import logo4 from '../assets/logo4.avif'
import { BsBank2 } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";



const Payment = () => {
  return (
    <div className='bg-green-200  top-[-110px]'>
    <div className='bg-green-200  h-[30vh]  z-40 container '>
        <div className='justify-center flex pt-10 font-semibold text-[28px]'><h1>Supported Payment Methods</h1></div>
        <div>
            <div className='flex container gap-[80px] pt-[90px] '>
                <span><img className='w-[60px]' src={logo2} alt="" />  </span>
                <span><img className='w-[60px]' src={logo3} alt="" /></span>
                <span><img className='w-[90px]' src={logo4} alt="" /></span>
                <span className='text-[40px]'><BsBank2  /></span>
                <MdPhoneAndroid className='text-[40px]'/>
                <span><img className='w-[60px]' src={logo2} alt="" />  </span>
                <span><img className='w-[60px]' src={logo3} alt="" /></span>
                <span><img className='w-[90px]' src={logo4} alt="" /></span>
                <span className='text-[40px]'><BsBank2  /></span>
                <MdPhoneAndroid className='text-[40px]'/>



            </div>
        </div>
    </div>
    </div>
  )
}

export default Payment