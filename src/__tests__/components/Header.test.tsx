import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "components";

describe("Header Component", () => {
  it("signs out correctly", () => {
    const signOut = jest.fn();

    render(<Header signOut={signOut} />);

    const signOutButton = screen.getByTestId("custom-button");

    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalled();
  });
});
