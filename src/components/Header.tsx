import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/components/Header.sass";
import Tooltip from "./Tooltip";

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
        <Tooltip text={getTranslatedInformation(language, "global.home")}>
          <img
            className="image"
            src="/icon.png"
            alt={getTranslatedInformation(language, "global.home")}
          />
        </Tooltip>
      </a>
      <h1>Filipe Bacof Desenvolvedor Full-Stack</h1>
      <LanguageSwitcher selected={language} onChange={handleChangeLanguage} />
    </header>
  );
}
