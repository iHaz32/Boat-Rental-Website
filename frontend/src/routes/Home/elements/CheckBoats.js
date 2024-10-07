import React from "react";
import { useTranslation } from "react-i18next";
import CheckButton from "./CheckButton";

function Quaternary() {
  const { t } = useTranslation("homePage"); // Specify the namespace

  return (
    <div className="container mx-auto px-4 py-24 pb-16">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
              {t('adventureHeading')}
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              {t('adventureText')}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
                <CheckButton />
            </div>
          </div>
        </div>
  );
}

export default Quaternary;
