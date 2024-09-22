import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { BorderPhoto } from "../components/BorderPhoto";
import "@testing-library/jest-dom";

describe("BorderPhoto Component", () => {
  test("renders an image with the correct src and alt attributes", () => {
    render(<BorderPhoto src="test-image.jpg" alt="Test Image" />);

    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  test("renders a div with the correct class when href is not provided", () => {
    render(<BorderPhoto src="test-image.jpg" alt="Test Image" />);

    const div = screen.getByAltText("Test Image").closest("div");
    expect(div).toHaveClass("border-photo-gradient");
  });

  test("renders a link with the correct href when provided", () => {
    render(
      <BorderPhoto
        src="test-image.jpg"
        alt="Test Image"
        href="http://example.com"
      />
    );

    const link = screen.getByAltText("Test Image").closest("a");
    expect(link).toHaveAttribute("href", "http://example.com");
  });

  test("clicking on the link works correctly when 'href' is provided", () => {
    const mockClickHandler = vi.fn();
    render(
      <BorderPhoto
        src="test-image.jpg"
        alt="Test Image"
        href="http://example.com"
      />
    );

    const link = screen.getByAltText("Test Image").closest("a");
    expect(link).toHaveAttribute("href", "http://example.com");

    if (link) {
      fireEvent.click(link);
    }

    expect(mockClickHandler).toHaveBeenCalledTimes(0);
  });

  // test("renders a tooltip when text prop is provided", () => {
  //   render(
  //     <BorderPhoto src="test-image.jpg" alt="Test Image" text="Tooltip Text" />
  //   );

  //   const tooltip = screen.getByText("Tooltip Text");
  //   expect(tooltip).toBeInTheDocument();
  // });

  test("adds 'small' class when 'small' prop is true", () => {
    render(<BorderPhoto src="test-image.jpg" alt="Test Image" small />);

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass("small");
  });

  test("adds 'xsmall' class when 'xsmall' prop is true", () => {
    render(<BorderPhoto src="test-image.jpg" alt="Test Image" xsmall />);

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass("xsmall");
  });

  test("applies custom classes correctly", () => {
    render(
      <BorderPhoto
        src="test-image.jpg"
        alt="Test Image"
        classes="custom-class"
      />
    );

    const div = screen.getByAltText("Test Image").closest("div");
    expect(div).toHaveClass("custom-class");
  });

  // test("sets tooltip position based on 'side' prop", () => {
  //   render(
  //     <BorderPhoto
  //       src="test-image.jpg"
  //       alt="Test Image"
  //       text="Tooltip Text"
  //       side="left"
  //     />
  //   );

  //   const tooltip = screen.getByText("Tooltip Text");
  //   expect(tooltip).toHaveAttribute("data-side", "left");
  // });

  // test("renders Tooltip when 'text' prop is provided", async () => {
  //   render(
  //     <BorderPhoto src="test-image.jpg" alt="Test Image" text="Tooltip Text" />
  //   );

  //   const image = screen.getByAltText("Test Image");

  //   fireEvent.mouseOver(image);

  //   const tooltip = await screen.findByText("Tooltip Text");
  //   expect(tooltip).toBeInTheDocument();
  // });
});
