import React from "react";
import apiURL from "../api";

export const IndividualItem = (props) => {
  async function deleteItem() {
    const response = await fetch(`${apiURL}/items/${props.individualItem.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("deleteItem", data);
    alert("Item deleted successfully, you may refresh to see changes");
  }

  console.log(props.individualItem);
  return (
    <div className="individual-item right-side-view">
      <h1 className="individual-item-title">{props.individualItem.title}</h1>
      <p className="individual-item-desc">
        <span className="grey">Description: </span>
        {props.individualItem.description}
      </p>
      <p className="individual-item-price">
        <span className="grey">Price: </span>${props.individualItem.price}
      </p>
      <p className="individual-item-category">
        <span className="grey">Category: </span>
        {props.individualItem.category}
      </p>
      <img
        className="individual-item-img"
        src={props.individualItem.image}
      ></img>
      <div className="individual-item-btns">
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
    </div>
  );
};
