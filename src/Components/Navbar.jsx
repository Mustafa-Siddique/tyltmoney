import React from 'react'
import logo from '../assets/logo1.webp'
import { MdArrowForwardIos } from "react-icons/md";
import {motion} from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  return (
    <div className='bg-white h-[70px]'>
     <motion.div
      initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:1.2,
      }}
     className='flex justify-between container'>
        <div className='flex gap-[60px]'>
            <img className='w-[150px] ' src={logo} alt="" />
           <div className=' hidden  md:hidden  lg:flex gap-5 p-5 font-bold text-black   '>
            <ul ><li><a href="">P2P Exchange</a></li></ul>
            <ul><li className='text-gray-500'><a href="">BUSINESS</a></li></ul>
            <ul><li className='text-gray-500'  ><a href="">Resources</a></li></ul>
            </div> 
        </div>
        <div className='text-[30px] lg:hidden absolute right-0'><GiHamburgerMenu />
        </div>
        <div className='fixed  w-[100%] h-[100vh] bg-green-200 top-[50px] left-0 items-center lg:hidden'>
        <ul className='flex flex-col py-10 px-8 ' >
          <li className=''><a href="">P2P EXCHANGE</a></li>
            <li className='py-5'><a href="">BUSINESS</a></li>
            <li   ><a href="">RESOURCES</a></li>
            <li className='py-4'><a href="">BLOG</a></li>
            <li><a href="">REFERRAL</a></li>
            </ul>
        </div>

        {/* <ul ><li><a href="">P2P Exchange</a></li></ul>
            <ul><li className='text-gray-500'><a href="">BUSINESS</a></li></ul>
            <ul><li className='text-gray-500'  ><a href="">Resources</a></li></ul> */}
        <div className=' hidden  md:hidden  lg:flex '>
            <button className='font-bold text-blue-500  py-1 px-5 flex rounded-md mt-4 items-center hover:text-black' >LOG IN <MdArrowForwardIos /></button>
        <button className='py-1 px-5 rounded-md flex items-center bg-blue-500 font-bold mt-3'>SIGN UP NOW  <MdArrowForwardIos />
        </button>
        </div>
        </motion.div>
    </div>
  )
}

export default Navbar
