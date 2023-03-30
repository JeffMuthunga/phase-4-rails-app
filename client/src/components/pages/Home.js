import React from 'react'
import Banner from '../common/Banner'
import Brands from '../common/Brands'


function Home({search}) {
  return (
    <div className='home-container'>   
      <Banner/>
      <Brands/> 
      {/* <Campaign search={search}/> */}
    </div>
  )
}

export default Home