import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'
import Products from '../components/Products'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <ImageCarousel></ImageCarousel>
    <Products></Products>
    <Toaster position='top-right'></Toaster>
    </>
  )
}

export default Home
