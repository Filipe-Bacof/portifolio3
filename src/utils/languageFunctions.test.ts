import {
  getTranslatedInformation,
  isLanguage,
} from "../utils/languageFunctions";
import en from "../languages/en.json";
import { describe, expect, test, vi } from "vitest";

describe("languageFunctions", () => {
  describe("getTranslatedInformation", () => {
    test("returns correct translated information", () => {
      const path = "home.menuTitle";
      const result = getTranslatedInformation("en", path);
      expect(result).toBe(en.home.menuTitle);
    });

    test("returns empty string when path is invalid", () => {
      const result = getTranslatedInformation("en", "invalid.path");
      expect(result).toBe("");
    });

    test("logs an error when path is not found", () => {
      console.log = vi.fn();
      const result = getTranslatedInformation("en", "invalid.path");
      expect(console.log).toHaveBeenCalledWith(
        'Path not found on language JSONs - undefined: "invalid.path"'
      );
      expect(result).toBe("");
    });
  });

  describe("isLanguage", () => {
    test("returns true for valid language code", () => {
      expect(isLanguage("en")).toBe(true);
      expect(isLanguage("es")).toBe(true);
    });

    test("returns false for invalid language code", () => {
      expect(isLanguage("invalid")).toBe(false);
      expect(isLanguage("xx")).toBe(false);
    });
  });
});
