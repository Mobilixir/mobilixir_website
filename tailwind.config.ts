import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
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
    			generalSansRegular: ["--font-generalsans-regular"]
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			palatinate: '#293FFF',
    			crayola: '#1579FF',
    			blueBold: '#00B3FF',
    			ultramarine: '#2400FF',
    			metallic: '#FFCB14',
    			purpleX11: '#BD32FF',
    			black: '#000000',
    			white: '#FFFFFF',
    			stormy: '#323334',
    			smoke: '#4E4F51',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			slidein: {
    				from: {
    					opacity: '0',
    					transform: 'translateY(-10px)'
    				},
    				to: {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			}
    		},
    		animation: {
    			slidein: 'slidein 1s ease var(--slidein-delay, 0) forwards'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
