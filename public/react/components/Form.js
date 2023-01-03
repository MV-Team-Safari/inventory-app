import React from "react";

export const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <label className="form-item-name">
          New Item Name:
          <input
            className="form-item-name-input"
            type="text"
            name="item-name"
          />
        </label>
        <label className="form-item-desc">
          New Item Description:
          <input
            className="form-item-desc-input"
            type="text"
            name="item-name"
          />
        </label>
        <label className="form-item-price">
          New Item Price:
          <input
            className="form-item-price-input"
            type="text"
            name="item-name"
          />
        </label>
        <label className="form-item-category">
          New Item Category:
          <input
            className="form-item-category-input"
            type="text"
            name="item-name"
          />
        </label>
        <input
          className="form-item-submit-btn"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};
