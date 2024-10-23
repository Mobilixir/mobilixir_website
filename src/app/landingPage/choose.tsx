import { info } from "../info/Info";
function ChooseUs() {
	return (
		<div
			id="why-choose-us"
			className="h-screen w-auto container flex flex-col mx-auto justify-center items-center"
		>
			<h1 className="text-5xl font-bold text-black">
				{info.landingPage.whychooseus.title}
			</h1>
			<div className=" mt-10">
				<ul>
					{info.landingPage.whychooseus.reasons.map((item) => {
						return (
							<li
								className="text-black text-3xl mt-4 animate-slidein opacity-0 [--slidein-delay:700ms]"
								key={item}
							>
								{" "}
								&bull; {item}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ChooseUs;
