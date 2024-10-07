import React from "react";
import { useTranslation } from "react-i18next";

const License = () => {
  const { t } = useTranslation("boatDisplay");

  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg flex items-start gap-4">
      <i className="fas fa-lightbulb text-blue-500 text-4xl mt-1 flex-shrink-0"></i>

      <div>
        <p className="text-blue-700 font-semibold text-lg">
          {t("boatsAndLicense.tipName")}
        </p>
        <p className="text-blue-700 text-lg">
          {t("boatsAndLicense.tipUnder30")}
          <br />
          {t("boatsAndLicense.tipOver30")}
          <br />
        </p>
      </div>
    </div>
  );
};

export default License;
