const { expected } = require("@jest/globals");
const longest = require("./longest");

describe("longest", () => {
  test("join two strings, del duplicate and order", () => {
    const expected = "aehrsty"; //?
    const result = longest("aretheyhere", "yestheyarehere"); //?

    expect(result).toEqual(expected);
  });
});
