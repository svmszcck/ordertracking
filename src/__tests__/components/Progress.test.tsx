import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Progress } from "components";

describe("Progress Component", () => {
  it("renders the component correctly", async () => {
    render(<Progress value={40} maxValue={100} />);

    const element = screen.getByTestId("progress");

    expect(element).toBeTruthy();
    expect(element.getAttribute("value")).toEqual("40");
    expect(element.getAttribute("max")).toEqual("100");
  });
});
