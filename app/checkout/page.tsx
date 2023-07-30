// all pages on next 13 are SSR by default
'use client'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
import NavBar from '../components/NavBar';

// 1. Define the type for the 'price' object
interface Price {
	id: string;
	productImage: string;
	nickname: string;
	unit_amount: number; // Add other properties as necessary
}

const Checkout: React.FC = () => {
	// 2. Set the type for the 'prices' state
	const [prices, setPrices] = useState<Price[]>([]);

	useEffect(() => {
		fetchPrices();
	}, []);

	const fetchPrices = async () => {
		const { data } = await axios.get<Price[]>('/api/fetchproducts');
		setPrices(data);
		console.log({ data });
	}

	return (
		<>
			<NavBar />
			<section className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
				{prices && prices.map((price) => (
					<ProductCard price={price} key={price.id} />
				))}
			</section>
		</>
	);
}

export default Checkout;
