import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/WhoIAm.sass";
import IconQuote from "../assets/icons/IconQuote";

type WhoIAmProps = {
  language: Language;
};

export default function WhoIAm({ language }: WhoIAmProps) {
  return (
    <>
      <h3 className="personal-title">
        {getTranslatedInformation(language, "personal.about.title")}
      </h3>
      <p className="personal-description">
        {getTranslatedInformation(language, "personal.about.description")}
      </p>

      <blockquote className="quote">
        <div className="sentence-content">
          <IconQuote width={100} height={100} />
          <span className="sentence-text">
            {getTranslatedInformation(language, "personal.quote.sentence")}
          </span>
        </div>
        <cite className="author">
          - {getTranslatedInformation(language, "personal.quote.author")}
        </cite>
      </blockquote>
    </>
  );
}
