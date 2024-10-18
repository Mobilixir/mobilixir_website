import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-poppins)"],
				faktumRegular: ["--font-faktum-regular"],
				faktumBold: ["--font-faktum-bold"],
				generalSansBold: ["--font-generalsans-bold"],
				generalSansLight: ["--font-generalsans-light"],
				generalSansMedium: ["--font-generalsans-medium"],
				generalSansRegular: ["--font-generalsans-regular"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				palatinate: "#293FFF",
				crayola: "#1579FF",
				blueBold: "#00B3FF",
				ultramarine: "#2400FF",
				metallic: "#FFCB14",
				purpleX11: "#BD32FF",
				black: "#000000",
				white: "#FFFFFF",
				stormy: "#323334",
				smoke: "#4E4F51",
			},
		},
	},
	plugins: [],
};
export default config;
