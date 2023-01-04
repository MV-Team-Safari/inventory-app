import React, { useState } from "react";
import apiURL from "../api";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { title, description, price, category, imgURL };
    console.log(data);
    const response = await fetch(`${apiURL}/items`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    return response.json();
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-item-name">
          New Item Name/Title:
          <input
            className="form-item-name-input"
            type="text"
            name="item-name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label className="form-item-desc">
          New Item Description:
          <input
            className="form-item-desc-input"
            type="text"
            name="item-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label className="form-item-price">
          New Item Price:
          <input
            className="form-item-price-input"
            type="number"
            name="item-price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <label className="form-item-category">
          New Item Category:
          <input
            className="form-item-category-input"
            type="text"
            name="item-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <label className="form-item-img">
          Image URL:
          <input
            className="form-item-img-input"
            type="text"
            name="item-img-url"
            value={imgURL}
            onChange={(event) => setImgURL(event.target.value)}
          />
        </label>
        <input
          className="form-item-submit-btn"
          type="submit"
          value="Submit Your Item"
        />
      </form>
    </div>
  );
};
