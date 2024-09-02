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
      <Typography tag="h4" className="testClass" pale bold>
        Dummy Text 2
      </Typography>
    );

    element = screen.getByText("Dummy Text 2");

    expect(element.tagName).toBe("H4");
    expect(element).toHaveClass("testClass");
    expect(element).toHaveStyle(`opacity: 0.5`);
    expect(element).toHaveStyle(`font-weight: 500`);
  });
});
