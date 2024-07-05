import { AvailablePages } from "../interfaces/Pages.interface";
import "../styles/components/HomeShortcuts.sass";
import IconGithub from "../assets/icons/IconGithub";
import IconEmailOutline from "../assets/icons/IconEmailOutline";
import IconLinkedin from "../assets/icons/IconLinkedin";
import IconWhatsApp from "../assets/icons/IconWhatsApp";

type HomeShortcutsProps = {
  setPage: (page: AvailablePages) => void;
};

export default function HomeShortcuts({ setPage }: HomeShortcutsProps) {
  return (
    <div className="shortcuts-container">
      <a href="" target="_blank" className="button">
        <IconWhatsApp className="icon" />
      </a>
      <button
        className="button"
        onClick={() => {
          setPage(5);
        }}
      >
        <IconEmailOutline className="icon" />
      </button>
      <a href="" target="_blank" className="button">
        <IconGithub className="icon" />
      </a>
      <a href="" target="_blank" className="button">
        <IconLinkedin className="icon" />
      </a>
    </div>
  );
}
