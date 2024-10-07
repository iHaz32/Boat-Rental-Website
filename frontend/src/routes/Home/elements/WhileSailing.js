import React from "react";
import { useTranslation } from "react-i18next";

function Tertiary() {
  const { t } = useTranslation("homePage"); // Specify the namespace

  return (
    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://rentalboat.gr/wp-content/uploads/2024/03/Rental-Boats-Rent-a-Boat.webp"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-20 md:mt-0">
          <div className="md:pr-12">
          <div className="flex flex-row gap-6 items-center">
            <div className="text-primary-bg p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-200">
              <i className="fas fa-compass text-xl"></i>
            </div>
            <h3 className="text-3xl mb-6 font-semibold leading-normal">
              {t("whileSailingHeader")}
            </h3>
          </div>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {t("whileSailingText")}
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-bg bg-blue-200 mr-3">
                      <i className="fa-solid fa-anchor"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      {t("whileSailingSubtext1")}
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-bg bg-blue-200 mr-3">
                      <i className="fa-solid fa-ship"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      {t("whileSailingSubtext2")}
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-bg bg-blue-200 mr-3">
                      <i className="fa-solid fa-water"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      {t("whileSailingSubtext3")}
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tertiary;
