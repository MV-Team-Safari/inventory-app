import React from "react";

export const IndividualItem = (props) => {
  console.log(props.individualItem);
  return (
    <div className="individual-item">
      <h1>{props.individualItem.title}</h1>
      <h1>{props.individualItem.price}</h1>
      <h1>{props.individualItem.description}</h1>
      <h1>{props.individualItem.createdAt}</h1>
    </div>
  );
};
