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
    alert("Item updated successfully, you may refresh to see changes");
    return response.json();
  }
  return (
    <div>
      <form className="update-form-container" onSubmit={updateItem}>
        <label>Update Title:</label>
        <input
          type="text"
          value={title}
          placeholder={props.individualItem.title}
          onChange={(event) => setTitle(event.target.value)}
          required
        ></input>
        <label>Update Description:</label>
        <input
          type="text"
          value={description}
          placeholder={props.individualItem.description}
          onChange={(event) => setDescription(event.target.value)}
          required
        ></input>
        <label>Update Price:</label>
        <input
          type="number"
          value={price}
          placeholder={props.individualItem.price}
          onChange={(event) => setPrice(event.target.value)}
          required
        ></input>
        <label>Update Category:</label>
        <input
          type="text"
          value={category}
          placeholder={props.individualItem.category}
          onChange={(event) => setCategory(event.target.value)}
          required
        ></input>
        <label>Update Image URL:</label>
        <input
          type="text"
          value={imgURL}
          placeholder={props.individualItem.image}
          onChange={(event) => setImgURL(event.target.value)}
          required
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
