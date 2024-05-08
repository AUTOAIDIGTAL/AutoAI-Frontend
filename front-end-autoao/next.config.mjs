/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: ['picsum.photos', 'autoai.s3.amazonaws.com'], // Temporary
	},
};

export default nextConfig;
