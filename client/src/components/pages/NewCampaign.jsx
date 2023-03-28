import React, { useState } from "react";
import styled from "styled-components";

// used styled components to avoid merge conflicts
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin: 0 50%;
  padding: 7rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #0062cc;
  }
`;

const NewCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [goal_amount, setGoal_amount] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log`description: ${description}, category: ${category}, goal_amount: ${goal_amount}, start_date: ${start_date},end_date:${end_date}`;
  };

  // :title
  //     t.string :description
  //     t.string :category
  //     t.float :goal_amount
  //     t.date :start_date
  //     t.date :end_date

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Title:</FormLabel>
        <FormInput
          id="name"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <FormLabel htmlFor="email">Description:</FormLabel>
        <FormTextarea
          id="description"
          rows="5"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <FormLabel htmlFor="phone">Category:</FormLabel>
        <FormInput
          id="category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />

        <FormLabel htmlFor="phone">Goal amount:</FormLabel>
        <FormInput
          id="goal_amount"
          type="number"
          value={goal_amount}
          onChange={(event) => setGoal_amount(event.target.value)}
          required
          min="10"
        />

        <FormLabel htmlFor="start_date">Start date:</FormLabel>
        <FormInput
          id="start_date"
          type="date"
          value={start_date}
          onChange={(event) => setStart_date(event.target.value)}
          required
        />

        <FormLabel htmlFor="end_date">End date:</FormLabel>
        <FormInput
          id="end_date"
          type="date"
          value={end_date}
          onChange={(event) => setEnd_date(event.target.value)}
          required
        />

        {/* <FormLabel htmlFor="message">Message:</FormLabel>
        <FormTextarea
          id="message"
          rows="5"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        /> */}

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default NewCampaign;
