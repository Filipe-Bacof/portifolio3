import { useState } from "react";
import CirclePhoto from "./components/CirclePhoto";
import Typewriter from "./components/Typewriter";
import "./styles/App.sass";
import { Language } from "./interfaces/Languages.interface";
import {
  getTranslatedInformation,
  isLanguage,
} from "./utils/languageFunctions";
import Header from "./components/Header";

export default function App() {
  const localStorageLanguage = localStorage.getItem("selectedLanguage");
  const [language, setLanguage] = useState<Language>(
    localStorageLanguage && isLanguage(localStorageLanguage)
      ? localStorageLanguage
      : "pt"
  );

  return language ? (
    <div className="main-content">
      <Header
        language={language}
        handleChangeLanguage={(newLanguage: Language) =>
          setLanguage(newLanguage)
        }
      />
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
    </div>
  ) : (
    <p>loading...</p>
  );
}
