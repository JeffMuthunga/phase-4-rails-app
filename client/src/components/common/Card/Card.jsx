import React from 'react'
import './Card.css'
import CardItem from './CardItem'

function Card() {
  return (
    <div className='campaign'>
      <span className="category">Education</span>
      <div className="wrapper">
        <div className="cardItem_container">
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
        </div>
      </div>
    </div>
  
  )
}

export default Card