import { AvailablePages } from "../interfaces/Pages.interface";
import "../styles/components/HomeShortcuts.sass";
import IconGithub from "../assets/icons/IconGithub";
import IconEmailOutline from "../assets/icons/IconEmailOutline";
import IconLinkedin from "../assets/icons/IconLinkedin";
import IconWhatsApp from "../assets/icons/IconWhatsApp";
import Tooltip from "./Tooltip";
import { getTranslatedInformation } from "../utils/languageFunctions";
import { Language } from "../interfaces/Languages.interface";

type HomeShortcutsProps = {
  language: Language;
  setPage: (page: AvailablePages) => void;
};

export default function HomeShortcuts({
  language,
  setPage,
}: HomeShortcutsProps) {
  return (
    <div className="shortcuts-container">
      <Tooltip
        text={getTranslatedInformation(language, "home.shortcuts.whatsApp")}
        side="top"
      >
        <a
          href="https://wa.me/5551994456865?text=Ol%C3%A1%20Filipe!%20Cliquei%20no%20link%20que%20est%C3%A1%20no%20seu%20portif%C3%B3lio%2C%20gostaria%20de%20conversar%3F"
          target="_blank"
          className="button"
        >
          <IconWhatsApp className="icon" />
        </a>
      </Tooltip>
      <Tooltip
        text={getTranslatedInformation(language, "home.shortcuts.email")}
        side="top"
      >
        <button
          className="button"
          onClick={() => {
            setPage(5);
          }}
        >
          <IconEmailOutline className="icon" />
        </button>
      </Tooltip>
      <Tooltip
        text={getTranslatedInformation(language, "home.shortcuts.github")}
        side="top"
      >
        <a
          href="https://github.com/Filipe-Bacof"
          target="_blank"
          className="button"
        >
          <IconGithub className="icon" />
        </a>
      </Tooltip>
      <Tooltip
        text={getTranslatedInformation(language, "home.shortcuts.linkedin")}
        side="top"
      >
        <a
          href="https://www.linkedin.com/in/filipe-bacof/"
          target="_blank"
          className="button"
        >
          <IconLinkedin className="icon" />
        </a>
      </Tooltip>
    </div>
  );
}
