import React from "react";
import { IndividualItem } from "./IndividualItem";

export const Item = (props) => {
  return (
    <div className="item-container">
      <img className="item-img" src={props.item.image} alt={props.item.title} />
      <h3
        onClick={() => {
          props.setIndividualItem(props.item);
        }}
      >
        {props.item.title}
      </h3>
    </div>
  );
};
