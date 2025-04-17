import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProductListing from './ProductListing'
import Footer from '../components/Footer'
import SortSection from '../components/SortSection'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
    <Helmet>
        <title>Product Home </title>
        <meta name="description" content="Welcome to store. Explore top products, categories, and deals!" />
        <meta name="keywords" content=" e-commerce, shop online" />
    </Helmet>
      <Navbar/>
      <Header/>
      <SortSection/>
      <ProductListing/>
      <Footer/>
      
    </div>
  )
}

export default Home
