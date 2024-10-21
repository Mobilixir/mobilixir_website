import About from "./about";
import LandingPage from "./landingPage";
import Services from "./services";

function index() {
	return (
		<>
			<LandingPage />
			<div
				id="techstack"
				className="h-screen w-auto mx-2 justify-center items-center"
			>
				<About />
				<Services />
			</div>
		</>
	);
}
export default index;
