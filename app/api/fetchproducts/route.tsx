import Stripe, { Price, Product } from "stripe";
import { NextResponse } from "next/server";

interface CustomPriceData extends Price {
	productImage?: string;
}

export async function GET(request: any): Promise<NextResponse> {  // 'request' type can be more specific if its structure is known.
	// init stripe using secret key in developer dashboard
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

	// Fetch prices from Stripe
	const prices = await stripe.prices.list({
		limit: 5
	});

	// Fetch products associated with each price to get the images
	const products: Product[] = await Promise.all(
		prices.data.map(price =>
			stripe.products.retrieve(price.product as string)
		)
	);

	// Combine price and product data 
	const combinedData: CustomPriceData[] = prices.data.map((price, index) => ({
		...price,
		productImage: products[index].images[0]  // Assuming each product has at least one image
	}));

	return NextResponse.json(combinedData.reverse());
}
