import { BorderPhoto } from "../components/BorderPhoto";
import CatsAndMemories from "../components/CatsAndMemories";
import WhoIAm from "../components/WhoIAm";
import type { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

type PersonalProps = {
  language: Language;
};

export default function Personal({ language }: PersonalProps) {
  return (
    <>
      <div className="main-img">
        <BorderPhoto
          src="/guitar.jpg"
          alt={getTranslatedInformation(language, "personal.imageAlt")}
        />
      </div>
      <WhoIAm language={language} />
      <CatsAndMemories language={language} />
    </>
  );
}
