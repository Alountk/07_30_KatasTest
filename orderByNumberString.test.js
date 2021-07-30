// 46672 ---> 76642
const { expected } = require("@jest/globals");
const orderByNumberString = require("./orderByNumberString");

describe("orderByNumberString", () => {
  test("Should return 3/56 with 46672", () => {
    const expected = 76642; //?
    const result = orderByNumberString(46672); //?

    expect(result).toEqual(expected);
  });
});
