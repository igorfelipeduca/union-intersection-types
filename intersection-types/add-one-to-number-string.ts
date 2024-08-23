type IsLessThanTen<
  T extends number,
  Acc extends any[] = [] // creates an empty array that will be used to accumulate the results
> = Acc["length"] extends T // points the acumulator to the inputed number
  ? true // returns tru if the inputed number matches the limit number
  : Acc["length"] extends 9 // sets the limit number to 9
  ? false // if the array is accumulated to 9 and still doesn't match, it means the inputed number is greater than 9, so this returns false (error)
  : IsLessThanTen<T, [...Acc, any]>; // if the number doesn't match our array length, we add any (in this case, any is a type that matches any type, so this can be interpreted as a wildcard) to the array and continue to check the next number

type AddOneToNumberOrStringType<T extends number | string> = T extends number // if the inputed type extends a number, we return the number and continue to check the next type
  ? IsLessThanTen<T> extends true // check if the number matches our limit with the IsLessThanTen function
    ? T // if it does, return the number
    : never // if it doesn't, return never (error)
  : string; // if the inputed type is a string, return a string

export function addOneToNumberOrString<T extends number | string>(
  value: AddOneToNumberOrStringType<T>
): number {
  if (typeof value === "number") {
    return value + 1;
  } else {
    return parseInt(value) + 1;
  }
}

// Usage examples:
console.log(addOneToNumberOrString(9)); // Valid
console.log(addOneToNumberOrString("12")); // Valid

// The following line will cause a TypeScript error because 12 is not less than 10
// console.log(addOneToNumberOrString(15)); // invalid
