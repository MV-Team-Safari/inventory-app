import React from "react";

export default function Nav({
  isShowingList,
  setIsShowingList,
  isShowingForm,
  setIsShowingForm,
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-view-all-btn"
          type="button"
          data-toggle="collapse"
          onClick={() => {
            setIsShowingList(!isShowingList);
          }}
        >
          View All
        </button>
        <button
          className="navbar-add-btn"
          type="button"
          data-toggle="collapse"
          onClick={() => {
            setIsShowingForm(!isShowingForm);
          }}
        >
          Add Item
        </button>
      </div>
      <div className="nav-title">
        <h1>The Object Shop</h1>
        <h2>Find your favorite things</h2>
      </div>

      <a className="navbar-user" href="/">
        <img
          className="navbar-user-img"
          src="https://www.repicture.com/assets/images/default.png"
        />
      </a>
    </nav>
  );
}
