import React from "react";
import apiURL from "../api";

export const IndividualItem = (props) => {
  async function deleteItem() {
    const response = await fetch(`${apiURL}/items/${props.individualItem.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("deleteItem", data);
  }

  console.log(props.individualItem);
  return (
    <div className="individual-item">
      <h1 className="individual-item-title">{props.individualItem.title}</h1>
      <p className="individual-item-desc">{props.individualItem.description}</p>
      <p className="individual-item-price">{props.individualItem.price}</p>
      <p className="individual-item-category">
        {props.individualItem.category}
      </p>
      <img
        className="individual-item-img"
        src={props.individualItem.image}
      ></img>
      <button className="individual-item-update-btn">Update This Item</button>
      <button
        className="individual-item-delete-btn"
        onClick={() => {
          deleteItem();
        }}
      >
        Delete This Item
      </button>
    </div>
  );
};
