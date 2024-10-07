import React from "react";
import { useTranslation } from "react-i18next";

function Secondary() {
  const { t } = useTranslation("homePage"); // Specify the namespace

  return (
    <div className="flex flex-wrap items-center pt-12">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="flex flex-row gap-6 items-center">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-6 font-semibold leading-normal">
            {t("whyHeader")}
          </h3>
        </div>
        <ul className="list-disc ml-6">
          <li className="text-lg font-medium leading-relaxed mt-4 mb-4 text-gray-700">
            {t("whyReason1")}
          </li>
          <li className="text-lg font-medium leading-relaxed mt-4 mb-4 text-gray-700">
            {t("whyReason2")}
          </li>
          <li className="text-lg font-medium leading-relaxed mt-4 mb-4 text-gray-700">
            {t("whyReason3")}
          </li>
          <li className="text-lg font-medium leading-relaxed mt-4 mb-4 text-gray-700">
            {t("whyReason4")}
          </li>
          <li className="text-lg font-medium leading-relaxed mt-4 mb-4 text-gray-700">
            {t("whyReason5")}
          </li>
          <li className="text-lg font-medium leading-relaxed mt-4 mb-4 text-gray-700">
            {t("whyReason6")}
          </li>
        </ul>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
          <img
            alt="..."
            src="https://static1.clickandboat.com/v1/home/m/uJOzMGlFeBlMX4ZKyjqxGJPt28f7eZEt.jpg"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px",
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-[#21B3C4] fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-gray-700">
              {t("whyImageHeader")}
            </h4>
            <p className="text-md font-light text-gray-700 mt-2">
              {t("whyImageText")}
            </p>
          </blockquote>
        </div>
      </div>
    </div>  
  );
}

export default Secondary;
