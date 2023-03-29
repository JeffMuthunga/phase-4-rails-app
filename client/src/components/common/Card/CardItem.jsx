import React from 'react'
import './Card.css'

function CardItem() {
    const truncate =(string,n)=>{
        return string?.length > n ? string.substr(0,n-1) + '...': string
      }
  return (
    <div className='cardItem'>
        <img src="https://images.unsplash.com/photo-1497322313607-9fa0c2c4c4f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=" bees" />
        <div className="campaign_title">
            For the Love of the Bees
        </div>
        <div className="campaign_description">
        {
            truncate( "Bees and other pollinators are critical to our survival. More than three quarters of all food stuffs on the planet rely on pollination, and it’s estimated that bees’ economic value is in the region of € 265 billion annually. Unfortunately the bees are dying – in Europe alone 45% of commercial honeybees have been lost since 2010.For the Love of Bees is an Auckland-based collective that aims to help redress that balance. They help people create biological pollinator sanctuaries so that bees and other pollinators have safe havens where they can thrive", 150)
        }
       </div>
       <div className="crud_buttons">
            <button className='btn btn-success btn-lg'>Delete</button>
            <button className='btn btn-success btn-lg'>More Info..</button>
       </div>
    </div>
  )
}

export default CardItem