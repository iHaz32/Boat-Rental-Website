import React from "react";
import ScrollButton from "./ScrollButton";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./animations.css";

function Landing() {
  const { t } = useTranslation("homePage"); // Specify the namespace

  return (
    <div className="flex flex-col">
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "90vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/07/bigstock-Beautiful-View-Of-The-Mysterio-382010792.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center flex flex-col reveal-text">
              <h1 id="reveal-text" className="text-white font-semibold text-5xl pb-4">
                {t("mainGreeting")}
              </h1>
              <p id="reveal-text" className="text-lg text-gray-300">
                {t("secondaryGreeting")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full flex justify-center mb-4">
        <ScrollButton />
      </div>
      <Element name="bottom-of-image" />
    </div>
  );
}

export default Landing;
