import React from "react";

export const Item = (props) => {
  return (
    <div className="item-container">
      <img className="item-img" src={props.item.image} alt={props.item.title} />
      <h3>{props.item.title}</h3>
    </div>
  );
};
