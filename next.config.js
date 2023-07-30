/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['files.stripe.com'], // Add Stripe's domain for serving images
	},
}

module.exports = nextConfig
