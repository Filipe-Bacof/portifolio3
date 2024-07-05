import { useState, useEffect } from "react";
import beIcon from "../assets/flags-icons/be.svg";
import chIcon from "../assets/flags-icons/ch.svg";
import deIcon from "../assets/flags-icons/de.svg";
import enIcon from "../assets/flags-icons/en.svg";
import esIcon from "../assets/flags-icons/es.svg";
import frIcon from "../assets/flags-icons/fr.svg";
import hiIcon from "../assets/flags-icons/hi.svg";
import indIcon from "../assets/flags-icons/ind.svg";
import itIcon from "../assets/flags-icons/it.svg";
import jaIcon from "../assets/flags-icons/ja.svg";
import koIcon from "../assets/flags-icons/ko.svg";
import noIcon from "../assets/flags-icons/no.svg";
import ptbrIcon from "../assets/flags-icons/pt-br.svg";
import ptptIcon from "../assets/flags-icons/pt-pt.svg";
import ruIcon from "../assets/flags-icons/ru.svg";
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
      code: "ptbr",
      name: getTranslatedInformation(selected, "global.language.ptbr"),
      icon: ptbrIcon,
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
      code: "de",
      name: getTranslatedInformation(selected, "global.language.de"),
      icon: deIcon,
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
      code: "be",
      name: getTranslatedInformation(selected, "global.language.be"),
      icon: beIcon,
    },
    {
      code: "ch",
      name: getTranslatedInformation(selected, "global.language.ch"),
      icon: chIcon,
    },
    {
      code: "hi",
      name: getTranslatedInformation(selected, "global.language.hi"),
      icon: hiIcon,
    },
    {
      code: "ind",
      name: getTranslatedInformation(selected, "global.language.ind"),
      icon: indIcon,
    },
    {
      code: "ja",
      name: getTranslatedInformation(selected, "global.language.ja"),
      icon: jaIcon,
    },
    {
      code: "ko",
      name: getTranslatedInformation(selected, "global.language.ko"),
      icon: koIcon,
    },
    {
      code: "no",
      name: getTranslatedInformation(selected, "global.language.no"),
      icon: noIcon,
    },
    {
      code: "ptpt",
      name: getTranslatedInformation(selected, "global.language.ptpt"),
      icon: ptptIcon,
    },
    {
      code: "ru",
      name: getTranslatedInformation(selected, "global.language.ru"),
      icon: ruIcon,
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
      onChange(isLanguage(storedLanguage) ? storedLanguage : "ptbr");
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
        <div className="language-container">
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
          <p>{getTranslatedInformation(selected, "global.language.warning")}</p>
        </div>
      )}
    </div>
  );
}
