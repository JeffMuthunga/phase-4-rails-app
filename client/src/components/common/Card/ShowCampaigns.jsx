import React from 'react'
import { NavLink } from "react-router-dom";
import CampaignItem from './CampaignItem';

function ShowCampaigns({campaigns, filterCampaign, setCampaigns}) {

    function handleDeleteItem(deletedItem) {
        const updatedItems = campaigns.filter((campaign) => campaign.id !== deletedItem.id);
        setCampaigns(updatedItems);
      }

  return (
    <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("All")}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Global Warming/Environment")}>Global Warming/Environment</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Animals")}>Animals</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Education")}>Education</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Health")}>Health</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Musicians/Artists")}>Musicians/Artists</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Small Business")}>Small Businness</button>        </div>
        {
            campaigns.map((campaign)=>(
                <CampaignItem 
                campaign ={campaign}
                key={campaign.id}
                onDeleteItem={handleDeleteItem}/>
            ))
        }
    </>
  )
}

export default ShowCampaigns