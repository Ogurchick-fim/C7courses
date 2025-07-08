import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "lucide-react"; // Optional icon

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentLang = i18n.language;

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setDropdownOpen(false);
  };

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "kg", label: "KG" }
  ];

  return (
    <div className="relative inline-block">
      <div onClick={toggleDropdown} className="flex items-center cursor-pointer select-none">
        <span className="font-bold text-white text-[18px] md:text-[24px] tracking-tight">
          {currentLang.toUpperCase()}
        </span>
        <ChevronDownIcon className="ml-2 h-4 w-4 text-white" />
      </div>

      {dropdownOpen && (
        <div className="absolute top-full mt-2 w-32 bg-white rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;