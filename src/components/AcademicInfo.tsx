import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/AcademicInfo.sass";

type AcademicInfoProps = {
  language: Language;
};

export default function AcademicInfo({ language }: AcademicInfoProps) {
  return (
    <>
      <h3 className="academic-title">
        {getTranslatedInformation(language, "academic.education.title")}
      </h3>
      <h4 className="academic-course">
        {getTranslatedInformation(language, "academic.education.course")}
      </h4>
      <span className="academic-conclusion">
        {getTranslatedInformation(language, "academic.education.where")} -{" "}
        {getTranslatedInformation(language, "academic.education.conclusion")}
      </span>
    </>
  );
}
