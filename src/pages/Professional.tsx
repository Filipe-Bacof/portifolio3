import CirclePhoto from "../components/CirclePhoto";
import DownloadCV from "../components/DownloadCV";
import Experiences from "../components/Experiences";
import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type ProfessionalProps = {
  language: Language;
};

export default function Professional({ language }: ProfessionalProps) {
  return (
    <>
      <CirclePhoto
        src="/workingpic.jpg"
        alt={getTranslatedInformation(language, "career.imageAlt")}
      />
      <Experiences language={language} />
      <DownloadCV language={language} />
    </>
  );
}
