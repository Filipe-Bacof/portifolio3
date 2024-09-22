import type { Language, LanguageItem } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/Languages.sass";
import ptbrIcon from "../assets/flags-icons/pt-br.svg";
import enIcon from "../assets/flags-icons/en.svg";
import esIcon from "../assets/flags-icons/es.svg";
import { BorderPhoto } from "./BorderPhoto";

type LanguagesProps = {
  language: Language;
};

export default function Languages({ language }: LanguagesProps) {
  const datapics = [ptbrIcon, enIcon, esIcon];
  const data: LanguageItem[] = getTranslatedInformation(
    language,
    "academic.languages"
  );

  return (
    <div className="language-content">
      {data.map((lang, index) => (
        <BorderPhoto
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          src={datapics[index]}
          alt={lang.en}
          text={`${lang.en} ${lang.level}`}
          side="bottom"
          classes={`${language === "ptbr" && index === 0 ? "invisible" : ""}`}
          xsmall
        />
      ))}
    </div>
  );
}
