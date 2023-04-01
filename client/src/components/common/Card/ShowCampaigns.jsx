import React from 'react'
import { NavLink } from "react-router-dom";
import CrowdCard from '../CrowdCard/CrowdCard';
import CampaignItem from './CampaignItem';
import './ShowCampaigns.css'

function ShowCampaigns({campaigns, filterCampaign, setCampaigns}) {

    function handleDeleteItem(deletedItem) {
        const updatedItems = campaigns.filter((campaign) => campaign.id !== deletedItem.id);
        setCampaigns(updatedItems);
      }

  return (
    <>
        <div className="buttons d-flex justify-content-center mb-2 pb-3">
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("All")}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Global Warming/Environment")}>Global Warming/Environment</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Animals")}>Animals</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Education")}>Education</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Health")}>Health</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Musicians/Artists")}>Musicians/Artists</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Small Business")}>Small Businness</button>        
            </div>
            <div className='cards-container'>
        {
            campaigns.map((campaign)=>(
                // <CampaignItem 
                // campaign ={campaign}
                // key={campaign.id}
                // onDeleteItem={handleDeleteItem}/>

                 <CrowdCard campaign={campaign} key={campaign.id} onDeleteItem={handleDeleteItem}/>
            ))
        }
        </div>
    </>
  )
}

export default ShowCampaigns