import Image from "next/image";
import { info } from "../info/Info";

function LandingPage() {
	return (
		<div className="flex flex-grow flex-col container mx-auto">
			<div className="h-[22vh] flex-row flex justify-between py-8 max-lg:mb-28">
				<div className=" w-[120vh] flex-col">
					<p className="text-black font-generalSansMedium text-2xl mt-4">
						{info.landingPage.title}
					</p>
					<p className="font-faktumBold-900 text-4xl mt-4 text-black max-lg:mt-10">
						{info.landingPage.subtitle}
					</p>
				</div>
				<div className=" w-[40vh] justify-center items-center flex">
					<button
						type="button"
						className="min-lg:h-14 p-4 rounded-full bg-black"
					>
						{info.landingPage.ctaButton}
					</button>
				</div>
			</div>
			<div className="h-[65vh] max-lg:hidden justify-center items-center flex">
				<Image
					src="/hero_image.svg"
					alt="Logo"
					width={0}
					height={0}
					className="rounded-3xl aspect-square object-cover h-[60vh] w-[160vh]"
				/>
			</div>
		</div>
	);
}
export default LandingPage;
