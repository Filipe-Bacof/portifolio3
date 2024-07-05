import CirclePhoto from "../components/CirclePhoto";
import HomeShortcuts from "../components/HomeShortcuts";
import Typewriter from "../components/Typewriter";
import { Language } from "../interfaces/Languages.interface";
import { AvailablePages } from "../interfaces/Pages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type HomeProps = {
  language: Language;
  setPage: (page: AvailablePages) => void;
};

export default function Home({ language, setPage }: HomeProps) {
  return (
    <>
      <CirclePhoto
        href="https://www.linkedin.com/in/filipe-bacof/"
        src="/profilepic.jpg"
        alt={getTranslatedInformation(language, "home.imageAlt")}
      />
      <Typewriter
        header1={getTranslatedInformation(language, "home.header.header1")}
        header2={getTranslatedInformation(language, "home.header.header2")}
        header3={getTranslatedInformation(language, "home.header.header3")}
        language={language}
      />
      <HomeShortcuts setPage={setPage} />
    </>
  );
}
