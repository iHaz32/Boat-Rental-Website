import axios from "axios";

export const checkInput = (formData) => {
  const { fullName, phoneNumber } = formData;
  const errors = {};
  if (!fullName || /\d/.test(fullName) || /[^a-zA-Z\s]/.test(fullName)) {
    errors.fullName = "Full Name should not contain numbers or symbols.";
  }

  if (
    !phoneNumber ||
    !/^\d+$/.test(phoneNumber) ||
    phoneNumber.length < 4 ||
    phoneNumber.length > 20
  ) {
    errors.phoneNumber = "Phone Number is invalid.";
  }

  return errors;
};

export const editInput = (formData, finalData, boatId) => {
  finalData = { ...formData };
  finalData.boatId = boatId;

  const year = formData.date.getFullYear();
  const month = formData.date.getMonth() + 1;
  const day = formData.date.getDate();

  finalData.date = `${year}-${String(month).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;

  return finalData;
};

export const sendInput = async (finalData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/bookings/addBooking",
      finalData
    );
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
