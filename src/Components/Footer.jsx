import React from 'react'
import logo from '../assets/logo1.webp'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";






const Footer = () => {
  return (
    <div className='mt-[80vh] bg-black'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='text-white'>
                <img className='w-[150px]' src={logo} alt="" />
                <p>Send and receive crypto payments effortlessly from anyone, anywhere in the world—with Tylt.</p>
                <div className='flex gap-6'>
                <FaLinkedin />
                <FaInstagram />
                <FaYoutube />
                <FaFacebook />
                </div>
                <div>
                    <button>
                        Review us on 
                       <h1 className='flex items-center'><FaRegStar className='-green-500' />Truslpilot</h1> 

                    </button>
                </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 text-white '>
                <div>
                    <div>
                        <h1>Solutions</h1>
                        <a href="">P2P Exchange</a><br />
                        <a href="">Business</a>
                    </div>
                    <div>
                        <h1>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div>
                        <h1>Company</h1>
                        <a href="">Pricing</a> <br />
                        <a href="">About us</a> <br />
                        <a href="">Roadmap</a> <br />
                        <a href="">Referral Program</a> <br />
                        <a href="">Media Kit</a> <br />
                        <a href="">Licenses</a> <br />
                        <a href="">Building Trust</a>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Solutions</h1>
                        <a href="">P2P Exchange</a><br />
                        <a href="">Business</a>
                    </div>
                    <div>
                        <h1>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div>
                        <h1>Company</h1>
                        <a href="">Pricing</a> <br />
                        <a href="">About us</a> <br />
                        <a href="">Roadmap</a> <br />
                        <a href="">Referral Program</a> <br />
                        <a href="">Media Kit</a> <br />
                        <a href="">Licenses</a> <br />
                        <a href="">Building Trust</a>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Solutions</h1>
                        <a href="">P2P Exchange</a><br />
                        <a href="">Business</a>
                    </div>
                    <div>
                        <h1>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div>
                        <h1>Company</h1>
                        <a href="">Pricing</a> <br />
                        <a href="">About us</a> <br />
                        <a href="">Roadmap</a> <br />
                        <a href="">Referral Program</a> <br />
                        <a href="">Media Kit</a> <br />
                        <a href="">Licenses</a> <br />
                        <a href="">Building Trust</a>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Solutions</h1>
                        <a href="">P2P Exchange</a><br />
                        <a href="">Business</a>
                    </div>
                    <div>
                        <h1>Free Tools</h1>
                        <a href="">Referral Calculator</a>
                    </div>
                    <div>
                        <h1>Company</h1>
                        <a href="">Pricing</a> <br />
                        <a href="">About us</a> <br />
                        <a href="">Roadmap</a> <br />
                        <a href="">Referral Program</a> <br />
                        <a href="">Media Kit</a> <br />
                        <a href="">Licenses</a> <br />
                        <a href="">Building Trust</a>
                    </div>
                </div>
                </div>
            
        </div>
    </div>
  )
}

export default Footer