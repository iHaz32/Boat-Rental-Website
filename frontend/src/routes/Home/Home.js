import React from "react";
import Landing from "./elements/Landing";
import Labels from "./elements/Labels";
import WhyChoose from "./elements/WhyChoose";
import WhileSailing from "./elements/WhileSailing";
import CheckBoats from "./elements/CheckBoats";

function Home() {
  return (
    <>
      <Landing />
      <section className="pb-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <WhyChoose />
          <Labels />
        </div>
      </section>

      <section className="relative py-20 bg-blue-50">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <WhileSailing />
      </section>

      <section className="pb-20 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <CheckBoats />
      </section>
    </>
  );
}

export default Home;
