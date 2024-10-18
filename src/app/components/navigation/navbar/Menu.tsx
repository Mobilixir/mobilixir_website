import { info } from "@/app/info/Info";
export const Menu = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (!element) return;
		window.scroll({ top: element.offsetTop - 20, behavior: "smooth" });
	};

	return (
		<>
			<ul className="hidden md:flex gap-x-6 text-white ">
				{info.nav_menu.map((item, index) => (
					<li key={index}>
						<button onClick={() => scrollToSection(item.link)}>
							<p className="text-[#666666]">{item.title}</p>
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
