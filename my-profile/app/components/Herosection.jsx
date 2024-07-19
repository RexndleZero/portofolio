import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hello I`m {""}{" "}
            </span>
            reyy!
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl">
            lorem ipsum
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-blue-900 to-blue-950 hover:bg-slate-200 text-white">
              Hire me!
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-200 text-[#150d5c] border border-[#150d5c] mt-3 ">
              Download CV Here!
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative">
            <Image
              src="/images/heros-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
