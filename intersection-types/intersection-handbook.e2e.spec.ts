import { addOneToNumberOrString } from "./add-one-to-number-string";

describe("addOneToNumberOrString", () => {
  it("should return 10 when the input is 9", () => {
    expect(addOneToNumberOrString(9)).toBe(10);
  });

  it("should return 13 when the input is '12'", () => {
    expect(addOneToNumberOrString("12")).toBe(13);
  });

  it("should throw a type error when the input is greater than 9", () => {
    // @ts-expect-error: This line should cause a TypeScript error
    addOneToNumberOrString(15);
  });

  it("should return 10 when the input is 9", () => {
    expect(addOneToNumberOrString(9)).toBe(10);
  });
});
