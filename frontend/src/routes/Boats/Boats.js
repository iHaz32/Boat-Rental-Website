import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Boats() {
  const { t } = useTranslation();
  const [boats, setBoats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/boats/getAllPreview"
        );
        setBoats(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBoats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {boats.map((boat) => (
          <div
            key={boat.slug}
            className="m-5 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={boat.image}
              alt={boat.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{boat.name}</h3>
                <p className="text-lg font-bold text-primary-bg">
                  {boat.technicalFeatures.peopleCapacity} {t("people")}
                </p>
              </div>
              <p className="text-gray-700 mb-8">{boat.description}</p>

              <Link
                className="bg-primary-bg bg-opacity-90 text-white py-2 px-4 rounded-lg shadow-md hover:bg-opacity-100 transition duration-300"
                to={`/boats/${boat.slug}`}
              >
                {t("Rent Now")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boats;
