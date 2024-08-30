export const isEmpty = (value: unknown): boolean => {
  return (
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  );
};

export const isString = (value: unknown): value is string =>
  typeof value === "string";
