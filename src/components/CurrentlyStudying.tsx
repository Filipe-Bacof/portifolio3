import IconSolidity from "../assets/icons/techs/IconSolidity";
import { Language } from "../interfaces/Languages.interface";
import "../styles/components/CurrentlyStudying.sass";
import { getTranslatedInformation } from "../utils/languageFunctions";
import Tooltip from "./Tooltip";

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
      <Tooltip
        text={getTranslatedInformation(
          language,
          "academic.currentlyStudying.description"
        )}
        side="top"
      >
        <a
          href="https://github.com/Filipe-Bacof/FloodHelp-Web3Week/blob/main/FloodHelp.sol"
          target="_blank"
          className="button-studying"
        >
          <IconSolidity />
          <p>
            {getTranslatedInformation(
              language,
              "academic.currentlyStudying.item"
            )}
          </p>
        </a>
      </Tooltip>
    </div>
  );
}
