import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "./languageFunctions";

function getTitleOfPage(page: number, language: Language): string {
  switch (page) {
    case 0:
      return getTranslatedInformation(language, "home.menuTitle");
    case 1:
      return getTranslatedInformation(language, "career.menuTitle");
    case 2:
      return getTranslatedInformation(language, "academic.menuTitle");
    case 3:
      return getTranslatedInformation(language, "personal.menuTitle");
    case 4:
      return getTranslatedInformation(language, "projects.menuTitle");
    case 5:
      return getTranslatedInformation(language, "contact.menuTitle");
    default:
      return "";
  }
}

export { getTitleOfPage };
