import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/WhatsAndOldPortifolio.sass";
import { returnWhatsAppLink } from "../utils/links";
import IconWhatsApp from "../assets/icons/IconWhatsApp";
import IconDocumentTextOutline from "../assets/icons/IconDocumentTextOutline";

type WhatsAndOldPortifolioProps = {
  language: Language;
};

export default function WhatsAndOldPortifolio({
  language,
}: WhatsAndOldPortifolioProps) {
  return (
    <>
      <div className="buttons-contact-content">
        <a
          href={returnWhatsAppLink()}
          target="_blank"
          className="button-contact"
        >
          {getTranslatedInformation(language, "contact.whats")} <IconWhatsApp />
        </a>
        <a
          href="https://portifolio-filipe-bacof-old.vercel.app/"
          target="_blank"
          className="button-contact"
        >
          {getTranslatedInformation(language, "contact.old")}{" "}
          <IconDocumentTextOutline />
        </a>
      </div>
    </>
  );
}
