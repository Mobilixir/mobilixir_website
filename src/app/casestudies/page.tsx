import Image from "next/image";
import { info } from "../info/Info";
import { notFound } from "next/navigation";
import { Post } from "../lib/types";
import Link from "next/link";

async function CaseStudies() {
	const data = await fetch(info.casestudies.baseurl, {
		next: { revalidate: 3 * 60 * 60 },
	});

	if (!data.ok) notFound();

	const posts = await data.json();

	return (
		<div className="container mx-auto justify-center items-center basis-1 mt-10 ">
			<h1 className="font-bold text-black font-faktumBold-900 text-3xl  flex">
				{info.casestudies.title}
			</h1>
			<div className=" mt-10 grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-3 justify-between gap-4">
				{posts.map((post: Post) => {
					if (post === null) return notFound();
					return (
						<Link
							key={post.id}
							href={post.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex flex-col justify-center items-center border border-[#E6E6E6] rounded-2xl p-4 h-full w-full">
								<Image
									src={post.cover_image ?? "/hero_image.svg"}
									alt="Logo"
									width={0}
									height={0}
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
									className="aspect-auto object-cover rounded-lg"
								/>
								<p className="text-black font-faktumBold text-2xl my-4">
									{post.title}
								</p>
								<div className="h-auto">
									<div className="text-black font-generalSansMedium text-base m-2 text-left justify-start items-start w-auto ">
										{post.description}
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default CaseStudies;
