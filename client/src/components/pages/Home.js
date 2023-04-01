import React from 'react'
import Banner from '../common/Banner'
import Brands from '../common/Brands'
import { NavLink } from 'react-router-dom'
import CampaignItem from '../common/Card/CampaignItem'



function Home({search}) {
  return (
    <div className='home-container text-center'>   
      <Banner/>
      <h1>Find it First on Pledge Up</h1>
      <p>Pledge up is where early adopters and innovation seekers find lively, imaginative tech before it hits the market and where we you, can express your diverse interest </p>
      <div>
        <NavLink className= 'btn btn-warning btn-lg' to='/about'>Learn More</NavLink>
      </div>
      
      <Brands/> 
    </div>
  )
}

export default Home