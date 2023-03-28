import React from 'react'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer/Footer'
import Banner from '../common/Banner'
import Brands from '../common/Brands'


function Home() {
  return (
    <div className='home-container'>    
      <NavBar/>
      <Banner/>
      <Brands/>
      <Footer/>
  
    </div>
  )
}

export default Home