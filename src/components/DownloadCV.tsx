import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import IconFileDownload from "../assets/icons/IconFileDownload";
import "../styles/components/DownloadCV.sass";

type DownloadCVProps = {
  language: Language;
};

export default function DownloadCV({ language }: DownloadCVProps) {
  return (
    <>
      <h3>{getTranslatedInformation(language, "career.download.title")}</h3>
      <div className="buttons-content">
        <a
          href="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/curriculo-filipe-bacof.pdf"
          target="_blank"
          className="button-download"
        >
          {getTranslatedInformation(language, "career.download.pt")}{" "}
          <IconFileDownload />
        </a>
        <a
          href="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/resume-filipe-bacof.pdf"
          target="_blank"
          className="button-download"
        >
          {getTranslatedInformation(language, "career.download.en")}{" "}
          <IconFileDownload />
        </a>
      </div>
    </>
  );
}
