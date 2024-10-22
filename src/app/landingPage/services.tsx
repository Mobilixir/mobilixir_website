import Image from "next/image";
import { info } from "../info/Info";

function Services() {
	return (
		<div
			id="about"
			className="h-screen w-auto container mx-auto justify-center items-center "
		>
			<div className="flex flex-grow flex-col py-8 max-lg:mt-10">
				<h1 className="mt-8 font-faktumBold-900 text-4xl text-black">
					{info.landingPage.about}
				</h1>
			</div>
			<div
				id="services"
				className="w-full h-auto bg-white grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 justify-evenly items-center gap-8 max-lg:flex-col grow basis-1 mt-10"
			>
				{info.landingPage.tech.map((tech) => {
					return (
						<div
							key={tech.title}
							className="flex flex-col justify-center items-center border border-[#E6E6E6] rounded-2xl p-8 grow basis-1 h-full w-full"
						>
							<Image
								src={tech.image}
								alt="Logo"
								width={0}
								height={0}
								className="aspect-auto object-cover h-14 w-auto mb-4"
							/>
							<p className="text-black font-faktumBold font-bold text-3xl my-4">
								{tech.title}
							</p>
							<div className="h-auto">
								{tech.stack.map((stack) => {
									return (
										<div
											key={stack}
											className="text-black font-generalSansMedium text-2xl m-4 text-left justify-start items-start w-auto animate-slidein opacity-0 [--slidein-delay:700ms]"
										>
											&bull; {stack}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Services;
