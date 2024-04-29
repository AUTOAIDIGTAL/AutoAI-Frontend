/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		domains: ['picsum.photos'], // Temporary
	},
};

export default nextConfig;
