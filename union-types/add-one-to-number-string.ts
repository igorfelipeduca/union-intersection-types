// if the inputed value is a number, add one to it, otherwise parse it as a string and add one to it

export function addOneToNumberOrString(number: number | string): number {
  return typeof number === "number" ? number + 1 : parseInt(number) + 1;
}

// if the inputed value is a number and it is less than ten, add one to it, otherwise parse it as a string and add three to it

export function addOneToNumberOrThreeToString(number: number | string): number {
  return typeof number === "number" ? number + 1 : parseInt(number) + 3;
}

// testing the first case
console.log(addOneToNumberOrString(1));
console.log(addOneToNumberOrString("1"));
