import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items, setIndividualItem }) => {
  return (
    <div className="left-side-view">
      {items.map((item, idx) => {
        return (
          <Item item={item} setIndividualItem={setIndividualItem} key={idx} />
        );
      })}
    </div>
  );
};
