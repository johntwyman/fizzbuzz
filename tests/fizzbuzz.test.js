const fizzBuzz = require("../src/fizzbuzz");

describe("fizzBuzz tests", () => {
  test("When given the number 2, it returns an array from 1 to 2", () => {

    // Arrange
    const N = 2;
    const expected = [1, 2];
    // Act
    const actual = fizzBuzz(N);
    // Assert
    expect(actual).toEqual(expected);
  });
});

