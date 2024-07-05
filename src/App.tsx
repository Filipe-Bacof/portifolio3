import { useState } from "react";
import "./styles/App.sass";
import { Language } from "./interfaces/Languages.interface";
import { isLanguage } from "./utils/languageFunctions";
import Header from "./components/Header";
import Home from "./pages/Home";
import { AvailablePages } from "./interfaces/Pages.interface";
import Footer from "./components/Footer";
import { getTitleOfPage } from "./utils/pageFunctions";

export default function App() {
  const localStorageLanguage = localStorage.getItem("selectedLanguage");
  const [page, setPage] = useState<AvailablePages>(0);
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
      {page === 0 && <Home language={language} />}
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
