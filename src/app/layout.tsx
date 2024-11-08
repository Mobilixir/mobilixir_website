import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/navigation/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const faktumRegular = localFont({
	src: "./fonts/Faktum_Regular.otf",
	variable: "--font-faktum-regular",
	weight: "100 900",
});
const faktumBold = localFont({
	src: "./fonts/Faktum_Bold.otf",
	variable: "--font-faktum-bold",
	weight: "100 900",
});
const generalSansBold = localFont({
	src: "./fonts/GeneralSans-Bold.otf",
	variable: "--font-generalsans-bold",
	weight: "100 900",
});
const generalSansLight = localFont({
	src: "./fonts/GeneralSans-Light.otf",
	variable: "--font-generalsans-light",
	weight: "100 900",
});
const generalSansMedium = localFont({
	src: "./fonts/GeneralSans-Medium.otf",
	variable: "--font-generalsans-medium",
	weight: "100 900",
});
const generalSansRegular = localFont({
	src: "./fonts/GeneralSans-Regular.otf",
	variable: "--font-generalsans-regular",
	weight: "100 900",
});

export const metadata: Metadata = {
	title:
		"Mobilixir Technologies | Digital Consultancy for Mobile & Web App Development",
	description:
		"Mobilixir Technologies specializes in mobile and web app development using Swift, React Native, Elixir, and Next.js. We create seamless and scalable digital solutions for businesses.",
	keywords: [
		"mobile app development",
		"web app development",
		"Swift",
		"React Native",
		"Elixir",
		"Next.js",
		"Phoenix Framework",
		"CI/CD",
		"Tailwind CSS",
		"digital consultancy",
		"Wasp lang",
		"wasp",
		"React.js",
		"Node.js",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-white ${faktumRegular.variable} ${faktumBold.variable} ${generalSansBold.variable} ${generalSansLight.variable} ${generalSansMedium.variable} ${generalSansRegular.variable}`}
			>
				<Analytics />
				<Navigation />
				<div id="home" className="min-h-screen flex flex-col w-auto bg-white">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
