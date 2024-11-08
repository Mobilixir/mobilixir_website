import Image from "next/image";
import { info } from "../info/Info";
function ChooseUs() {
	return (
		<div className="container mx-auto justify-center items-center basis-1 mt-10">
			<h1 className="text-3xl font-bold text-black justify-center flex">
				{info.landingPage.whychooseus.title}
			</h1>
			<div className=" mt-10 flex flex-row justify-between w-auto">
				<div className=" items-center justify-center flex">
					<ul>
						{info.landingPage.whychooseus.reasons.map((item) => {
							return (
								<li className="text-black text-2xl mt-4 " key={item}>
									{" "}
									&bull; {item}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="max-lg:hidden">
					<Image
						src="/one.svg"
						alt="Logo"
						width={0}
						height={0}
						className=" object-cover h-auto w-auto"
					/>
				</div>
			</div>
			<div className="flex-row flex justify-between items-center h-40 mt-16">
				<p className="font-faktumBold-900 text-3xl max-lg:text-2xl text-black">
					{info.landingPage.whychooseus.ctatitle}
				</p>
				<button
					type="button"
					className="min-lg:h-14 h-20 p-4 rounded-full bg-black text-white"
				>
					{info.landingPage.ctaButton}
				</button>
			</div>
		</div>
	);
}

export default ChooseUs;
