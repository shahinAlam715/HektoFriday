import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { IoGridSharp } from 'react-icons/io5'
import { FaListAlt } from 'react-icons/fa'
import Post from '../Components/Post'
import { ApiData } from '../Components/ContextApi'
import PPagination from '../Components/PPagination'

const Product = () => {

    let info = useContext(ApiData)

    let [perpage, setperpage] = useState(8)
    let [currentpage, setcurrentpage] = useState(1)
    let lastpage = perpage * currentpage
    let fastpage = lastpage - perpage
    let [ccategory, setccategory] = useState([])
    let [filtercate, setfiltercate] = useState([])
    let [ami, setami] = useState(false)
    let AmiRef = useRef()

    document.addEventListener("click", (e)=>{
        if(AmiRef.current.contains(e.target)){
            setami(!ami)
        }else{
             setami(false)
        }
        
    })

    useEffect(() => {
        setccategory([...new Set(info.map((item) => item.category))])
    }, [info])


    let allpage = info.slice(fastpage, lastpage);

    let pageNumber = []

    for (let i = 0; i < Math.ceil(info.length / perpage); i++) {

        pageNumber.push(i)

    }

    let handlefilter = (citem) => {

        let cateFilter = info.filter((item) => item.category == citem)
        setfiltercate(cateFilter);


    }

   
    let paginate = (index) => {
        setcurrentpage(index + 1)
    }

    let next = () => {
        if (currentpage < pageNumber.length) {
            setcurrentpage((state) => state + 1)
        }
    }
    let prev = () => {
        if (currentpage > 1) {
            setcurrentpage((state) => state - 1)
        }
    }

    let hanndleperpagechang = (e) => {
        setperpage(e.target.value);

    }

   


    return (
        <>
            <section>
                <div className="bg-[#F6F5FF] py-[64px]">
                    <Container>
                        <div className="">
                            <h2 className='py-2 text-[36px] text-[#101750] font-josefin font-bold'>Shop Grid Default</h2>
                            <div className="flex gap-x-3 py-2">
                                <Link to="/">
                                    <h4 className='text-[16px] text-[#101750] hover:text-[#FB2E86] font-Lato font-medium'>Home </h4>
                                </Link>
                                <h4 className='text-[16px] text-[#101750] hover:text-[#FB2E86] font-Lato font-medium'>Pages</h4>
                                <h4 className='text-[16px] text-[#101750] hover:text-[#FB2E86] font-Lato font-medium'>Shop Grid Default</h4>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="flex mt-[64px] items-center">
                        <div className="w-4/10">
                            <div className="">
                                <h2 className='text-[22px] text-[#151875] font-bold font-josefin'>Ecommerce Acceories & Fashion item </h2>
                                <p className='my-2 text-[12px] text-[#8A8FB9] font-Lato font-medium'>About 9,620 results (0.62 seconds)</p>
                            </div>
                        </div>
                        <div className="w-2/10">
                            <div className="flex gap-x-2 items-center">
                                <div className="">
                                    <h2 className='text-[16px] text-[#3F509E] font-Lato font-medium'>Per Page :</h2>
                                </div>
                                <label htmlFor="">
                                    <select onChange={hanndleperpagechang} className='border-2 border-[#3F509E] px-6 outline-none py-2' name="" id="">
                                        <option value="6">6</option>
                                        <option value="10">10</option>
                                        <option value="12">12</option>
                                        <option value="15">15</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="w-2/10">

                           

                            <div className="flex gap-x-2 items-center">
                            <div className="">
                                <h2 className='text-[16px] text-[#3F509E] font-Lato font-medium'>Sort By :</h2>
                            </div>
                            <div className="border-2 border-[#3F509E] px-6 outline-none py-2">
                                <ul>
                                    <li ref={AmiRef}>Category</li>
                                    {ami &&
                                    ccategory.map((item)=>(
                                        <li onClick={()=>handlefilter(item)}>{item}</li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                         
                        </div>
                        <div className="w-2/10">
                            <div className="flex gap-x-2 items-center">
                                <div className="">
                                    <h2 className='text-[16px] text-[#3F509E] font-Lato font-medium'>View :</h2>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <IoGridSharp className='text-[24px]' />
                                    <FaListAlt className='text-[24px]' />
                                </div>
                                <div className="">
                                    <div className="border-2 border-[#3F509E] px-8 outline-none py-2">
                                        <h2>Price</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Post allpage={allpage} filtercate={filtercate} />
                    <PPagination pageNumber={pageNumber} paginate={paginate} currentpage={currentpage} next={next} prev={prev}/>
                </Container>
            </section>
        </>
    )
}

export default Product