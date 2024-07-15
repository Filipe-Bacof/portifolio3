import ar from "../languages/ar.json";
import be from "../languages/be.json";
import ch from "../languages/ch.json";
import cz from "../languages/cz.json";
import de from "../languages/de.json";
import di from "../languages/di.json";
import en from "../languages/en.json";
import es from "../languages/es.json";
import et from "../languages/et.json";
import fi from "../languages/fi.json";
import fr from "../languages/fr.json";
import gr from "../languages/gr.json";
import he from "../languages/he.json";
import hi from "../languages/hi.json";
import hu from "../languages/hu.json";
import ind from "../languages/ind.json";
import it from "../languages/it.json";
import ja from "../languages/ja.json";
import ko from "../languages/ko.json";
import la from "../languages/la.json";
import ne from "../languages/ne.json";
import no from "../languages/no.json";
import po from "../languages/po.json";
import ptbr from "../languages/pt-br.json";
import ptpt from "../languages/pt-pt.json";
import ru from "../languages/ru.json";
import sw from "../languages/sw.json";
import ta from "../languages/ta.json";
import tu from "../languages/tu.json";
import zu from "../languages/zu.json";

import { WebsiteContent, Language } from "../interfaces/Languages.interface";

const translations: Record<Language, WebsiteContent> = {
  ar,
  be,
  ch,
  cz,
  de,
  di,
  en,
  es,
  et,
  fi,
  fr,
  gr,
  he,
  hi,
  hu,
  ind,
  it,
  ja,
  ko,
  la,
  ne,
  no,
  po,
  ptbr,
  ptpt,
  ru,
  sw,
  ta,
  tu,
  zu,
};

function getTranslatedInformation(language: Language, path: string): any {
  const json = translations[language];
  const keys = path.split(".");

  let result: any = json;
  for (const key of keys) {
    if (result[key] === undefined) {
      console.log(
        `Path not found on language JSONs - ${result[key]}: "${path}"`
      );
      return "";
    }
    result = result[key];
  }

  return result;
}

function isLanguage(str: string): str is Language {
  return [
    "ar",
    "be",
    "ch",
    "cz",
    "de",
    "di",
    "en",
    "es",
    "et",
    "fi",
    "fr",
    "gr",
    "he",
    "hi",
    "hu",
    "ind",
    "it",
    "ja",
    "ko",
    "la",
    "ne",
    "no",
    "po",
    "ptbr",
    "ptpt",
    "ru",
    "sw",
    "ta",
    "tu",
    "zu",
  ].includes(str);
}

export { getTranslatedInformation, isLanguage };
