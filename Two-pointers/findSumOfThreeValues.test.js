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
});
