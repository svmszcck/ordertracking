import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Typography } from "components";

describe("Typography Component", () => {
  it("renders texts correctly", () => {
    render(<Typography>Dummy Text</Typography>);

    let element = screen.getByText("Dummy Text");

    expect(element).toBeTruthy();
    expect(element.tagName).toBe("P");

    render(
      <Typography tag="h4" className="testClass">
        Dummy Text 2
      </Typography>
    );

    element = screen.getByText("Dummy Text 2");

    expect(element.tagName).toBe("H4");
    expect(element).toHaveClass("testClass");
  });
});
