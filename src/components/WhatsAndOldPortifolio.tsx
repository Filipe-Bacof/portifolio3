import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/WhatsAndOldPortifolio.sass";
import { returnWhatsAppLink } from "../utils/links";
import IconWhatsApp from "../assets/icons/IconWhatsApp";
import IconDocumentTextOutline from "../assets/icons/IconDocumentTextOutline";
import Tooltip from "./Tooltip";

type WhatsAndOldPortifolioProps = {
  language: Language;
};

export default function WhatsAndOldPortifolio({
  language,
}: WhatsAndOldPortifolioProps) {
  return (
    <>
      <div className="buttons-contact-content">
        <Tooltip
          text={getTranslatedInformation(language, "contact.whats")}
          side="top"
        >
          <a href={returnWhatsAppLink()} target="_blank" className="button">
            <IconWhatsApp className="icon" />
          </a>
        </Tooltip>
        <Tooltip
          text={getTranslatedInformation(language, "contact.old")}
          side="top"
        >
          <a
            href="https://portifolio-filipe-bacof-old.vercel.app/"
            target="_blank"
            className="button"
          >
            <IconDocumentTextOutline className="icon" />
          </a>
        </Tooltip>
      </div>
    </>
  );
}
