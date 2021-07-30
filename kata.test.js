// 46672 ---> 76642
const { expected } = require("@jest/globals");
const kata = require("./kata");

describe("kata", () => {
  test("Should return 76642 with 46672", () => {
    const expected = 76642; //?
    const result = kata(46672); //?

    expect(result).toEqual(expected);
  });
});
