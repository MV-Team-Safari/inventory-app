import React from "react";

export const Form = () => {
  return (
    <div className="form">
      <form>
        <label>
          New Item Name:
          <input type="text" name="item-name" />
        </label>
        <label>
          New Item Description:
          <input type="text" name="item-name" />
        </label>
        <label>
          New Item Price:
          <input type="text" name="item-name" />
        </label>
        <label>
          New Item Category:
          <input type="text" name="item-name" />
        </label>
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};
