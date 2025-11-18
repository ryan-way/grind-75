import { expect, test } from "bun:test";

import { threeSum } from "../../src/medium/3-sum";

test("example 1", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});
test("example 2", () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});
test("example 3", () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
test("failed 1", () => {
  expect(threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])).toEqual([[-10, 5, 5], [-5, 0, 5], [-4, 2, 2], [-3, -2, 5], [-3, 1, 2], [-2, 0, 2]]);
});