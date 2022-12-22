import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import Nav from "./Nav";
import WelcomeMessage from "./WelcomeMessage";

export const App = () => {
  const [items, setItems] = useState([]);
  const [isShowingList, setIsShowingList] = useState(false);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <Nav isShowingList={isShowingList} setIsShowingList={setIsShowingList} />
      {isShowingList ? <ItemsList items={items} /> : <WelcomeMessage />}
    </main>
  );
};
