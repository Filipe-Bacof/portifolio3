import { useState, useEffect } from "react";
import deIcon from "../assets/flags-icons/de.svg";
import enIcon from "../assets/flags-icons/en.svg";
import esIcon from "../assets/flags-icons/es.svg";
import frIcon from "../assets/flags-icons/fr.svg";
import itIcon from "../assets/flags-icons/it.svg";
import ptIcon from "../assets/flags-icons/pt.svg";
import "../styles/components/LanguageSwitcher.sass";
import { Language } from "../interfaces/Languages.interface";
import {
  getTranslatedInformation,
  isLanguage,
} from "../utils/languageFunctions";
import Tooltip from "./Tooltip";

type LanguageSwitcherProps = {
  selected: Language;
  onChange: (language: Language) => void;
};

export default function LanguageSwitcher({
  selected,
  onChange,
}: LanguageSwitcherProps) {
  const [showPanel, setShowPanel] = useState(false);

  type LanguageItem = {
    code: Language;
    name: string;
    icon: string;
  };

  const languages: LanguageItem[] = [
    {
      code: "de",
      name: getTranslatedInformation(selected, "global.language.de"),
      icon: deIcon,
    },
    {
      code: "en",
      name: getTranslatedInformation(selected, "global.language.en"),
      icon: enIcon,
    },
    {
      code: "es",
      name: getTranslatedInformation(selected, "global.language.es"),
      icon: esIcon,
    },
    {
      code: "fr",
      name: getTranslatedInformation(selected, "global.language.fr"),
      icon: frIcon,
    },
    {
      code: "it",
      name: getTranslatedInformation(selected, "global.language.it"),
      icon: itIcon,
    },
    {
      code: "pt",
      name: getTranslatedInformation(selected, "global.language.pt"),
      icon: ptIcon,
    },
  ];

  const togglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleLanguageChange = (languageCode: Language) => {
    onChange(languageCode);
    setShowPanel(false);
    localStorage.setItem("selectedLanguage", languageCode);
    // window.location.reload();
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && storedLanguage !== selected) {
      onChange(isLanguage(storedLanguage) ? storedLanguage : "pt");
    }
  }, [selected, onChange]);

  return (
    <div className="language-switcher">
      <Tooltip
        side="left"
        text={getTranslatedInformation(selected, "global.language.title")}
      >
        <img
          src={languages.find((lang) => lang.code === selected)?.icon}
          alt={selected}
          className="selected-language"
          onClick={togglePanel}
        />
      </Tooltip>
      {showPanel && (
        <div className="language-panel">
          {languages.map((lang) => (
            <img
              key={lang.code}
              src={lang.icon}
              alt={lang.code}
              className={`language-icon ${
                lang.code === selected ? "selected" : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
