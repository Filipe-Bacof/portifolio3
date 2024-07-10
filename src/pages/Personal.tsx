import BorderPhoto from "../components/BorderPhoto";
import CatsAndMemories from "../components/CatsAndMemories";
import WhoIAm from "../components/WhoIAm";
import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type PersonalProps = {
  language: Language;
};

export default function Personal({ language }: PersonalProps) {
  return (
    <>
      <BorderPhoto
        classes="main-img"
        src="/guitar.jpg"
        alt={getTranslatedInformation(language, "personal.imageAlt")}
      />
      <WhoIAm language={language} />
      <CatsAndMemories language={language} />
    </>
  );
}
