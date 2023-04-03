import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

export default function Toggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <div className="flex items-center relative">
      <button
        className={`relative inline-block w-12 h-6 bg-gray-300 rounded-full px-1 transition-all duration-300 focus:outline-none ${
          language === "en" ? "bg-green-500" : "bg-blue-500"
        }`}
        onClick={toggleLanguage}
      >
        <span
          className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${
            language === "en" ? "translate-x-6" : ""
          }`}
        ></span>
      </button>
      <span className="ml-2 text-gray-700 absolute left-12">
        {language === "en" ? "Eng" : "Fra"}
      </span>
    </div>
  );
}
