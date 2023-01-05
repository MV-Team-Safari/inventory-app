import React from "react";
import { IndividualItem } from "./IndividualItem";

export const Item = (props) => {
  return (
    <div
      className="item-container"
      onClick={() => {
        props.setIndividualItem(props.item);
        console.log(props.item);
      }}
    >
      <img className="item-img" src={props.item.image} alt={props.item.title} />
      <h3>{props.item.title}</h3>
    </div>
  );
};
