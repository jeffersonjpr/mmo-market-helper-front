import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemsPage = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		// Fetch items from the API when the component mounts
		axios
			.get("http://127.0.0.1:5000/item")
			.then((response) => {
				setItems(response.data);
			})
			.catch((error) => {
				console.error("Error fetching items:", error);
			});
	}, []);

	return (
		<div>
			<h1>Items</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name} - {item.description} {/* Adjust the properties based on your API response */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemsPage;
