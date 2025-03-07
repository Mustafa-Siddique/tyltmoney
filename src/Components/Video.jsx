import React from 'react'
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { Bs4CircleFill } from "react-icons/bs";
import { Bs5CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import videoimg from '../assets/videoimg.avif'
import { HiMiniPlayCircle } from "react-icons/hi2";
import {motion} from "framer-motion";


const Video = () => {
  return (
    <div
   
    className='container grid grid-cols-1 lg:grid-cols-2'>
        <div className='py-20 '>
            <motion.h1
            initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
            transition={{
              type:"",
              stiffness:100,
              damping:10,
              delay:0.2,
            }}
            className='text-[30px] font-semibold py-5 md:text-[45px] lg:text-[45px] '>How to <span className='text-green-500'> get started</span> with Tylt’s P2P Exchange</motion.h1>
            <motion.div
            initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
            transition={{
              type:"",
              stiffness:100,
              damping:10,
              delay:0.2,
            }}
            >
            <h1 className='flex items-center gap-6 text-lg font-semibold'><Bs1CircleFill />
            Complete Your KYC</h1>
            <p className='px-10 py-2 text-lg'>Begin by completing the KYC process to unlock access to Tylt’s P2P <br /> marketplace.</p>
            </motion.div>
            <motion.div
             initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
             transition={{
               type:"",
               stiffness:100,
               damping:10,
               delay:0.2,
             }}
            >
            <h1 className='flex items-center gap-6  text-lg font-semibold' ><Bs2CircleFill />
            Explore Offers
            </h1>
            <p className='px-10 py-2 text-lg'>Browse available offers or use filters to find the perfect trade partner.</p>
            </motion.div>
            <motion.div
             initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
             transition={{
               type:"",
               stiffness:100,
               damping:10,
               delay:0.2,
             }}
            >
                <h1 className='flex items-center gap-6  text-lg font-semibold'><Bs3CircleFill />
                Initiate Trade and Secure Escrow
                </h1>
                <p className='px-10 py-2 text-lg'>Specify the amount you want to trade, start the transaction, and Tylt’s escrow system will hold the crypto securely until obligations are met.</p>
            </motion.div>
            <motion.div
             initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
             transition={{
               type:"",
               stiffness:100,
               damping:10,
               delay:0.2,
             }} >
                 <h1 className='flex items-center gap-6  text-lg font-semibold'><Bs4CircleFill />
                Make Payment and Receive Crypto
                </h1>
                <p className='px-10 py-2 text-lg'>Follow the seller’s instructions to complete payment. Once verified, the escrow releases the crypto directly to your wallet.</p>
            </motion.div>
            <motion.div
             initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
             transition={{
               type:"",
               stiffness:100,
               damping:10,
               delay:0.2,
             }}
            >
                <h1 className='flex items-center gap-6  text-lg font-semibold'><Bs5CircleFill />
                Leave Feedback
                 </h1>
                 <p className='px-10 py-2 text-lg ' >After the trade, leave feedback for your partner to build trust and strengthen the community.</p>
            </motion.div>
        </div>
        <motion.div
         initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
         transition={{
           type:"",
           stiffness:100,
           damping:10,
           delay:0.2,
         }}
        className=' py-10 lg:py-60 container  '>
                <a href=""><img className=' cursor-pointer' src={videoimg} alt="" /></a>
            <div className='absolute top-0 left-0 right-0 buttom-0 flex justify-center items-center z-40 '> 
            </div>

        </motion.div>
    </div>
  )
}

export default Video