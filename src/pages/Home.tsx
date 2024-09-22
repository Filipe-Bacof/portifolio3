import { BorderPhoto } from "../components/BorderPhoto";
import HomeShortcuts from "../components/HomeShortcuts";
import Typewriter from "../components/Typewriter";
import type { Language } from "../interfaces/Languages.interface";
import type { AvailablePages } from "../interfaces/Pages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type HomeProps = {
  language: Language;
  setPage: (page: AvailablePages) => void;
};

export default function Home({ language, setPage }: HomeProps) {
  return (
    <>
      <div className="main-img">
        <BorderPhoto
          src="/profilepic.jpg"
          alt={getTranslatedInformation(language, "home.imageAlt")}
        />
      </div>
      <Typewriter
        header1={getTranslatedInformation(language, "home.header.header1")}
        header2={getTranslatedInformation(language, "home.header.header2")}
        header3={getTranslatedInformation(language, "home.header.header3")}
        language={language}
      />
      <HomeShortcuts language={language} setPage={setPage} />
    </>
  );
}
