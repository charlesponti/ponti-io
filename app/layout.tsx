import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Head from "next/head";
import Providers from "../utils/Providers";
import "./globals.css";

const defaultMeta = {
	title: "Ponti Studios",
	siteName: "Ponti Studios",
	description: "The next-generation production company.",
	url: "https://ponti.io", // ! Do not include trailing '/'
	type: "website",
	robots: "follow, index",
	image: "https://ponti.io/favicon/large-og.jpg",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ponti Studios",
	description: "A next-generation production studio for random ideas.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const meta = {
		...defaultMeta,
	};

	return (
		<html lang="en">
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content={meta.robots} />
				<meta content={meta.description} name="description" />
				{/* <meta property='og:url' content={`${meta.url}${pathname}`} /> */}
				{/* <link rel='canonical' href={`${meta.url}${pathname}`} /> */}
				{/* Open Graph */}
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content={meta.siteName} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta name="image" property="og:image" content={meta.image} />
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@th_clarence" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />

				{/* Favicons */}
				{favicons.map((linkProps) => (
					<link key={linkProps.href} {...linkProps} />
				))}
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/favicon/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link
					rel="preload"
					href="/fonts/inter-var-latin.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<body className={inter.className}>
				<nav className="navbar fixed flex justify-center top-0 z-50 w-full">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[1200px] px-4 py-6 bg-white border-2">
						<a
							className="btn-ghost font-serif font-semibold italic tracking-tighter text-lime-600 text-2xl md:text-lg"
							href="/"
						>
							<span role="img" className="mr-3">
								👋
							</span>
							<span>Ponti Studios</span>
						</a>
						<span className="text-xs font-medium text-gray-400 z-10">
							Based in Los Angeles, CA, USA
						</span>
					</div>
				</nav>
				<main className="z-10 relative flex flex-col justify-between items-center h-[calc(100vh-80px)]">
					<Providers>
						<div className="container flex flex-col flex-1 max-w-[1200px] mb-24 lg:border-2 px-4">
							{children}
						</div>
					</Providers>
				</main>
			</body>
		</html>
	);
}

type Favicons = {
	rel: string;
	href: string;
	sizes?: string;
	type?: string;
};

const favicons: Array<Favicons> = [
	{
		rel: "apple-touch-icon",
		sizes: "57x57",
		href: "/favicon/apple-icon-57x57.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "60x60",
		href: "/favicon/apple-icon-60x60.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "72x72",
		href: "/favicon/apple-icon-72x72.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "76x76",
		href: "/favicon/apple-icon-76x76.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "114x114",
		href: "/favicon/apple-icon-114x114.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "120x120",
		href: "/favicon/apple-icon-120x120.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "144x144",
		href: "/favicon/apple-icon-144x144.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "152x152",
		href: "/favicon/apple-icon-152x152.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "180x180",
		href: "/favicon/apple-icon-180x180.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "192x192",
		href: "/favicon/android-icon-192x192.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon/favicon-32x32.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "96x96",
		href: "/favicon/favicon-96x96.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon/favicon-16x16.png",
	},
	{
		rel: "manifest",
		href: "/favicon/manifest.json",
	},
];
