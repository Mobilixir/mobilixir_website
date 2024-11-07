import Image from "next/image";
import { info } from "../info/Info";
function AboutUs() {
  return (
    <div className="container mx-auto justify-center items-center basis-1 mt-10 animate-slidein opacity-0 [--slidein-delay:700ms]">
      <div className=" mt-10 flex flex-row justify-evenly">
        <div className=" w-[120vh] flex-col">
          <h1 className="font-bold text-black font-faktumBold-900 text-3xl flex">
            {info.aboutus.missionTitle}
          </h1>
          <h3 className="text-2xl text-black  flex mt-10">
            {info.aboutus.mission}
          </h3>

          <h1 className="font-faktumBold font-bold text-3xl  text-black  flex mt-10">
            {info.aboutus.storyTitle}
          </h1>
          <h3 className="text-2xl text-black  flex mt-10">
            {info.aboutus.story}
          </h3>
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
      <div className="container mt-20 flex flex-row-reverse justify-between mb-20">
        <div className=" items-center flex justify-end mx-10 my-20">
          <ul>
            {info.aboutus.approach.map((approach) => {
              return (
                <li
                  className="text-black text-2xl mt-4 animate-slidein opacity-0 [--slidein-delay:700ms]"
                  key={approach}
                >
                  {" "}
                  &bull; {approach}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <Image
            src="/two.svg"
            alt="Logo"
            width={0}
            height={0}
            className=" object-cover h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
