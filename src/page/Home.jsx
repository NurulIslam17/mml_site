import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breakfast from '../components/Breakfast'
import Lunch from '../components/Lunch'
import Dinner from '../components/Dinner'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Breakfast/>
        <Lunch/>
        <Dinner/>
        <Footer/>
    </>
  )
}

export default Home