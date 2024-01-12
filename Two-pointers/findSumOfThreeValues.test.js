// import {describe, expect, test } from '@jest/globals'
const { findSumOfThreeValues } = require("./findSumOfThreeValues.js");

describe("findSumOfThreeValues", () => {
  test("should return a boolean", () => {
    const value = findSumOfThreeValues([0, 1, 2, 3], 8);
    const type = typeof value;
    expect(type).toBe("boolean");
  });

  test("[0, 1, 2, 3, 4, 5], target = 13, should return false", () => {
    const value = findSumOfThreeValues([0, 1, 2, 3, 4, 5], 13);
    expect(value).toBeFalsy();
  });

  test("[0, 1, 2, 3, 4, 5], target = 9, should return true", () => {
    const value = findSumOfThreeValues([0, 1, 2, 3, 4, 5], 9);
    expect(value).toBeTruthy();
  });
  test("[1, -1, 0], target = -1, should return false", () => {
    const value = findSumOfThreeValues([1, -1, 0], -1);
    expect(value).toBeFalsy();
  });
  test("[3, 7, 1, 2, 8, 4, 5], target = 10, should return true", () => {
    const value = findSumOfThreeValues([3, 7, 1, 2, 8, 4, 5], 10);
    expect(value).toBeTruthy();
  });
  test("[3, 7, 1, 2, 8, 4, 5], target = 21, should return false", () => {
    const value = findSumOfThreeValues([3, 7, 1, 2, 8, 4, 5], 21);
    expect(value).toBeFalsy();
  });
  test("[-1, 2, 1, -4, 5, -3], target = -8, should return true", () => {
    const value = findSumOfThreeValues([-1, 2, 1, -4, 5, -3], -8);
    expect(value).toBeTruthy();
  });
  test("[-1, 2, 1, -4, 5, -3], target = 0, should return true", () => {
    const value = findSumOfThreeValues([-1, 2, 1, -4, 5, -3], 0);
    expect(value).toBeTruthy();
  });
});
