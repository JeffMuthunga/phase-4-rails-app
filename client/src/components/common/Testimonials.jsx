import React from 'react'

function Testimonials() {
  return (
    <div className='testimonials'>
        <h1>Testimonials</h1>
        <hr styles={{color: 'black'}}/>
        <p>Campaigns that reached their goals</p>
        <div className="cases">
            <p>Run for Reading is a crowdfunding campaign for the Team First Book chapter in New Hanover County, North Carolina. The campaign was able to raise enough money to provide new books to children and schools in lower income neighborhoods.</p>
            <img src="https://images.pexels.com/photos/14071907/pexels-photo-14071907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kids holding books"/>
        </div>
        <div className="cases">            
            <img src="https://images.pexels.com/photos/663573/pexels-photo-663573.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cute dog" />
            <p>The Dos Velas Images Saving Lives 1 Click at a Time crowdfunding campaign was created by Kelly Vela, a professional photographer who takes pictures of animals in shelters for free. The pictures she takes give animals a better chance at getting adopted.</p>
        </div>
    </div>
  )
}

export default Testimonials