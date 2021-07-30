const { expected } = require("@jest/globals");
const printerError = require("./printerError");

describe("orderByNumberString", () => {
  test("Should return 3/56 with aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz", () => {
    const expected = "3/56"; //?
    const result = printerError(
      "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    ); //?

    expect(result).toEqual(expected);
  });
});
