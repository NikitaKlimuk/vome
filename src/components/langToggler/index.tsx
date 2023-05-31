import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

export const LangToggler: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  console.log(currentLanguage);

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language && currentLanguage !== language) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    }
  }, [currentLanguage, i18n]);

  return (
    <div className="toggler">
      <button
        className={`toggler__select ${
          currentLanguage === "en" ? "" : "notSelected"
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        En
      </button>
      <button
        className={`toggler__select ${
          currentLanguage === "pl" ? "" : "notSelected"
        }`}
        onClick={() => handleLanguageChange("pl")}
      >
        Pl
      </button>
    </div>
  );
};
