import { useState, useEffect } from "react";
import arIcon from "../assets/flags-icons/ar.svg";
import beIcon from "../assets/flags-icons/be.svg";
import chIcon from "../assets/flags-icons/ch.svg";
import czIcon from "../assets/flags-icons/cz.svg";
import deIcon from "../assets/flags-icons/de.svg";
import diIcon from "../assets/flags-icons/di.svg";
import enIcon from "../assets/flags-icons/en.svg";
import esIcon from "../assets/flags-icons/es.svg";
import etIcon from "../assets/flags-icons/et.svg";
import fiIcon from "../assets/flags-icons/fi.svg";
import frIcon from "../assets/flags-icons/fr.svg";
import grIcon from "../assets/flags-icons/gr.svg";
import heIcon from "../assets/flags-icons/he.svg";
import hiIcon from "../assets/flags-icons/hi.svg";
import huIcon from "../assets/flags-icons/hu.svg";
import indIcon from "../assets/flags-icons/ind.svg";
import itIcon from "../assets/flags-icons/it.svg";
import jaIcon from "../assets/flags-icons/ja.svg";
import koIcon from "../assets/flags-icons/ko.svg";
import laIcon from "../assets/flags-icons/la.svg";
import neIcon from "../assets/flags-icons/ne.svg";
import noIcon from "../assets/flags-icons/no.svg";
import poIcon from "../assets/flags-icons/po.svg";
import ptbrIcon from "../assets/flags-icons/pt-br.svg";
import ptptIcon from "../assets/flags-icons/pt-pt.svg";
import ruIcon from "../assets/flags-icons/ru.svg";
import swIcon from "../assets/flags-icons/sw.svg";
import taIcon from "../assets/flags-icons/ta.svg";
import tuIcon from "../assets/flags-icons/tu.svg";
import zuIcon from "../assets/flags-icons/zu.svg";
import "../styles/components/LanguageSwitcher.sass";
import { Language } from "../interfaces/Languages.interface";
import {
  getTranslatedInformation,
  isLanguage,
} from "../utils/languageFunctions";
import * as Popover from "@radix-ui/react-popover";
import BorderPhoto from "./BorderPhoto";

type LanguageSwitcherProps = {
  selected: Language;
  onChange: (language: Language) => void;
};

export default function LanguageSwitcher({
  selected,
  onChange,
}: LanguageSwitcherProps) {
  const [hoveredLanguage, setHoveredLanguage] = useState<string>("");

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
    {
      code: "ar",
      name: getTranslatedInformation(selected, "global.language.ar"),
      icon: arIcon,
    },
    {
      code: "et",
      name: getTranslatedInformation(selected, "global.language.et"),
      icon: etIcon,
    },
    {
      code: "sw",
      name: getTranslatedInformation(selected, "global.language.sw"),
      icon: swIcon,
    },
    {
      code: "cz",
      name: getTranslatedInformation(selected, "global.language.cz"),
      icon: czIcon,
    },
    {
      code: "di",
      name: getTranslatedInformation(selected, "global.language.di"),
      icon: diIcon,
    },
    {
      code: "fi",
      name: getTranslatedInformation(selected, "global.language.fi"),
      icon: fiIcon,
    },
    {
      code: "gr",
      name: getTranslatedInformation(selected, "global.language.gr"),
      icon: grIcon,
    },
    {
      code: "he",
      name: getTranslatedInformation(selected, "global.language.he"),
      icon: heIcon,
    },
    {
      code: "hu",
      name: getTranslatedInformation(selected, "global.language.hu"),
      icon: huIcon,
    },
    {
      code: "la",
      name: getTranslatedInformation(selected, "global.language.la"),
      icon: laIcon,
    },
    {
      code: "ne",
      name: getTranslatedInformation(selected, "global.language.ne"),
      icon: neIcon,
    },
    {
      code: "po",
      name: getTranslatedInformation(selected, "global.language.po"),
      icon: poIcon,
    },
    {
      code: "ta",
      name: getTranslatedInformation(selected, "global.language.ta"),
      icon: taIcon,
    },
    {
      code: "tu",
      name: getTranslatedInformation(selected, "global.language.tu"),
      icon: tuIcon,
    },
    {
      code: "zu",
      name: getTranslatedInformation(selected, "global.language.zu"),
      icon: zuIcon,
    },
  ];

  const handleLanguageChange = (languageCode: Language) => {
    onChange(languageCode);
    localStorage.setItem("selectedLanguage", languageCode);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && storedLanguage !== selected) {
      onChange(isLanguage(storedLanguage) ? storedLanguage : "ptbr");
    }
  }, [selected, onChange]);

  return (
    <div className="language-switcher">
      <Popover.Root>
        <Popover.Trigger>
          <BorderPhoto
            src={languages.find((lang) => lang.code === selected)?.icon || ""}
            alt={selected}
            side="left"
            text={getTranslatedInformation(selected, "global.language.title")}
            classes="selected-language"
            xsmall
          />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className="popover-content">
            <Popover.Arrow />
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
                  onMouseEnter={() =>
                    setHoveredLanguage(
                      getTranslatedInformation(
                        selected,
                        `global.language.${lang.code}`
                      )
                    )
                  }
                  onMouseLeave={() => setHoveredLanguage("")}
                />
              ))}
            </div>
            <p className="hovered-language">{hoveredLanguage}</p>
            <span className="warning">
              {getTranslatedInformation(selected, "global.language.warning")}
            </span>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
