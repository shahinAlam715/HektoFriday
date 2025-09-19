import React, { useContext } from 'react'
import Container from './Container'
import banlef from "../assets/banlefimg.png"
import banri from "../assets/banrigimg.png"
import round1 from "../assets/round1.png"
import round2 from "../assets/round2.png"
import offer from "../assets/offer.png"
import Slider from 'react-slick'


const Banner = () => {

 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    arrows:false
  };

  let ami = useContext([])
  console.log(ami);
  

  return (
    <>
        <div className="slider-container">
        <Slider {...settings}>
        <section className='bg-[#F2F0FF] py-4 my-2 w-full'>
            <div className="">
                    <img src={banlef} alt="" />
            </div>
            <Container>
                <div className="flex justify-between mt-[-200px]">

                    <div className="w-2/4">
                        <div className="">
                            <h5 className='text-[16px] font-Lato font-medium py-2 mt-[60px] text-[#FB2E86]'>Best Furniture For Your Castle....</h5>
                            <h2 className='text-[53px] font-josefin font-bold mt-[20px] text-[#000000]'>New Furniture Collection
                                Trends in 2020</h2>
                            <p className='text-[16px] font-Lato font-bold py-2 my-[10px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                            <button className='bg-[#FB2E86] text-[#fff] mt-[20px] py-2 px-6 hover:bg-[purple]'>Shop Now</button>
                        </div>
                    </div>

                    <div className="w-2/4 mt-[-100px]">
                        <div className="relative">
                            <div className="ml-[50px] top-[-500px]">
                                <img className='h-[689px] w-[706px]' src={round1} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={round2} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={banri} alt="" />
                            </div>
                             <div className="absolute top-[-15px] left-[520px]">
                                <img className='h-[136px] w-[138px]' src={offer} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
         <section className='bg-[#F2F0FF] py-4 my-2 w-full'>
            <div className="">
                    <img src={banlef} alt="" />
            </div>
            <Container>
                <div className="flex justify-between mt-[-200px]">

                    <div className="w-2/4">
                        <div className="">
                            <h5 className='text-[16px] font-Lato font-medium py-2 mt-[60px] text-[#FB2E86]'>Best Furniture For Your Castle....</h5>
                            <h2 className='text-[53px] font-josefin font-bold mt-[20px] text-[#000000]'>New Furniture Collection
                                Trends in 2020</h2>
                            <p className='text-[16px] font-Lato font-bold py-2 my-[10px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                            <button className='bg-[#FB2E86] text-[#fff] mt-[20px] py-2 px-6 hover:bg-[purple]'>Shop Now</button>
                        </div>
                    </div>

                    <div className="w-2/4 mt-[-100px]">
                        <div className="relative">
                            <div className="ml-[50px] top-[-500px]">
                                <img className='h-[689px] w-[706px]' src={round1} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={round2} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={banri} alt="" />
                            </div>
                             <div className="absolute top-[-15px] left-[520px]">
                                <img className='h-[136px] w-[138px]' src={offer} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>

         <section className='bg-[#F2F0FF] py-4 my-2 w-full'>
            <div className="">
                    <img src={banlef} alt="" />
            </div>
            <Container>
                <div className="flex justify-between mt-[-200px]">

                    <div className="w-2/4">
                        <div className="">
                            <h5 className='text-[16px] font-Lato font-medium py-2 mt-[60px] text-[#FB2E86]'>Best Furniture For Your Castle....</h5>
                            <h2 className='text-[53px] font-josefin font-bold mt-[20px] text-[#000000]'>New Furniture Collection
                                Trends in 2020</h2>
                            <p className='text-[16px] font-Lato font-bold py-2 my-[10px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                            <button className='bg-[#FB2E86] text-[#fff] mt-[20px] py-2 px-6 hover:bg-[purple]'>Shop Now</button>
                        </div>
                    </div>

                    <div className="w-2/4 mt-[-100px]">
                        <div className="relative">
                            <div className="ml-[50px] top-[-500px]">
                                <img className='h-[689px] w-[706px]' src={round1} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={round2} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={banri} alt="" />
                            </div>
                             <div className="absolute top-[-15px] left-[520px]">
                                <img className='h-[136px] w-[138px]' src={offer} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>


         <section className='bg-[#F2F0FF] py-4 my-2 w-full'>
            <div className="">
                    <img src={banlef} alt="" />
            </div>
            <Container>
                <div className="flex justify-between mt-[-200px]">

                    <div className="w-2/4">
                        <div className="">
                            <h5 className='text-[16px] font-Lato font-medium py-2 mt-[60px] text-[#FB2E86]'>Best Furniture For Your Castle....</h5>
                            <h2 className='text-[53px] font-josefin font-bold mt-[20px] text-[#000000]'>New Furniture Collection
                                Trends in 2020</h2>
                            <p className='text-[16px] font-Lato font-bold py-2 my-[10px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                            <button className='bg-[#FB2E86] text-[#fff] mt-[20px] py-2 px-6 hover:bg-[purple]'>Shop Now</button>
                        </div>
                    </div>

                    <div className="w-2/4 mt-[-100px]">
                        <div className="relative">
                            <div className="ml-[50px] top-[-500px]">
                                <img className='h-[689px] w-[706px]' src={round1} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={round2} alt="" />
                            </div>
                            <div className="absolute top-[40px] left-[20px]">
                                <img className='h-[629px] w-[629px]' src={banri} alt="" />
                            </div>
                             <div className="absolute top-[-15px] left-[520px]">
                                <img className='h-[136px] w-[138px]' src={offer} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
        </Slider>
        </div>
    </>
  )
}

export default Banner