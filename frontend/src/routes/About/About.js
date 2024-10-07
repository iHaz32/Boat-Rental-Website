import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url(data:image/jpeg;base64,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)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl font-bold mb-6"
          >
            {t("header.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-300 text-lg"
          >
            {t("header.subtitle")}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Section 1: Our Origins */}
        <div className="mb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              {t("section1.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("section1.content")}
            </p>
          </div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://www.kinsternahotel.gr/app/uploads/sites/101/2022/06/Ntamos-beach-Kinsterna-boat-3.jpg"              
              alt="Our Origins"
              className="rounded-lg shadow-lg max-h-56 object-cover w-full"
            />
          </motion.div>
        </div>

        {/* Section 2: Our History */}
        <div className="mb-16 flex flex-col-reverse md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://www.myboatthassos.gr/images/carousel/slide-02.webp"              
              alt="Our History"
              className="rounded-lg shadow-lg max-h-56 object-cover w-full"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              {t("section2.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("section2.content")}
            </p>
          </div>
        </div>

        {/* Section 3: Our Mission */}
        <div className="mb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              {t("section3.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("section3.content")}
            </p>
          </div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://www.sea-arrow.gr/images/1-paros-slider-1.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg max-h-56 object-cover w-full"
            />
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            {t("section4.title")}
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9700047599083!2d23.316354215636253!3d40.16649777939343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a84596a3edb5a9%3A0xa80c751136e6f203!2sChalkidiki%2C%20Greece!5e0!3m2!1sen!2sus!4v1630646887807!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
