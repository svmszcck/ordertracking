import "@testing-library/jest-dom";

import { isEmpty } from "utils/validation";

describe("Validation", () => {
  it("isEmpty function", () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty("foo")).toBeFalsy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty([1])).toBeFalsy();
    expect(isEmpty({ foo: 123 })).toBeFalsy();
  });
});
