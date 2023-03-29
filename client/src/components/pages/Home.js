import React from 'react'
import Banner from '../common/Banner'
import Brands from '../common/Brands'
import About from '../common/About'


function Home() {
  return (
    <div className='home-container'>   
      <Banner/>
      <Brands/> 
    </div>
  )
}

export default Home