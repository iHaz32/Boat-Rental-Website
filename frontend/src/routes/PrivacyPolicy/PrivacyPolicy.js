import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation("privacyPolicy");

  return (
    <div className="min-h-screen bg-white">
      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("header.title")}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{t("header.subtitle")}</p>
        </div>

        {/* Introduction Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section1.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section1.content")}</p>
        </div>

        {/* Information Collection Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section2.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section2.content")}</p>
        </div>

        {/* Use of Information Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section3.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section3.content")}</p>
        </div>

        {/* Data Sharing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section4.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section4.content")}</p>
        </div>

        {/* Data Security Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section5.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section5.content")}</p>
        </div>

        {/* User Rights Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section6.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section6.content")}</p>
        </div>

        {/* Cookies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section7.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section7.content")}</p>
        </div>

        {/* Changes to Privacy Policy Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section8.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section8.content")}</p>
        </div>

        {/* Contact Information Section */}
        <div className="border-t pt-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("conclusion.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("conclusion.content")}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
