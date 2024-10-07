import React from "react";
import { useTranslation } from "react-i18next";

const CallUs = () => {
  const { t } = useTranslation("boatDisplay");

  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg flex items-start gap-4">
      <i className="fas fa-phone text-blue-500 text-4xl mt-1 flex-shrink-0"></i>

      <div>
        <p className="text-blue-700 font-semibold text-lg">
          {t("callUs.infoName")}
        </p>
        <p className="text-blue-700 text-lg">{t("callUs.infoDescription")}</p>
      </div>
    </div>
  );
};

export default CallUs;
