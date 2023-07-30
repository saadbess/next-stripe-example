import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
	priceId: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

	// usually it's request.body but in Next 13 it's request.json
	const data: RequestBody = await request.json();
	const priceId = data.priceId;

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1
			}
		],
		mode: 'payment',
		// change these for prod
		success_url: 'http://localhost:3000',
		cancel_url: 'http://localhost:3000',
	})

	return NextResponse.json(session.url);
}
