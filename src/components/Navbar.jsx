import {useState} from 'react'
import { motion } from "motion/react"
import { div, p } from 'motion/react-client'
export default function Navbar(){
        
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return(
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20
 font-primary px-10 py-7 flex items-center justify-between">
            <div>
                <motion.h1
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                href="#" className="duration-300 hover:scale-110 transition cursor-pointer font-semibold text-3xl">
                    PlayEX
                </motion.h1>
            </div>
            <ul className="hidden font-bold md:flex px-5 py-3 gap-10  rounded-lg">
                <li>
                    <a href="#" className="hover:text-white duration-500 flex transition ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">Home</a>
                </li>
                <li>
                    <a href="#" 
                    onMouseLeave={() => setIsServicesOpen(false)} 
                    onMouseEnter={() => setIsServicesOpen(true)} 
                    className="relative hover:text-white flex items-center gap-1 transition duration-500 ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">
                        Services
                        <i className="bx bx-down-arrow"></i>
                        <span className='absolute left-0 w-full top-13 opacity-0'>a</span>
                            {isServicesOpen && (
                                <motion.div 
                                initial={{ transform: "translateY(-50px)"}}
                                animate={{ transform: "translateY(0px)"}}
                                transition={{type: "spring"}}
                                className='cursor-default bg-white/20 absolute w-full flex left-0 justify-center top-15 rounded-md'>
                                    <ul className='text-white w-full text-center flex flex-col gap-5 p-4'>
                                        <li className='rounded-md transition-all duration-500 cursor-pointer bg-white/30 hover:bg-white/10'>
                                            a
                                        </li>
                                        <li className='rounded-md transition-all duration-500 cursor-pointer bg-white/30 hover:bg-white/10'>
                                            a
                                        </li>
                                        <li className='rounded-md transition-all duration-500 cursor-pointer bg-white/30 hover:bg-white/10'>
                                            a
                                        </li>
                                        <li className='rounded-md transition-all duration-500 cursor-pointer bg-white/30 hover:bg-white/10'>
                                            a
                                        </li>
                                    </ul>
                                </motion.div>      
                            )}
                    </a>
                    
                </li>
                <li>
                    <a href="#" className="hover:text-white flex transition duration-500 ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-white flex transition duration-500 ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">Pricing</a>
                </li>
            </ul>

            <div className="hidden lg:flex">
                <button className="cursor-pointer text-3xl py-2 px-5 rounded-2xl hover:text-white duration-500 hover:bg-white/20 hover:border-white/20 border border-transparent">
                    Sign In
                </button>
            </div>
            <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden flex">
                <i className="bx bx-menu text-2xl"></i>
            </div>
        
            {isMobileMenuOpen && (
                <motion.div className='md:hidden absolute left-0 top-23 w-full bg-white/20'>
                    <ul className='flex flex-col text-center'>
                        <li className='p-2 hover:bg-white/20 w-full'>
                            Home
                        </li>
                        <li className='p-2 hover:bg-white/20 w-full'>
                            Services
                        </li>
                        <li className='p-2 hover:bg-white/20 w-full'>
                            About
                        </li>
                        <li className='p-2 hover:bg-white/20 w-full'>
                            Pricing
                        </li>
                        <li className='p-2 hover:bg-white/20 w-full'>Sign In</li>
                    </ul>    
                </motion.div>
            )}

        </div>
    )
}