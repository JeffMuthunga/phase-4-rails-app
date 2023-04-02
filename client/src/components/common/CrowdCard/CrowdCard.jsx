import React, {useState} from 'react'
import './CrowdCard.css'
import Lottie from 'react-lottie';
import animationData from './58070-fallen-tree-and-wind.json';
import { useNavigate } from 'react-router-dom';


function CrowdCard({campaign}) {
  const navigate = useNavigate();

  const handleClick = (campaign) => {
    
      navigate(`/campaigns/${campaign.id}`)
    
  }

return (
  <div className="card">
  <div className="ilustration">
  <img src={campaign.image_url} alt="Campaign Image" />
   
  </div>
  <h3>{campaign.title}</h3>
  <Lottie className="lottie-player"
      options={{
        animationData,
        background: 'white',
        loop: true,
        autoplay: true,
      }}
      width={200}
      height={200}
    />
  <p>
    {campaign.description}
  </p>
  
  
    <button onClick={()=>handleClick(campaign)}>View more</button>
    
</div>
);
}


export default CrowdCard