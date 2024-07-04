import de from "../languages/de.json";
import en from "../languages/en.json";
import es from "../languages/es.json";
import fr from "../languages/fr.json";
import it from "../languages/it.json";
import pt from "../languages/pt.json";

import { WebsiteContent, Language } from "../interfaces/Languages.interface";

const translations: Record<Language, WebsiteContent> = {
  de,
  en,
  es,
  fr,
  it,
  pt,
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
  return ["pt", "en", "es", "de", "fr", "it"].includes(str);
}

export { getTranslatedInformation, isLanguage };
