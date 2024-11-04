import { info } from "../info/Info";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="container mx-auto justify-center items-center basis-1 mt-10 animate-slidein opacity-0 [--slidein-delay:700ms]">
      <h1 className="font-bold text-black font-faktumBold-900 text-5xl  flex">
        {info.techStack.title}
      </h1>
      <div className="p-10 h-auto w-auto mx-auto flex flex-wrap">
        {info.techStack.stacks.map((stack, index) => {
          return (
            <div key={index} className="w-full h-auto flex flex-col">
              <h2 className="font-bold text-black font-faktumBold-900 text-3xl">
                {stack.title}
              </h2>
              <div key={index} className="w-full h-auto grid grid-cols-6 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-4 mt-4 justify-around">
                {stack.lists.map((tech, subindex) => {
                  return (
                    <div
                      key={subindex}
                      className="items-center gap-4 justify-center flex-col flex h-auto w-auto"
                    >
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={80}
                        height={80}
                        className="h-20 w-20"
                      />
                      <p className="text-[#666666] m-4">{tech.name}</p>
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
