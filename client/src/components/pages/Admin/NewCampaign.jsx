import React, { useState } from "react";
import Swal from 'sweetalert2'
import styled from "styled-components";
import Error from "../../common/Error/Error";

export default function NewCampaign(){
// used styled components to avoid merge conflicts


// function handleDeleteItem(deletedItem) {
//   const updatedItems = campaigns.filter((campaign) => campaign.id !== deletedItem.id);
//   setCampaigns(updatedItems);
// }

const initialState = {
  title:"",
  description:"",
  category: "",
  current_amount:"",
  goal_amount:"",
  image_url:"",
  start_date:"",
  end_date:""
} 
const [formData, setFormData] = useState(initialState)
const [errors, setErrors] = useState([])

function handleChange(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}

// function handleChange(e){
//   const { name, value } = e.target;
//   setFormData(prevState => ({
//     ...prevState,
//     [name]: name === "category" ? value : value.trim()
//   }));
// }


function handleSubmit(e){
    e.preventDefault();
    fetch("/campaigns",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    )
    .then(r=>{
      if (r.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Added successfully',
          icon: 'success',
          confirmButtonText: 'Exit',
          confirmButtonColor:"green"
        })
      }
      else {
        r.json().then(err=>setErrors(err.errors))
      }
    })

    
}


  return (
    <>
     <div className="admin-form">
        <div className="form-div">
            <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Title</label>
            <input type="text"  name="title" onChange={handleChange} placeholder="New Title" value={formData.title}/> 

            <label htmlFor="fname">Description</label>
            <input type="text"  name="description" placeholder="Story..." value={formData.description} onChange={handleChange}/> 

            <label htmlFor="fname">Category</label>
            <select onChange={handleChange} name="category" value={formData.Category}>
            <option value="Environment">Environment</option>
            <option value="Animals">Animals</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Artists">Artists</option>
            <option value="Business">Business</option>
            </select>
            
            {/* <input type="text"  name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>  */}

            <label htmlFor="fname">Current Amount</label>
            <input type="number"  name="current_amount" placeholder="Current Amount" value={formData.current_amount} onChange={handleChange}/> 

            <label htmlFor="fname">Goal Amount</label>
            <input type="number" name="goal_amount" placeholder="Price" value={formData.goal_amount} onChange={handleChange}/>    

            <label htmlFor="fname">Image URL</label>
            <input type="url"  name="image_url" placeholder="Image URL" value={formData.image_url} onChange={handleChange}/> 

            <label htmlFor="fname">Start Date</label>
            <input type="date"  name="start_date" placeholder="" value={formData.start_date} onChange={handleChange}/> 

            <label htmlFor="fname">End Date</label>
            <input type="date"  name="end_date" placeholder="01/01/2023" value={formData.end_date} onChange={handleChange}/> 
            
            {errors.map((element, index)=><Error key={index}>{element}</Error>)}
            <input type="submit"  value="Add New Campaign"/>
            </form>
        </div>
        </div>
    </>
  );
};
