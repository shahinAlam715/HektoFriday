import React, { useContext } from 'react'
import Container from './Container'
import topcategory from "../assets/topcate.png"
import Slider from 'react-slick'

const Topcategory = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <section className='my-[64px]'>
                <Container>
                    <div className="my-[30px]">
                         <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold text-center'>Top Categories</h2>
                    </div>
                    <div className="">
                        <Slider {...settings}>

                           
                            
                          
                           <div className="bg-[#fff] hover:bg-[#151875] h-[300px] w-[200px] rounded-full relative">
                                <div className="absolute top-0 left-[15px] h-[290px] w-full rounded-full bg-[#F6F7FB]">
                                <img src={topcategory} alt="" className='ml-[50px] mt-[50px]'/>
                                </div>
                            </div>
                            <div className="bg-[#fff] hover:bg-[#151875] h-[300px] w-[200px] rounded-full relative">
                                <div className="absolute top-0 left-[15px] h-[290px] w-full rounded-full bg-[#F6F7FB]">
                                <img src={topcategory} alt="" className='ml-[50px] mt-[50px]'/>
                                </div>
                            </div>

                            <div className="bg-[#fff] hover:bg-[#151875] h-[300px] w-[200px] rounded-full relative">
                                <div className="absolute top-0 left-[15px] h-[290px] w-full rounded-full bg-[#F6F7FB]">
                                <img src={topcategory} alt="" className='ml-[50px] mt-[50px]'/>
                                </div>
                            </div>
                            <div className="bg-[#fff] hover:bg-[#151875] h-[300px] w-[200px] rounded-full relative">
                                <div className="absolute top-0 left-[15px] h-[290px] w-full rounded-full bg-[#F6F7FB]">
                                <img src={topcategory} alt="" className='ml-[50px] mt-[50px]'/>
                                </div>
                            </div>
                         
                            <div className="bg-[#fff] hover:bg-[#151875] h-[300px] w-[200px] rounded-full relative">
                                <div className="absolute top-0 left-[15px] h-[290px] w-full rounded-full bg-[#F6F7FB]">
                                <img src={topcategory} alt="" className='ml-[50px] mt-[50px]'/>
                                </div>
                            </div>
                           


                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Topcategory