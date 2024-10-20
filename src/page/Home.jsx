import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breakfast from '../components/Breakfast'
import Lunch from '../components/Lunch'
import Dinner from '../components/Dinner'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Breakfast/>
        <Lunch/>
        <Dinner/>
        <Footer/>
    </>
  )
}

export default Home