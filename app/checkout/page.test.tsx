import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import Checkout from './page';

// Mock axios module
jest.mock('axios');
const mockedAxios = (axios as unknown) as jest.Mocked<typeof axios>;

describe('Checkout', () => {

	const mockData = [
		{
			id: '1',
			productImage: 'image1.jpg',
			nickname: 'Product 1',
			unit_amount: 1000
		},
		{
			id: '2',
			productImage: 'image2.jpg',
			nickname: 'Product 2',
			unit_amount: 2000
		}
	];

	beforeEach(() => {
		// Mock axios GET request
		mockedAxios.get.mockResolvedValueOnce({ data: mockData });
	});

	it('renders NavBar', async () => {
		const { getByText } = render(<Checkout />);
		const navElement = getByText("HAPPY SAAD COFFEE");
		expect(navElement).toBeInTheDocument();
	});

	it('fetches and displays products', async () => {
		const { findByText } = render(<Checkout />);

		// Wait for axios to resolve and state to update
		const product1 = await findByText('Product 1');
		const product2 = await findByText('Product 2');

		expect(product1).toBeInTheDocument();
		expect(product2).toBeInTheDocument();
	});
});
