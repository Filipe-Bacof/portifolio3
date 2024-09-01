import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Tooltip from "../components/Tooltip";
import "@testing-library/jest-dom";

describe("Tooltip Component", () => {
  test("renders children correctly", () => {
    render(
      <Tooltip text="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText("Hover me");
    expect(button).toBeInTheDocument();
  });

  test("does not show the tooltip content initially", () => {
    render(
      <Tooltip text="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    );

    const tooltip = screen.queryByText("Tooltip Text");
    expect(tooltip).not.toBeInTheDocument();
  });

  // test("shows the tooltip content on mouse over", async () => {
  //   render(
  //     <Tooltip text="Tooltip Text">
  //       <button>Hover me</button>
  //     </Tooltip>
  //   );

  //   const button = screen.getByText("Hover me");

  //   fireEvent.mouseOver(button);

  //   await waitFor(
  //     () => {
  //       expect(screen.getByText("Tooltip Text")).toBeInTheDocument();
  //     },
  //     { timeout: 1500 }
  //   );
  // });

  test("shows the tooltip content on focus", async () => {
    render(
      <Tooltip text="Tooltip Text">
        <button>Focus me</button>
      </Tooltip>
    );

    const button = screen.getByText("Focus me");

    fireEvent.focus(button);

    await waitFor(() => {
      const tooltip = screen
        .getAllByText("Tooltip Text")
        .find((el) => el.getAttribute("role") === "tooltip");
      expect(tooltip).toBeInTheDocument();
    });
  });

  // test("hides the tooltip content on mouse out", async () => {
  //   render(
  //     <Tooltip text="Tooltip Text">
  //       <button>Hover me</button>
  //     </Tooltip>
  //   );

  //   const button = screen.getByText("Hover me");

  //   fireEvent.mouseOver(button);

  //   await waitFor(() => {
  //     expect(screen.getByText("Tooltip Text")).toBeInTheDocument();
  //   });

  //   fireEvent.mouseOut(button);

  //   await waitFor(
  //     () => {
  //       expect(screen.queryByText("Tooltip Text")).not.toBeInTheDocument();
  //     },
  //     { timeout: 1500 }
  //   );
  // });
});
