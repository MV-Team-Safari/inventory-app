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
        <h1>Item Store</h1>
        <h2>All things 🔥</h2>
      </div>

      <a className="navbar-user" href="/">
        <img
          className="navbar-user-img"
          src="https://ak.picdn.net/shutterstock/videos/1029117641/thumb/1.jpg?ip=x480"
        />
      </a>
    </nav>
  );
}
