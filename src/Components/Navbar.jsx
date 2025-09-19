import React from 'react'
import Container from './Container'
import logo from "../assets/Hekto.png"
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <section >
            <Container>
                    <div className="flex py-4 items-center">

                        <div className="w-3/4">
                        <div className="flex">
                            <div className="">
                                <img  src={logo} alt="" />
                            </div>
                            <div className="ml-[20%] mt-3">
                                <ul className='flex gap-x-6'>
                                    <Link to="/">
                                    <li className=''><a className='text-[16px] text-[#0D0E43] font-Lato 
                                    hover:text-[#FB2E86]' href="#">Home</a></li>
                                    </Link>
                                    <li><a className='text-[16px] text-[#0D0E43] font-Lato 
                                    hover:text-[#FB2E86]' href="#">Pages</a></li>
                                    <Link to="/product">
                                    <li><a className='text-[16px] text-[#0D0E43] font-Lato 
                                    hover:text-[#FB2E86]' href="#">Products</a></li>
                                    </Link>
                                    <li><a className='text-[16px] text-[#0D0E43] font-Lato 
                                    hover:text-[#FB2E86]' href="#">Blog </a></li>
                                    <li><a className='text-[16px] text-[#0D0E43] font-Lato 
                                    hover:text-[#FB2E86]' href="#">Shop</a></li>
                                    <li><a className='text-[16px] text-[#0D0E43] font-Lato 
                                    hover:text-[#FB2E86]' href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div className="w-1/4">
                            <div className="relative">
                                <input className='w-full bg-[#D9D9D9] border-1 py-2 
                                border-transparent outline-none pl-2' type="search" />
                                <div className="absolute top-0 right-0 border-1 border-transparent h-full px-2 bg-[#FB2E86] cursor-pointer pt-2">
                                    <FaSearch className='text-[20px] text-[#fff]'/>
                                </div>
                            </div>
                        </div>

                    </div>
            </Container>
        </section>
    </>
  )
}

export default Navbar