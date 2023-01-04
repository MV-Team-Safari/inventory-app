import React, { useState } from "react";
import apiURL from "../api";

export const UpdateForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");

  async function updateItem(e) {
    e.preventDefault();
    const data = { title, description, price, category, imgURL };
    console.log(data);

    const response = await fetch(`${apiURL}/items/${props.individualItem.id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    return response.json();
  }
  return (
    <div>
      <form className="update-form-container" onSubmit={updateItem}>
        <label>Update Title:</label>
        <input
          type="text"
          value={title === "" ? props.individualItem.title : title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Update Description:</label>
        <input
          type="text"
          value={
            description === "" ? props.individualItem.description : description
          }
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label>Update Price:</label>
        <input
          type="number"
          value={price === "" ? props.individualItem.price : price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <label>Update Category:</label>
        <input
          type="text"
          value={category === "" ? props.individualItem.category : category}
          onChange={(event) => setCategory(event.target.value)}
        ></input>
        <label>Update Image URL:</label>
        <input
          type="text"
          value={imgURL === "" ? props.individualItem.image : imgURL}
          onChange={(event) => setImgURL(event.target.value)}
        ></input>
        <input
          className="update-form-item-submit-btn"
          type="submit"
          value="Update New Item"
        />
      </form>
    </div>
  );
};
