import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const saucesData = await response.json();
			
			setItems(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<ItemsList items={items} />
		</main>
	)
}