import { BorderPhoto } from "../components/BorderPhoto";
import DownloadCV from "../components/DownloadCV";
import Experiences from "../components/Experiences";
import type { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type ProfessionalProps = {
  language: Language;
};

export default function Professional({ language }: ProfessionalProps) {
  return (
    <>
      <div className="main-img">
        <BorderPhoto
          src="/workingpic.jpg"
          alt={getTranslatedInformation(language, "career.imageAlt")}
        />
      </div>
      <Experiences language={language} />
      <DownloadCV language={language} />
    </>
  );
}
