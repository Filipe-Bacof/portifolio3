import type { Language } from "../interfaces/Languages.interface";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/components/Header.sass";

type HeaderProps = {
  language: Language;
  handleChangeLanguage: (language: Language) => void;
};

export default function Header({
  language,
  handleChangeLanguage,
}: HeaderProps) {
  return (
    <>
      <h1 className="title-seo">Filipe Bacof Desenvolvedor Full-Stack</h1>
      <LanguageSwitcher selected={language} onChange={handleChangeLanguage} />
    </>
  );
}
