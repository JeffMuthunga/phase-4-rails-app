import React from "react";
import Swal from 'sweetalert2'
import styled from "styled-components";

export default function NewCampaign(){
// used styled components to avoid merge conflicts
const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin: 0 46%;
  margin-top: -56%;
  padding: 3rem;
  background-color: rgb(231, 231, 231);
  border-radius: 8px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
`;
const FormLabel = styled.label`
  display: block;
  color: green;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  line-height: 1.5;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }
`;
const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }
`;
const SubmitButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: rgb(1, 45, 1);
  }
`;

// function handleDeleteItem(deletedItem) {
//   const updatedItems = campaigns.filter((campaign) => campaign.id !== deletedItem.id);
//   setCampaigns(updatedItems);
// }

function handleSubmit(e){
    // prevent reloading 
    e.preventDefault();

    const formData={
        title:e.target.title.value,
        description:e.target.description.value,
        category:e.target.category.value,
        current_amount:e.target.current_amount.value,
        goal_amount:e.target.goal_amount.value,
        image_url:e.target.image_url.value,
        start_date:e.target.start_date.value,
        end_date:e.target.end_date.value
    };
    fetch("http://localhost:3000/campaigns",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    )
    .then(response=>response.json())
    .then(data=>data)
    // reset input information
    e.target.reset()

    Swal.fire({
        title: 'Success',
        text: 'Added successfully',
        icon: 'success',
        confirmButtonText: 'Exit',
        confirmButtonColor:"green"
      })
}

  return (
    <>
    <div className="campaign-image">
      <img src="https://www.shutterstock.com/image-vector/vector-illustration-flat-style-business-260nw-1371521327.jpg"
       alt="vector_illustration" />
    </div>
    <div className="form-div">
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Title:</FormLabel>
        <FormInput
          id="name"
          type="text"
          name="title"
          required
        />
        <FormLabel htmlFor="description">Description:</FormLabel>
        <FormTextarea
          id='description'
          rows="6"
          name="description"
          required
        />
        <FormLabel htmlFor="category">Category:</FormLabel>
        <FormInput
          id="category"
          type="text"
          name="category"
          required
        />
        <FormLabel htmlFor="current_amount">Current amount:</FormLabel>
        <FormInput
          id="current_amount"
          type="number"
          name="current_amount"
          required
        />
         <FormLabel htmlFor="goal_amount">Goal amount:</FormLabel>
        <FormInput
          id="goal_amount"
          type="number"
          name="goal_amount"
          required
          min="10"
        />
         <FormLabel htmlFor="image_url">Image Url:</FormLabel>
        <FormInput
          id="image_url"
          type="url"
          name="image_url"
          required
        />
        <FormLabel htmlFor="start_date">Start date:</FormLabel>
        <FormInput
          id="start_date"
          type="date"
          name="start_date"
          required
        />
        <FormLabel htmlFor="end_date">End date:</FormLabel>
        <FormInput
          id="end_date"
          type="date"
          name="end_date"
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormWrapper>
    </div>
    </>
  );
};
