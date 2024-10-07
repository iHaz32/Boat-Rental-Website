import React from 'react';
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <button
        onClick={() => changeLanguage('en')}
        className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        <span class="fi fi-gb"></span>
      </button>
      <button
        onClick={() => changeLanguage('gr')}
        className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        <span class="fi fi-gr"></span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;