import { expect, test } from "bun:test";

import { letterCombinations } from "../../src/medium/letter-combinations-of-a-phone-number";

test("example 1", () => {
  expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});
test("example 2", () => {
  expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
});