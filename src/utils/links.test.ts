import { describe, expect, test } from "vitest";
import { returnWhatsAppLink } from "../utils/links";

describe("links.ts", () => {
  test("returns the correct WhatsApp link", () => {
    const link = returnWhatsAppLink();
    expect(link.startsWith("https://wa.me/")).toBe(true);
  });
});
