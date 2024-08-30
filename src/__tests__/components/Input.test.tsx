import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Input } from "components";

describe("Input Component", () => {
  it("handles input correctly", () => {
    const onChange = jest.fn();

    render(<Input label="Blablabla" onChange={onChange} />);

    expect(screen.getByText("Blablabla")).toBeTruthy();

    const textInput = screen.getByTestId("text-input");

    fireEvent.change(textInput, {
      target: { value: "new value" },
    });

    expect(onChange).toHaveBeenCalledWith("new value");
  });
});
