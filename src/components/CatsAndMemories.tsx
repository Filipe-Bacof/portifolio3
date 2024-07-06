import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/CatsAndMemories.sass";
import ButtonLink from "./ButtonLink";
import IconCounterClockwiseClock from "../assets/icons/IconCounterClockwiseClock";

type CatsAndMemoriesProps = {
  language: Language;
};

export default function CatsAndMemories({ language }: CatsAndMemoriesProps) {
  return (
    <>
      <ButtonLink
        href="https://explorer-spacetime-black.vercel.app/"
        text={getTranslatedInformation(language, "personal.button.description")}
        side="top"
      >
        <IconCounterClockwiseClock />
        <p>{getTranslatedInformation(language, "personal.button.title")}</p>
      </ButtonLink>
    </>
  );
}
