import React from 'react'
import logo from '../assets/logo1.webp'
import { MdArrowForwardIos } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='bg-white h-[70px]'>
     <div className='flex justify-between container'>
        <div className='flex gap-[60px]'>
            <img className='w-[150px]  ' src={logo} alt="" />
           <div className=' hidden md:hidden  lg;flex gap-5 p-5 font-bold text-black   '>
            <ul ><li><a href="">P2P Exchange</a></li></ul>
            <ul><li className='text-gray-500'><a href="">BUSINESS</a></li></ul>
            <ul><li className='text-gray-500'  ><a href="">Resources</a></li></ul>
            </div> 
        </div>
        <div className=' hidden  md:hidden  lg:flex '>
            <button className='font-bold text-blue-500  py-1 px-5 flex rounded-md mt-4 items-center hover:text-black' >LOG IN <MdArrowForwardIos /></button>
        <button className='py-1 px-5 rounded-md flex items-center bg-blue-500 font-bold mt-3'>SIGN UP NOW  <MdArrowForwardIos />
        </button>
        </div>
        </div>
    </div>
  )
}

export default Navbar
