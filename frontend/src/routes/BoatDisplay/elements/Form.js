import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { checkInput, editInput, sendInput } from "./formSubmitter";

const Form = ({ boat }) => {
  const { t } = useTranslation("boatDisplay");

  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    preferredCallTime: "",
    date: new Date(),
  });
  const [dataReady, setDataReady] = useState(false);
  const [finalData, setFinalData] = useState(null);
  const [inputError, setInputError] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" }); // New state for messages

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validationErrors = checkInput(formData); // Check input validity
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors
      setInputError({});
      setFinalData(editInput(formData, finalData, boat._id));
      setDataReady(true); // Send the data to the server
    } else {
      // Validation errors
      setInputError(validationErrors);
    }
  };

  useEffect(() => {
    const send = async () => {
      if (dataReady) {
        const res = await sendInput(finalData);
        setDataReady(false); // Back to original state

        if (res.data.status === "success") {
          setMessage({ text: res.data.message, type: "success" });
        } else {
          setMessage({ text: res.data.message, type: "error" });
        }
      }
    };

    send();
  }, [dataReady, finalData]);

  return (
    <div className="w-full mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden">
      {/* Background Image Header */}
      <section className="relative w-full h-52 overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(https://plus.unsplash.com/premium_photo-1677439594068-22e5d06762f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9ybmluZyUyMGJlYWNofGVufDB8fDB8fHww)`,
          }}
        >
          <span className="absolute inset-0 bg-black opacity-40"></span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-4xl font-bold text-primary-text">
            {t("onlineBooking.headerName")}
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            {t("onlineBooking.headerDescription")}
          </p>
        </div>
      </section>

      {/* Form Body */}
      <form onSubmit={handleFormSubmit} className="p-8 bg-white">
        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold text-lg mb-3">
            {t("onlineBooking.fullName")}
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          {inputError.fullName && (
            <p className="text-red-500 text-sm">{inputError.fullName}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold text-lg mb-3">
            {t("onlineBooking.emailAddress")}
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold text-lg mb-3">
            {t("onlineBooking.phoneNumber")}
          </label>
          <input
            type="tel"
            name="phoneNumber"
            className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="123-456-789"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          {inputError.phoneNumber && (
            <p className="text-red-500 text-sm">{inputError.phoneNumber}</p>
          )}
        </div>

        {/* Preferred Call Time */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold text-lg mb-3">
            {t("onlineBooking.preferredCallTime")}
          </label>
          <select
            name="preferredCallTime"
            className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.preferredCallTime}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              {t("onlineBooking.selectPreferredCallTime")}
            </option>
            <option value="morning">{t("onlineBooking.timeMorning")}</option>
            <option value="afternoon">
              {t("onlineBooking.timeAfternoon")}
            </option>
            <option value="evening">{t("onlineBooking.timeEvening")}</option>
            <option value="night">{t("onlineBooking.timeNight")}</option>
          </select>
        </div>

        {/* Date Picker */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold text-lg mb-3">
            {t("onlineBooking.chooseYourDate")}
          </label>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="Pick a date"
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              required
            />
            <svg
              className="absolute top-3 right-4 w-6 h-6 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10m-6 4h6m-7 4h6"
              />
            </svg>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg transition hover:bg-black"
        >
          {t("onlineBooking.submitButton")}
        </button>

        {/* Display message */}
        {message.text && (
          <div
            className={`mt-4 p-4 rounded-lg text-white ${
              message.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
