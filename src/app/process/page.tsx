import { info } from "../info/Info";
function Process() {
  return (
    <div className="container mx-auto justify-center items-center basis-1 mt-10 animate-slidein opacity-0 [--slidein-delay:700ms]">
      <h1 className="font-bold text-black font-faktumBold-900 text-5xl mb-10">
        {info.process.title}
      </h1>
      {info.process.processList.map((process, index) => {
        const css =
          index % 2 == 0
            ? "justify-start items-start"
            : "justify-end items-end";
        return (
          <div key={index}>
            <div className={`flex flex-col ${css} p-4 h-full w-full`}>
              <p className="text-black font-faktumBold font-bold text-2xl">
                {process.title}
              </p>
              <div className="h-auto">
                <div className="text-black font-generalSansMedium text-base  w-auto animate-slidein opacity-0 [--slidein-delay:700ms]">
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
