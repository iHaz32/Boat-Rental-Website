import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CheckButton() {
  const { t } = useTranslation("homePage"); // Specify the namespace

  return (
    <div className="flex justify-center items-center">
      <Link
        className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform duration-500 hover:scale-110 hover:shadow-2xl"
        to="/boats"
      >
        {t("adventureButtonText")}
      </Link>
    </div>
  );
}

export default CheckButton;
