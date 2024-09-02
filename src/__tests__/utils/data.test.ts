import "@testing-library/jest-dom";

import { isDate, paginate, parseDate, progress } from "utils/data";
import { OrderStatus } from "services/types/Order";

describe("Data", () => {
  it("paginate function", () => {
    const foo = [1, 2, 3, 4, 5];

    expect(paginate(foo, 3, 1)).toEqual([1, 2, 3]);
    expect(paginate(foo, 3, 2)).toEqual([1, 2, 3, 4, 5]);

    const foo2 = [1, 2];

    expect(paginate(foo2, 3, 1)).toEqual([1, 2]);
  });

  it("progress function", () => {
    expect(progress(OrderStatus.COLLECTION)).toBe(100);
    expect(progress(OrderStatus.FAILED_DELIVERY)).toBe(80);
    expect(progress(OrderStatus.TRANSIT)).toBe(60);
    expect(progress(OrderStatus.DELIVERY_DATE_SET)).toBe(40);
    expect(progress(OrderStatus.REGISTERED)).toBe(20);
  });

  it("isDate function", () => {
    expect(isDate("foo")).toBeFalsy();
    expect(isDate("")).toBeFalsy();
    expect(isDate("2023-01-07T20:02:30Z")).toBeTruthy();
  });

  it("parseDate function", () => {
    expect(parseDate("2023-01-05T14:13:30Z")).toBeTruthy();
  });
});
