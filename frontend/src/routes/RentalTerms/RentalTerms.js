import React from "react";
import { useTranslation } from "react-i18next";

const RentalTerms = () => {
  const { t } = useTranslation("rentalTerms");

  return (
    <div className="min-h-screen bg-white">

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("header.title")}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{t("header.subtitle")}</p>
        </div>
        
        {/* Section 1 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section1.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section1.content")}</p>
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section2.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section2.content")}</p>
        </div>

        {/* Section 3 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section3.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section3.content")}</p>
        </div>

        {/* Section 4 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section4.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section4.content")}</p>
        </div>

        {/* Section 5 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section5.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section5.content")}</p>
        </div>

        {/* Section 6 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section6.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section6.content")}</p>
        </div>

        {/* Section 7 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section7.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section7.content")}</p>
        </div>

        {/* Section 8 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section8.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section8.content")}</p>
        </div>

        {/* Section 9 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section9.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section9.content")}</p>
        </div>

        {/* Section 10 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("section10.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t("section10.content")}</p>
        </div>

        {/* Conclusion Section */}
        <div className="border-t pt-8">
          <p className="text-lg text-gray-700">{t("conclusion.text")}</p>
          <p className="text-lg text-gray-700 mt-6 font-semibold">{t("conclusion.signature")}</p>
        </div>
      </div>
    </div>
  );
};

export default RentalTerms;
