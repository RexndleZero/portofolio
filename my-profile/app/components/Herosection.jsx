import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello my name is reyy!
          </h1>
          <p className="text-[#ADB7BE] text-lg lf:text-xl">lorem ipsum</p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818]">
            <Image
              src="/images/heros-image.jpg"
              alt="hero image"
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
