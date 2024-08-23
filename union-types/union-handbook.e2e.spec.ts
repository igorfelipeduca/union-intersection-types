import {
  addOneToNumberOrString,
  addOneToNumberOrThreeToString,
} from "./add-one-to-number-string";

describe("utility-types-handbook", () => {
  it("should add one to a number", () => {
    expect(addOneToNumberOrString(1)).toBe(2);
    expect(addOneToNumberOrString("1")).toBe(2);
  });

  it("should add one to a number or string", () => {
    expect(addOneToNumberOrString(1)).toBe(2);
    expect(addOneToNumberOrString("1")).toBe(2);
  });

  it("should add one to a number or three to a string", () => {
    expect(addOneToNumberOrThreeToString(1)).toBe(2);
    expect(addOneToNumberOrThreeToString("1")).toBe(4);
  });
});
