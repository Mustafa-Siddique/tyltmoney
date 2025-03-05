import React from 'react'
import logo from '../assets/logo1.webp'

const Navbar = () => {
  return (
    <div className='bg-white h-[70px]'>
     <div className='flex justify-between container'>
        <div className='flex gap-[60px]'>
            <img className='w-[80px] ' src={logo} alt="" />
           <div className='flex gap-5 p-5'><ul><li><a href="">P2P Exchange</a></li></ul>
            <ul><li><a href="">BUSINESS</a></li></ul>
            <ul><li><a href="">Resources</a></li></ul></div> 
        </div>
        <div className=' flex gap-[30px]'>
            <button>LOG IN</button>
        <button>SIGN UP NOW</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar
