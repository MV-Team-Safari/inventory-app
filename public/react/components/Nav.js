import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-view-all-btn"
          type="button"
          data-toggle="collapse"
        >
          View All
        </button>
        <button className="navbar-add-btn" type="button" data-toggle="collapse">
          Add
        </button>
      </div>
      <div className="nav-title">
        <h1>Item Store</h1>
        <h2>All things 🔥</h2>
      </div>

      <a className="navbar-user" href="/">
        <img
          className="navbar-user-img"
          src="https://fairtradesafaris.com/wp-content/uploads/2021/06/1097003_FTS-JuneBlogs-10trees-Umbrella-Thorn_061521.png"
        />
      </a>
    </nav>
  );
}
