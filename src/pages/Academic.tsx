import AcademicInfo from "../components/AcademicInfo";
import { BorderPhoto } from "../components/BorderPhoto";
import CurrentlyStudying from "../components/CurrentlyStudying";
import Languages from "../components/Languages";
import type { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type AcademicProps = {
  language: Language;
};

export default function Academic({ language }: AcademicProps) {
  return (
    <>
      <div className="main-img">
        <BorderPhoto
          src="/badasspic.jpg"
          alt={getTranslatedInformation(language, "academic.imageAlt")}
          // Futuramente vou colocar uma foto minha no dia da formatura aqui, ainda não finalizei o curso kk
        />
      </div>
      <AcademicInfo language={language} />
      <Languages language={language} />
      <CurrentlyStudying language={language} />
    </>
  );
}
