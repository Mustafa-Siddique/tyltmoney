import React from 'react'
import logo from '../assets/logo1.webp'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import footerlogo from '../assets/footerlogo.avif'

const Footer = () => {
  return (
    <div className='mt-[80vh] bg-black lg:mt-[89vh] md:mt-[70vh]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-20 container   '>
            <div className='text-white   flex flex-col gap-8 w-[42%]  '>
                
                    <img className='w-[150px]' src={logo} alt="" />
                <p>Send and receive crypto payments effortlessly from anyone, anywhere in the world—with Tylt.</p>
                <div className='flex gap-3 lg:gap-8'>
                <FaLinkedin className='text-[30px] ' />
                <FaInstagram className='text-[30px]' />
                <FaYoutube className='text-[30px]' />
                <FaFacebook className='text-[30px]' />
                </div>
                <div>
                    <button className=' border-solid border-2  shadow-lg '>
                        Review us on 
                       <h1 className='w-[130px] p-2'>
                        <img src={footerlogo} alt="" /></h1> 

                    </button>
                </div>
            </div>
                <div className='grid grid-cols-2 py-10 lg:grid-cols-4  md:grid-cols-3 text-white    '>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Solutions</h1>
                        <a href="">P2P Exchange</a>
                        <a href="">Business</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-sky-500 font-bold'>Company</h1>
                        <a href="">Pricing</a>
                        <a href="">About us</a> 
                        <a href="">Roadmap</a> 
                        <a href="">Referral Program</a> 
                        <a href="">Media Kit</a> 
                        <a href="">Licenses</a> 
                        <a href="">Building Trust</a>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Solutions</h1>
                        <a href="">P2P Exchange</a>
                        <a href="">Business</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-sky-500 font-bold'>Company</h1>
                        <a href="">Pricing</a>
                        <a href="">About us</a> 
                        <a href="">Roadmap</a> 
                        <a href="">Referral Program</a> 
                        <a href="">Media Kit</a> 
                        <a href="">Licenses</a> 
                        <a href="">Building Trust</a>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Solutions</h1>
                        <a href="">P2P Exchange</a>
                        <a href="">Business</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-sky-500 font-bold'>Company</h1>
                        <a href="">Pricing</a>
                        <a href="">About us</a> 
                        <a href="">Roadmap</a> 
                        <a href="">Referral Program</a> 
                        <a href="">Media Kit</a> 
                        <a href="">Licenses</a> 
                        <a href="">Building Trust</a>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Resources</h1>
                        <a href="">Blog</a>
                        <a href="">News</a>
                        <a href="">Glossary</a>
                        <a href="">Video Guides</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sky-500 font-bold'>Support </h1>
                        <a href="">Contact Us</a>
                        <a href="">Support </a>
                        <a href="">Centre</a>
                    </div>
                   
                </div>
               
               
                </div>
            
        </div>
    </div>
  )
}

export default Footer