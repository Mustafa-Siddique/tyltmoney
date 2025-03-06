import React from 'react'
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { Bs4CircleFill } from "react-icons/bs";
import { Bs5CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import videoimg from '../assets/videoimg.avif'
import { HiMiniPlayCircle } from "react-icons/hi2";






const Video = () => {
  return (
    <div className='container grid grid-cols-1 lg:grid-cols-2'>
        <div className='py-20 '>
            <h1 className='text-[45px] font-semibold '>How to <span className='text-green-500'> get started</span> with Tylt’s P2P Exchange</h1>
            <div>
            <h1 className='flex items-center gap-6 text-lg font-semibold'><Bs1CircleFill />
            Complete Your KYC</h1>
            <p className='px-10 py-2 text-lg'>Begin by completing the KYC process to unlock access to Tylt’s P2P <br /> marketplace.</p>
            </div>
            <div>
            <h1 className='flex items-center gap-6  text-lg font-semibold' ><Bs2CircleFill />
            Explore Offers
            </h1>
            <p className='px-10 py-2 text-lg'>Browse available offers or use filters to find the perfect trade partner.</p>
            </div>
            <div>
                <h1 className='flex items-center gap-6  text-lg font-semibold'><Bs3CircleFill />
                Initiate Trade and Secure Escrow
                </h1>
                <p className='px-10 py-2 text-lg'>Specify the amount you want to trade, start the transaction, and Tylt’s escrow system will hold the crypto securely until obligations are met.</p>
            </div>
            <div>
                <h1 className='flex items-center gap-6  text-lg font-semibold'><Bs4CircleFill />
                Make Payment and Receive Crypto
                </h1>
                <p className='px-10 py-2 text-lg'>Follow the seller’s instructions to complete payment. Once verified, the escrow releases the crypto directly to your wallet.</p>
            </div>
            <div>
                <h1 className='flex items-center gap-6  text-lg font-semibold'><Bs5CircleFill />
                Leave Feedback
                 </h1>
                 <p className='px-10 py-2 text-lg ' >After the trade, leave feedback for your partner to build trust and strengthen the community.</p>
            </div>
        </div>
        <div className=' py-10 lg:py-60 container  '>
                <a href=""><img className=' cursor-pointer' src={videoimg} alt="" /></a>
            <div className='absolute top-0 left-0 right-0 buttom-0 flex justify-center items-center z-40 '> 
            </div>

        </div>
    </div>
  )
}

export default Video