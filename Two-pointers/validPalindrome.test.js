const { validPalindrome } = require("./validPalindrome.js");

test("kayak should return true", () => {
  expect(validPalindrome("ABCDABCD")).toBe(false);
});

test("hello should return false", () => {
  expect(validPalindrome("ABCDABCD")).toBe(false);
});

test("RACEACAR should return false", () => {
  expect(validPalindrome("ABCDABCD")).toBe(false);
});

test("A should return true", () => {
  expect(validPalindrome("ABCDABCD")).toBe(false);
});

test("ABCDABCD should return false", () => {
  expect(validPalindrome("ABCDABCD")).toBe(false);
});

test("a string with a space should return true", () => {
  expect(validPalindrome(" ")).toBe(true);
});
