import React from 'react'
import Container from './Container'
import feauter1 from "../assets/feauter1.png"
import feauter2 from "../assets/feauter2.png"
import feauter3 from "../assets/feauter3.png"
import feauter4 from "../assets/feauter4.png"
import { FaHeart, FaSearchPlus, FaShoppingCart } from 'react-icons/fa'
import Slider from 'react-slick'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] left-[20px] translate-y-[-50%] z-[2]"
           
            onClick={onClick}
        >
           <IoArrowBack className='h-[50px] w-[30px] bg-[red] leading-50px text-center text-[#fff] rounded-full' />
            </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] right-[20px] translate-y-[-50%] z-[2] "
           
            onClick={onClick}
        >
            <IoMdArrowRoundForward  className='h-[50px] w-[30px] bg-[red] leading-50px text-center text-[#fff] rounded-full'/>
            
            </div>
    );
}

const FeauterProduct = () => {


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <>
            <section className='my-[64px]'>
                <Container>







                    <div className="">
                        <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold text-center'>Featured Products</h2>
                    </div>




                    <div className="my-[64px]">
                        <Slider {...settings}>


                            <div className="">
                                <div className="bg-[purple] mx-2 min-h-[300px]">
                                     <Link to="/product">
                                    <img className='w-full' src={feauter1} alt="" />
                                    </Link>


                                </div>

                                <div className="bg-[#80808067] hover:bg-[#2F1AC4] group w-[300px] mx-auto">
                                    <div className="">
                                        <h2 className='text-[28px] text-[#FB2E86] group-hover:text-[#fff] font-Lato
                                                 font-bold text-center py-2  mx-4'>Cantilever chair</h2>

                                        <div className="py-2 flex justify-center gap-x-2">
                                            <div className="w-[40px] h-[10px] bg-[#05E6B7] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#F701A8] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#FFEAC1] rounded-full"></div>
                                        </div>

                                        <h3 className="text-[14px] py-2 text-[#151875] font-josefin font-medium group-hover:!text-[#fff]  text-center">Code - Y523201</h3>
                                        <h4 className="text-[14px] pb-2 text-[#151875] font-Lato font-medium group-hover:!text-[#fff] text-center">$42.00</h4>


                                    </div>
                                </div>

                            </div>


                            <div className="">
                                <div className="bg-[purple] mx-2 min-h-[300px]">
                                     <Link to="/product">
                                    <img className='w-[250px] mx-auto' src={feauter2} alt="" />
                                    </Link>
                                </div>
                                <div className="bg-[#80808067] hover:bg-[#2F1AC4] group w-[300px] mx-auto">
                                    <div className="">
                                        <h2 className='text-[28px] text-[#FB2E86] group-hover:text-[#fff] font-Lato
                                                 font-bold text-center py-2  mx-4'>Cantilever chair</h2>

                                        <div className="py-2 flex justify-center gap-x-2">
                                            <div className="w-[40px] h-[10px] bg-[#05E6B7] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#F701A8] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#FFEAC1] rounded-full"></div>
                                        </div>

                                        <h3 className="text-[14px] py-2 text-[#151875] font-josefin font-medium group-hover:!text-[#fff]  text-center">Code - Y523201</h3>
                                        <h4 className="text-[14px] pb-2 text-[#151875] font-Lato font-medium group-hover:!text-[#fff] text-center">$42.00</h4>


                                    </div>
                                </div>

                            </div>



                            <div className="">
                                <div className="bg-[purple] mx-2 min-h-[300px]">
                                     <Link to="/product">
                                    <img className='w-full' src={feauter3} alt="" />
                                    </Link>


                                </div>
                                 <div className="bg-[#80808067] hover:bg-[#2F1AC4] group w-[300px] mx-auto">
                                    <div className="">
                                        <h2 className='text-[28px] text-[#FB2E86] group-hover:text-[#fff] font-Lato
                                                 font-bold text-center py-2  mx-4'>Cantilever chair</h2>

                                        <div className="py-2 flex justify-center gap-x-2">
                                            <div className="w-[40px] h-[10px] bg-[#05E6B7] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#F701A8] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#FFEAC1] rounded-full"></div>
                                        </div>

                                        <h3 className="text-[14px] py-2 text-[#151875] font-josefin font-medium group-hover:!text-[#fff]  text-center">Code - Y523201</h3>
                                        <h4 className="text-[14px] pb-2 text-[#151875] font-Lato font-medium group-hover:!text-[#fff] text-center">$42.00</h4>


                                    </div>
                                </div>

                            </div>


                            <div className="">
                                <div className="bg-[purple] mx-2 min-h-[300px]">
                                    <Link to="/product">
                                    <img className='w-full mx-auto pt-10' src={feauter4} alt="" />
                                    </Link>
                                    


                                </div>
                                 <div className="bg-[#80808067] hover:bg-[#2F1AC4] group w-[300px] mx-auto">
                                    <div className="">
                                        <h2 className='text-[28px] text-[#FB2E86] group-hover:text-[#fff] font-Lato
                                                 font-bold text-center py-2  mx-4'>Cantilever chair</h2>

                                        <div className="py-2 flex justify-center gap-x-2">
                                            <div className="w-[40px] h-[10px] bg-[#05E6B7] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#F701A8] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#FFEAC1] rounded-full"></div>
                                        </div>

                                        <h3 className="text-[14px] py-2 text-[#151875] font-josefin font-medium group-hover:!text-[#fff]  text-center">Code - Y523201</h3>
                                        <h4 className="text-[14px] pb-2 text-[#151875] font-Lato font-medium group-hover:!text-[#fff] text-center">$42.00</h4>


                                    </div>
                                </div>

                            </div>

                            <div className="">
                                <div className="bg-[purple] mx-2 min-h-[300px]">
                                    <Link to="/product">
                                    <img className='w-[250px] mx-auto' src={feauter2} alt="" />
                                    </Link>
                                </div>
                                <div className="bg-[#80808067] hover:bg-[#2F1AC4] group w-[300px] mx-auto">
                                    <div className="">
                                        <h2 className='text-[28px] text-[#FB2E86] group-hover:text-[#fff] font-Lato
                                                 font-bold text-center py-2  mx-4'>Cantilever chair</h2>

                                        <div className="py-2 flex justify-center gap-x-2">
                                            <div className="w-[40px] h-[10px] bg-[#05E6B7] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#F701A8] rounded-full"></div>
                                            <div className="w-[40px] h-[10px] bg-[#FFEAC1] rounded-full"></div>
                                        </div>

                                        <h3 className="text-[14px] py-2 text-[#151875] font-josefin font-medium group-hover:!text-[#fff]  text-center">Code - Y523201</h3>
                                        <h4 className="text-[14px] pb-2 text-[#151875] font-Lato font-medium group-hover:!text-[#fff] text-center">$42.00</h4>


                                    </div>
                                </div>

                            </div>
                        </Slider>
                    </div>


                </Container>
            </section>
        </>
    )
}

export default FeauterProduct