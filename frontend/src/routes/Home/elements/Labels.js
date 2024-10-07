import React from "react";
import { useTranslation } from "react-i18next";

function Labels() {
  const { t } = useTranslation("homePage"); // Specify the namespace

  return (
    <div className="flex flex-wrap">
      <div className="pt-12 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary-bg">
              <i className="fa-solid fa-sun"></i>
            </div>
            <h6 className="text-xl font-semibold">{t("labelHeader1")}</h6>
            <p className="mt-2 mb-4 text-gray-600">{t("labelText1")}</p>
          </div>
        </div>
      </div>

      <div className="pt-12 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary-bg">
              <i className="fas fa-water"></i>
            </div>
            <h6 className="text-xl font-semibold">{t("labelHeader2")}</h6>
            <p className="mt-2 mb-4 text-gray-600">{t("labelText2")}</p>
          </div>
        </div>
      </div>

      <div className="pt-12 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary-bg">
              <i className="fas fa-anchor"></i>
            </div>
            <h6 className="text-xl font-semibold">{t("labelHeader3")}</h6>
            <p className="mt-2 mb-4 text-gray-600">{t("labelText3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Labels;
