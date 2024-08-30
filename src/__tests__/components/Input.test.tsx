import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Input } from "components";

describe("Input Component", () => {
  it("handles state changes correctly", async () => {
    const onChange = jest.fn();

    render(<Input label="Blablabla" onChange={onChange} value="input value" />);

    expect(screen.getByText("Blablabla")).toBeTruthy();

    const textInput = screen.getByTestId("text-input") as HTMLInputElement;

    expect(textInput).toHaveDisplayValue("input value");

    fireEvent.change(textInput, {
      target: { value: "new value" },
    });

    expect(onChange).toHaveBeenCalledWith("new value");
  });
});
