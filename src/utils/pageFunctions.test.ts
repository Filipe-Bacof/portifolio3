import { getTitleOfPage } from "../utils/pageFunctions";
import en from "../languages/en.json";
import { describe, expect, test } from "vitest";

describe("pageFunctions", () => {
  describe("getTitleOfPage", () => {
    test("returns the correct title for page 0", () => {
      const title = getTitleOfPage(0, "en");
      expect(title).toBe(en.home.menuTitle);
    });

    test("returns the correct title for page 1", () => {
      const title = getTitleOfPage(1, "en");
      expect(title).toBe(en.career.menuTitle);
    });

    test("returns the correct title for page 2", () => {
      const title = getTitleOfPage(2, "en");
      expect(title).toBe(en.academic.menuTitle);
    });

    test("returns the correct title for page 3", () => {
      const title = getTitleOfPage(3, "en");
      expect(title).toBe(en.personal.menuTitle);
    });

    test("returns the correct title for page 4", () => {
      const title = getTitleOfPage(4, "en");
      expect(title).toBe(en.projects.menuTitle);
    });

    test("returns the correct title for page 5", () => {
      const title = getTitleOfPage(5, "en");
      expect(title).toBe(en.contact.menuTitle);
    });

    test("returns an empty string for an invalid page", () => {
      const title = getTitleOfPage(999, "en");
      expect(title).toBe("");
    });

    test("returns the correct title for a different language", () => {
      const title = getTitleOfPage(1, "ptbr");
      expect(title).toBe("Vida Profissional"); // Adicione o titulo do menu carreira
    });
  });
});
