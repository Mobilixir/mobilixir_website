import { info } from "@/app/info/Info";
import Link from "next/link";
export const Menu = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (!element) return;
		window.scroll({ top: element.offsetTop - 20, behavior: "smooth" });
	};

	return (
		<>
			<div className="hidden md:flex gap-x-6 text-white ">
				{info.nav_menu.map((item, index) => (
					<Link key={index} href={item.link}>
						<p className="text-[#666666]">{item.title}</p>
					</Link>
				))}
			</div>
		</>
	);
};
