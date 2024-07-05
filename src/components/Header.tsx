import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/components/Header.sass";
import BorderPhoto from "./BorderPhoto";

type HeaderProps = {
  language: Language;
  handleChangeLanguage: (language: Language) => void;
};

export default function Header({
  language,
  handleChangeLanguage,
}: HeaderProps) {
  return (
    <header className="header-content">
      <a href="/" className="link">
        <BorderPhoto
          src="/icon.png"
          alt={getTranslatedInformation(language, "global.home")}
          text={getTranslatedInformation(language, "global.home")}
          side="right"
          xsmall
        />
      </a>
      <h1>Filipe Bacof Desenvolvedor Full-Stack</h1>
      <LanguageSwitcher selected={language} onChange={handleChangeLanguage} />
    </header>
  );
}
