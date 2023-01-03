import React from "react";

export const IndividualItem = (props) => {
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
    </div>
  );
};
