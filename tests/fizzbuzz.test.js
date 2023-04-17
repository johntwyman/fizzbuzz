const fizzBuzz = require("../src/fizzbuzz");

describe("fizzBuzz tests", () => {
  test("When given a number, N, it returns an array from 1 to the number N", () => {

    // Arrange
    const N = 2;
    const expected = [1, 2];
    // Act
    const actual = fizzBuzz(N);
    // Assert
    expect(actual).toEqual(expected);
  });
});

