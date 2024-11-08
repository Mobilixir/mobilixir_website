import { info } from "../info/Info";
function Process() {
	return (
		<div className="container mx-auto justify-center items-center basis-1 mt-10 ">
			<h1 className="font-bold text-black font-faktumBold-900 text-3xl mb-10">
				{info.process.title}
			</h1>
			{info.process.processList.map((process, index) => {
				return (
					<div key={index}>
						<div
							className={`flex flex-col justify-start items-start p-4 h-full w-full`}
						>
							<p className="text-black font-faktumBold font-bold text-2xl">
								{process.title}
							</p>
							<div className="h-auto">
								<div className="text-black font-generalSansMedium text-base  w-auto ">
									{process.description}
								</div>
							</div>
						</div>
						<div className="h-0.5 bg-stone-500 w-auto" />
					</div>
				);
			})}
		</div>
	);
}

export default Process;
