import { render } from "@testing-library/react";
import { generateArrayTechs } from "./techs";
import { Language } from "../interfaces/Languages.interface";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

describe("generateArrayTechs", () => {
  test("should return an array of technologies with the correct translated icons and names", () => {
    const language: Language = "en";
    const techs = generateArrayTechs(language);

    expect(techs).toHaveLength(16);

    techs.forEach((tech) => {
      expect(tech).toHaveProperty("id");
      expect(tech).toHaveProperty("img");
      expect(tech).toHaveProperty("name");

      const { container } = render(<>{tech.img}</>);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toBeInTheDocument();
    });
  });
});
