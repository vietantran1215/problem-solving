const solveMeFirst = require("./");
const { invalidInputErrorMessage } = require("./constants");

describe("Testing `solveMeFirst` function", function () {
  describe("Should handle happy cases", function () {
    test("Should be 10 when call solveMeFirst with two positive integers as arguments", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(7, 3));
      const expectedResult = 10;
      mockInvoke();
      expect(mockInvoke).toHaveReturnedWith(expectedResult);
    });
  })
  describe("Should also handle unhappy cases", function () {
    test("Should show an error when call solveMeFirst with two negative integers as arguments", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(-7, -3));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst with a negative integer as the first argument and a positive integer as the first argument", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(7, -3));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst with two positive floating point numbers as arguments", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(7.1, 3.2));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst with two negative floating point numbers as arguments", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(-7.1, -3.2));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst with a positive floating point number as the first argument and a negative floating point number as the second argument", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(7.1, -3.2));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst with a negative floating point number as the first argument and a positive floating point number as the second argument", function () {
      const mockInvoke = jest.fn(() => solveMeFirst(-7.1, 3.2));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst when there is an argument which is not a number", function () {
      const mockInvoke = jest.fn(() => solveMeFirst('a', 1));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
    test("Should show an error when call solveMeFirst when both arguments are not numbers", function () {
      const mockInvoke = jest.fn(() => solveMeFirst('a', true));
      const expectedResult = new Error(invalidInputErrorMessage);
      expect(mockInvoke).toThrow(expectedResult);
    });
  });
});
