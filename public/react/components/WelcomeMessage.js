import React from "react";

export default function WelcomeMessage() {
  return (
    <>
      <div id="main-area" className="welcome-message">
        <div className="welcome-message-content">
          <h1>Welcome To Your Inventory!</h1>
          <p>Click View All to view all of your items.</p>
          <p>Click Add to add a new item to your inventory.</p>
          <img
            className="welcome-message-img"
            src="https://media.tenor.com/J49ROi-SxSMAAAAC/the-office-steve-carell.gif"
          />
        </div>
      </div>
    </>
  );
}
