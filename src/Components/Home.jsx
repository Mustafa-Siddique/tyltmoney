import React from 'react'
import rightimg from '../assets/rightimg.avif'
import { MdArrowForwardIos } from "react-icons/md";
import background from '../assets/background.avif'
import {motion} from "framer-motion";


const Home = () => {
  return (
    <div className='bg-[url("https://framerusercontent.com/images/u2krKFZQ2tG3JDbhB3FH5A6fgs.png?scale-down-to=2048")]'>
        
        <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  container  pt-[10%]  '>
            <div className=' '>
              <motion.button
              initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}}
              transition={{
                type:"",
                stiffness:100,
                damping:10,
                delay:1.2,
              }}
              
              className='bg-gray-400 p-3  rounded-md'>P2P EXCHANGE</motion.button>
                <motion.h1 initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}}
                transition={{
                  type:"",
                  stiffness:100,
                  damping:10,
                  delay:1.2,
                }}
                className='  text-[35px] font-semibold md:text-[40px] lg:text-[70px] '> <span className='text-green-600'>Buy and sell crypto</span> <br /> instantly with Tylt’s  P2P Exchange</motion.h1>
                <motion.p 
                initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}}
                transition={{
                  type:"",
                  stiffness:100,
                  damping:10,
                  delay:1.2,
                }}
                className='font-semibold text-[15px] md:text-[20px] lg:text-[25px]' >Tylt’s P2P exchange allows you to buy and sell crypto securely,
                     with low fees and multiple payment methods. Trade directly with users
                      worldwide and enjoy fast settlements on a platform built for your convenience.
                      </motion.p>
                      <motion.button 
                      initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}}
                      transition={{
                        type:"",
                        stiffness:100,
                        damping:10,
                        delay:1.2,
                      }}
                      className='mt-[30px] flex items-center bg-blue-500 p-3 rounded-md font-semibold'>TRADE NOW <MdArrowForwardIos /></motion.button>
            </div>
            <div >
                < motion.img 
                initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}}
                transition={{
                  type:"one time",
                  stiffness:100,
                  damping:10,
                  delay:1.5,
                }}
                className='h-[90%]  mt-[10%] mr-[10px] z-0 ' src={rightimg} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Home