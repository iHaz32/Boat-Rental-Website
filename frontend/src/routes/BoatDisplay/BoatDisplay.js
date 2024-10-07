import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Form from "./elements/Form";
import ImageCarousel from "./elements/ImageCarousel";
import License from "./elements/License";
import CallUs from "./elements/CallUs";
import NoPage from "../NoPage";

const BoatDisplay = () => {
  const { t } = useTranslation("boatDisplay");

  const { slug } = useParams();
  const [boat, setBoat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoat = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/boats/${slug}`
        );
        setBoat(response.data);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBoat();
  }, [slug]);

  if (loading)
    return (
      <div className="text-center text-xl font-semibold mt-20">Loading...</div>
    );
  if (error) return <NoPage error={error} />;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden rounded-lg mb-16">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${boat.image})`,
          }}
        >
          <span className="absolute inset-0 bg-black opacity-40"></span>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-8">
          <h1 className="text-5xl font-extrabold mb-2">{boat.name}</h1>
          <p className="text-xl">{boat.description}</p>
        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Features Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t("technicalFeatures.name")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-3 px-6 text-left">
                    {t("technicalFeatures.feature")}
                  </th>
                  <th className="py-3 px-6 text-left">
                    {t("technicalFeatures.detail")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(boat.technicalFeatures).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="py-3 px-6 text-gray-700 font-medium">
                      {t(`technicalFeatures.${key}.0`)}
                    </td>
                    <td className="py-3 px-6 text-gray-600">
                      {value}
                      {t(`technicalFeatures.${key}.1`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Equipment Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t("equipment.name")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-3 px-6 text-left">
                    {t("equipment.equipment")}
                  </th>
                  <th className="py-3 px-6 text-left">
                    {t("equipment.available")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(boat.equipment).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="py-3 px-6 text-gray-700 font-medium">
                      {t(`equipment.${key}`)}
                    </td>
                    <td className="py-3 px-6 text-gray-600">
                      {value ? t("yes") : t("no")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Prices Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t("prices.name")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-3 px-6 text-left">
                    {t("prices.priceType")}
                  </th>
                  <th className="py-3 px-6 text-left">{t("prices.amount")}</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(boat.prices).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="py-3 px-6 text-gray-700 font-medium">
                      {t(`prices.${key}.0`)}
                    </td>
                    <td className="py-3 px-6 text-gray-600">
                      {value}
                      {t(`prices.${key}.1`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Carousel - License - Call - Form Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto mb-16">
          <div className="flex flex-col gap-10 w-full max-w-4xl">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t("boatGallery.name")}
              </h2>
              <ImageCarousel boat={boat} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t("boatsAndLicense.name")}
              </h2>

              <License />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t("callUs.name")}
              </h2>

              <CallUs />
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t("onlineBooking.name")}
            </h2>
            <Form boat={boat} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BoatDisplay;
