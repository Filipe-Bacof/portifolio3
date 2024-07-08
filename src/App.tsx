import { useState } from "react";
import { Language } from "./interfaces/Languages.interface";
import { isLanguage } from "./utils/languageFunctions";
import { AvailablePages } from "./interfaces/Pages.interface";
import { getTitleOfPage } from "./utils/pageFunctions";
import "./styles/App.sass";
import Header from "./components/Header";
import Home from "./pages/Home";
import Professional from "./pages/Professional";
import Academic from "./pages/Academic";
import Footer from "./components/Footer";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const localStorageLanguage = localStorage.getItem("selectedLanguage");
  const [page, setPage] = useState<AvailablePages>(0);
  const [language, setLanguage] = useState<Language>(
    localStorageLanguage && isLanguage(localStorageLanguage)
      ? localStorageLanguage
      : "ptbr"
  );

  return language ? (
    <div className="main-content">
      <Header
        language={language}
        handleChangeLanguage={(newLanguage: Language) =>
          setLanguage(newLanguage)
        }
      />
      <div className="page-content">
        {page === 0 && <Home language={language} setPage={setPage} />}
        {page === 1 && <Professional language={language} />}
        {page === 2 && <Academic language={language} />}
        {page === 3 && <Personal language={language} />}
        {page === 4 && <Projects language={language} />}
        {page === 5 && <Contact language={language} />}
      </div>
      <Footer
        page={page}
        title={getTitleOfPage(page, language)}
        setPage={setPage}
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
