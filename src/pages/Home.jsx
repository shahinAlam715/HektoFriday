import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import FeauterProduct from '../Components/FeauterProduct'
import Latestproduct from '../Components/Latestproduct'
import Sopexoffer from '../Components/Sopexoffer'
import Uniqfeature from '../Components/Uniqfeature'
import Tendingproduct from '../Components/Tendingproduct'
import Discountitem from '../Components/Discountitem'
import Topcategory from '../Components/Topcategory'
import Update from '../Components/Update'
import Blog from '../Components/Blog'
import Fotter from '../Components/Fotter'
import Footerbot from '../Components/Footerbot'

const Home = () => {
  return (
   <>
    <Banner/>
    <FeauterProduct/>
    <Latestproduct/>
    <Sopexoffer/>
    <Uniqfeature/>
    <Tendingproduct/>
    <Discountitem/>
    <Topcategory/>
    <Update/>
    <Blog/>
   </>
  )
}

export default Home