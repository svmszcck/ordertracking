import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Image } from "components";

describe("Image Component", () => {
  it("handles image rendering correctly", () => {
    const url = "https://placehold.co/600x400";

    render(<Image src={url} alt="sample image" />);

    expect(screen.getByTestId("img-placeholder")).toBeTruthy();

    const loadedImg = screen.getByTestId("img");

    expect(loadedImg.getAttribute("alt")).toEqual("sample image");
  });
});
