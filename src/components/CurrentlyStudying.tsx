import IconSolidity from "../assets/icons/techs/IconSolidity";
import { Language } from "../interfaces/Languages.interface";
import "../styles/components/CurrentlyStudying.sass";
import { getTranslatedInformation } from "../utils/languageFunctions";
import ButtonLink from "./ButtonLink";

type CurrentlyStudyingProps = {
  language: Language;
};

export default function CurrentlyStudying({
  language,
}: CurrentlyStudyingProps) {
  return (
    <div className="studying-content">
      <h3>
        {getTranslatedInformation(language, "academic.currentlyStudying.title")}
      </h3>
      <ButtonLink
        href="https://github.com/Filipe-Bacof/FloodHelp-Web3Week/blob/main/FloodHelp.sol"
        text={getTranslatedInformation(
          language,
          "academic.currentlyStudying.description"
        )}
        side="top"
      >
        <IconSolidity />
        <p>
          {getTranslatedInformation(
            language,
            "academic.currentlyStudying.item"
          )}
        </p>
      </ButtonLink>
    </div>
  );
}
