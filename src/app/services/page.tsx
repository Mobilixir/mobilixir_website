import Image from "next/image";
import { info } from "../info/Info";
function ServicesPage() {
  return (
    <div className="container mx-auto justify-center items-center basis-1 mt-10 animate-slidein opacity-0 [--slidein-delay:700ms]">
      <h1 className="font-bold text-black font-faktumBold-900 text-5xl  flex">
        {info.services.title}
      </h1>
      <div className=" mt-10 grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 justify-between gap-4">
        {info.services.servicesList.map((service) => {
          return (
            <div
              key={service.title}
              className="flex flex-col justify-center items-center border border-[#E6E6E6] rounded-2xl p-4 h-full w-full"
            >
              <Image
                src={service.image}
                alt="Logo"
                width={0}
                height={0}
                className="aspect-auto object-cover h-10 w-auto mb-4"
              />
              <p className="text-black font-faktumBold font-bold text-2xl my-4">
                {service.title}
              </p>
              <div className="h-auto">
                <div className="text-black font-generalSansMedium text-base m-2 text-left justify-start items-start w-auto animate-slidein opacity-0 [--slidein-delay:700ms]">
                  {service.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesPage;
