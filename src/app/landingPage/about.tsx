import { info } from "../info/Info";

function About() {
	return (
		<div className="flex flex-grow flex-col p-8 max-lg:mt-10">
			<h1 className="mt-8 font-faktumBold-900 text-4xl text-black">
				{info.landingPage.about}
			</h1>
		</div>
	);
}

export default About;
