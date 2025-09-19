import React, { useContext } from 'react'
import Container from './Container'
import { CgMail } from 'react-icons/cg'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { CiUser } from 'react-icons/ci'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'
import { ApiData } from './ContextApi'

const Header = () => { 
    return (
        <>
            <section className='bg-[#7E33E0] xl:py-4 lg:py-4'>
                <Container>

                    <div className="xl:flex lg:flex">

                        <div className="xl:w-2/4 lg:w-2/4 sm:w-full">
                            <div className="xl:flex xl:items-center lg:items-center flex-wrap sm:flex xl:justify-start sm:py-2 xl:py-0 lg:justify-start sm:justify-between">
                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <CgMail className='h-[20px] w-[20px] text-[#F1F1F1]' />
                                    <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>mhhasanul@gmail.com</h2>
                                </div>

                                <div className="flex items-center gap-x-2 cursor-pointer xl:ml-[20%] lg:ml-[10%]">
                                    <MdOutlinePhoneInTalk className='h-[20px] w-[20px] text-[#F1F1F1]' />
                                    <h2 className='text-[16px] text-[#F1F1F1] font-josefin' >(12345)67890</h2>
                                </div>
                            </div>
                        </div>

                        <div className="xl:w-2/4 lg:w-2/4 sm:w-full">
                            <div className="xl:flex xl:justify-end gap-x-6 flex-wrap sm:flex sm:justify-center lg:py-0 sm:py-2">
                                <div className="flex items-center gap-x-1 cursor-pointer">
                                    <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>English</h2>
                                    <IoIosArrowDown className='h-[16px] w-[16px] text-[#F1F1F1]' />
                                </div>

                                <div className="flex items-center gap-x-1 cursor-pointer">
                                    <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>USD</h2>
                                    <IoIosArrowDown className='h-[16px] w-[16px] text-[#F1F1F1]' />
                                </div>

                                <div className="flex items-center gap-x-1 cursor-pointer">
                                    <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>Login</h2>
                                    <FaUser className='h-[15px] w-[20px] text-[#F1F1F1]' />
                                </div>

                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>Wishlist</h2>
                                    <FaHeart className='h-[16px] w-[16px] text-[#F1F1F1]' />
                                </div>

                                <div className="">
                                    <FaShoppingCart className='h-[24px] w-[24px] text-[#F1F1F1] cursor-pointer' />
                                </div>

                            </div>
                        </div>

                    </div>





                    {/* <div className="xl:flex lg:flex xl:px-4 lg:flex-wrap lg:w-full">

                    <div className="xl:w-2/4 lg:w-2/4 flex xl:gap-x-6 lg:gap-x-2 items-center sm:w-full sm:px-2 sm:py-2">

                        <div className="flex items-center gap-x-2 cursor-pointer">
                            <CgMail className='h-[20px] w-[20px] text-[#F1F1F1]'/>
                            <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>mhhasanul@gmail.com</h2>
                        </div>

                         <div className="flex items-center gap-x-2 cursor-pointer xl:pl-[0] lg:pl-0 sm:pl-[22%] md:pl-[32%]">
                            <MdOutlinePhoneInTalk className='h-[20px] w-[20px] text-[#F1F1F1]'/>
                            <h2 className='text-[16px] text-[#F1F1F1] font-josefin' >(12345)67890</h2>
                        </div>

                    </div>


                    <div className="xl:w-2/4 lg:w-2/4  flex items-center gap-x-6 lg:ml-[-50%] sm:py-2 sm:pl-[10%] md:pl-[15%]">

                        <div className="flex items-center gap-x-1 cursor-pointer">
                            <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>English</h2>
                            <IoIosArrowDown className='h-[16px] w-[16px] text-[#F1F1F1]'/>
                        </div>

                        <div className="flex items-center gap-x-1 cursor-pointer">
                            <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>USD</h2>
                            <IoIosArrowDown className='h-[16px] w-[16px] text-[#F1F1F1]'/>
                        </div>

                        <div className="flex items-center gap-x-1 cursor-pointer">
                            <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>Login</h2>
                            <FaUser className='h-[15px] w-[20px] text-[#F1F1F1]'/>
                        </div>

                        <div className="flex items-center gap-x-1 cursor-pointer">
                            <h2 className='text-[16px] text-[#F1F1F1] font-josefin'>Wishlist</h2>
                            <FaHeart className='h-[16px] w-[16px] text-[#F1F1F1]'/>
                        </div>

                        <div className="">
                                <FaShoppingCart className='h-[24px] w-[24px] text-[#F1F1F1] cursor-pointer'/>
                        </div>

                    </div>

                </div> */}
                </Container>
            </section>
        </>
    )
}

export default Header