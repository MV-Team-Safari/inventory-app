import React from "react";

export default function WelcomeMessage() {
  return (
    <>
      <div className="welcome-message">
        <div className="welcome-message-content">
          <h1 className="welcome-message-content-heading">
            Welcome To Your Inventory!
          </h1>
          <p className="welcome-message-content-p1">
            Click <span className="grey">View All Button</span> to view all of
            your items.
          </p>
          <p className="welcome-message-content-p2">
            Click <span className="grey">Add Item Button</span> to add a new
            item to your inventory.
          </p>
          <img
            className="welcome-message-img"
            src="https://media.tenor.com/J49ROi-SxSMAAAAC/the-office-steve-carell.gif"
          />
        </div>
      </div>
    </>
  );
}
