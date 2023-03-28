import React from 'react'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer/Footer'
import Banner from '../common/Banner'


function Home() {
  return (
    <div className='home-container'>    
      <NavBar/>
      <Banner/>
      <Footer/>
  
    </div>
  )
}

export default Home