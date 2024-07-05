import be from "../languages/be.json";
import ch from "../languages/ch.json";
import de from "../languages/de.json";
import en from "../languages/en.json";
import es from "../languages/es.json";
import fr from "../languages/fr.json";
import hi from "../languages/hi.json";
import ind from "../languages/ind.json";
import it from "../languages/it.json";
import ja from "../languages/ja.json";
import ko from "../languages/ko.json";
import no from "../languages/no.json";
import ptbr from "../languages/pt-br.json";
import ptpt from "../languages/pt-pt.json";
import ru from "../languages/ru.json";

import { WebsiteContent, Language } from "../interfaces/Languages.interface";

const translations: Record<Language, WebsiteContent> = {
  be,
  ch,
  de,
  en,
  es,
  fr,
  hi,
  ind,
  it,
  ja,
  ko,
  no,
  ptbr,
  ptpt,
  ru,
};

function getTranslatedInformation(language: Language, path: string): any {
  const json = translations[language];
  const keys = path.split(".");

  let result: any = json;
  for (const key of keys) {
    if (result[key] === undefined) {
      throw new Error(`Path not found: ${path}`);
    }
    result = result[key];
  }

  return result;
}

function isLanguage(str: string): str is Language {
  return [
    "be",
    "ch",
    "de",
    "en",
    "es",
    "fr",
    "hi",
    "ind",
    "it",
    "ja",
    "ko",
    "no",
    "ptbr",
    "ptpt",
    "ru",
  ].includes(str);
}

export { getTranslatedInformation, isLanguage };
