import React from 'react'
import lio from '../assets/lio1.avif'
import lio2 from '../assets/lio2.avif'
import lio3 from '../assets/lio3.avif'
import {motion} from "framer-motion";


const Bacdeb = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 '>
            <motion.div
            initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
            transition={{
              type:"",
              stiffness:100,
              damping:10,
              delay:1,
            }}
            className='bg-sky-100 container  py-10'>
                <h1 className='text-[30px] font-bold lg:text-[45px]  '>Backed by the Best. <br />
                Supported by Venture Firms.</h1>
                <p className='text-md font-semibold text-gray-500 py-5' >We are proud to be backed by some of the top investors in the industry, including renowned venture firms who are leaders in product innovation.</p>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   py-4 '>
                    <img className='p-14 py-5 bg-white rounded-xl shadow-md border' src={lio} alt="" />
                    <img className='p-20 py-0 bg-white rounded-xl shadow-md border ' src={lio2} alt="" />
                    <img className='p-14 py-8 bg-white rounded-xl shadow-md border' src={lio3} alt="" />
                </div>
            </motion.div>
            <div>
                <motion.div
                initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}}
                transition={{
                  type:"",
                  stiffness:100,
                  damping:10,
                  delay:1.2,
                }}
                className='bg-sky-50 container py-10 h-[100%]'>
                    <h1 className='text-[30px] font-bold lg:text-[45px]'>Dedicated to security.  <br />
                    Committed to compliance.</h1>
                    <p className='py-5 font-semibold '>At Tylt, compliance is at the core of our operations. With licenses and registrations in multiple jurisdictions, including our VASP license in Poland, we ensure our services meet the highest regulatory standards.   </p>
                    <p className='Py-5 font-semibold '>As crypto regulations evolve, we are prepared to operate within the framework of MICA regulations across the EU and FIU reporting requirements in India.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Bacdeb