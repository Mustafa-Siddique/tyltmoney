import React, { useState } from 'react'
import logo from '../assets/logo1.webp'
import { MdArrowForwardIos } from "react-icons/md";
import {motion} from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";





const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);

  const toggleNavbar =() =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
     <div className='bg-white  h-[70px] '>
     <motion.div
      initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0} }
      transition={{
        type:"",
        stiffness:100,
        damping:10,
        delay:1.2,
      }}
     className='flex justify-between container'>
        <div className='flex gap-[60px] justify-center items-center'>
            <img className='w-[150px] ' src={logo} alt="" />
           
        <ul  className='flex flex-row gap-5 hidden md:hidden lg:flex flex-row gap-5  '>
          <li className='font-bold text-lg'><a href="">P2P EXCHANGE</a></li>
       <li className='text-gray-500 text-lg'><a href="">BUSINESS</a></li>
        <li className='text-gray-500 text-lg'  ><a href="">RESOURCES</a></li>
        
        </ul>
            </div> 
        
        <button className='text-[30px]  lg:hidden absolute right-0 ' onClick={toggleNavbar}>{isOpen ? <GoX />:<GiHamburgerMenu/> }   
        </button>
 
        <div className=' hidden  md:hidden  lg:flex  '>
            <button className='font-bold text-blue-500  py-1 px-5 flex rounded-md mt-4 items-center hover:text-black' >LOG IN <MdArrowForwardIos /></button>
        <button className='py-1 px-5 rounded-md flex items-center bg-blue-500 font-bold mt-3'>SIGN UP NOW  <MdArrowForwardIos />
        </button>
        </div>
        </motion.div>
         
    </div>
    {
      isOpen && ( 
    <div className='bg-white  h-[100vh] '>
     <motion.div
      initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0}}
      transition={{
        type:"",
        stiffness:100,
        damping:10,
        delay:0.2,
      }}
     className='flex justify-between container'>
        <div className='flex gap-[10px] '>
        <ul  className='flex flex-col mt-[20%] gap-20  w-[90vw] font-semibold   '>
          <li className='text-[25px]'><a href="">P2P EXCHANGE</a></li>
       <li className='text-[25px] flex  items-center justify-between  '><a href="">BUSINESS </a> <MdArrowForwardIos className='' /></li>
        <li className=' text-[25px] flex items-center justify-between'   ><a href=""> RESOURCES</a><MdArrowForwardIos/> </li>
        <li className='text-[25px]'><a href="">BLOG</a></li>
            <li className='text-[25px]'><a href="">REFERRAL</a></li>
            <p className='  '>Accept crypto payments effortlessly with Tylt’s simple, secure, and fast crypto payment solutions.</p>
        
        </ul>

            </div> 
            </motion.div> 
            <motion.div
            initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0}}
            transition={{
              type:"",
              stiffness:100,
              damping:10,
              delay:0.2,
            }}
            className=' flex  container   '>
              <button className='py-1 px-5 rounded-md flex items-center bg-blue-500 font-bold mt-3'>SIGN UP NOW  <MdArrowForwardIos /></button>
            <button className='font-bold text-blue-500  py-1 px-5 flex rounded-md mt-4 items-center hover:text-black' >LOG IN <MdArrowForwardIos /></button>
        
        
        </motion.div>
            </div>
    
      )
    }
    </>
   
  
  )
}

export default Navbar
