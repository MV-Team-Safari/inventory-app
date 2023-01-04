import React, { useState } from "react";

export const UpdateForm = () => {
  return (
    <div>
      <form>
        <label>Update Title:</label>
        <input type="text"></input>
        <label>Update Description:</label>
        <input type="text"></input>
        <label>Update Price:</label>
        <input type="number"></input>
        <label>Update Category:</label>
        <input type="text"></input>
        <label>Update Image URL:</label>
        <input type="text"></input>
      </form>
    </div>
  );
};
