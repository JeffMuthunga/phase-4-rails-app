import React from 'react'
import oldMan from '../images/old_man.jpg'
import './About.css'
import Values from './Values'

function About() {
  return (
    <div className='container' style={{ textAlign:'center'}}>
        <div className='about d-flex flex-row mb-3' style={{ backgroundColor :'green'}}>
            <div className="description d-flex flex-row align-items-center mb-3" style={{color : 'white'}}>
            Pledge Up is a movement committed to the ideals of living together in peace and serving humanity, and it works within the framework of social responsibility and philanthropy.We are here to bridge the gap between investors and entrepreneurs, with the potential to increase entrepreneurship by expanding the pool of investors beyond the traditional circle of owners, relatives, and venture capitalists.
            
            Aside from this, in the recent years we've seen many individuals affected by the pandemic, drought, hefty medical expenses, children unable to go to school and other tragic events. We hope to create a platform which will help raise funds for such ventures and to support the next big thing.   

            Our application provides a forum to anyone with an idea to pitch it in front of waiting investors; and for investors to have a wide scope of projects and charities to invest or donate to.
            </div>
            <div className="about_image">
                <img src={oldMan} alt="Old Man"/>
            </div>
        </div>
        <div>
            <Values/>
        </div>
    </div>
  )
}

export default About