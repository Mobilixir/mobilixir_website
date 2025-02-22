"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {
	//update the size of the logo when the size of the screen changes
	const [width, setWidth] = useState(0);

	const updateWidth = () => {
		const newWidth = window.innerWidth;
		setWidth(newWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		updateWidth();
	}, []);

	// change between the logo and the button when the user scrolls
	const [showButton, setShowButton] = useState(false);

	const changeNavButton = () => {
		if (window.scrollY >= 400 && window.innerWidth < 768) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNavButton);
	}, []);

	return (
		<>
			<Link
				href="/"
				style={{ display: showButton ? "none" : "block" }}
				prefetch={false}
			>
				<Image src="/mobilixir_logo.svg" alt="Logo" width={200} height={20} />
			</Link>
		</>
	);
};

export default Logo;
