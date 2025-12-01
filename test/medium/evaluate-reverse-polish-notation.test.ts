import { expect, test } from "bun:test";

import { evalRPN } from "../../src/medium/evaluate-reverse-polish-notation";

test("example 1", () => {
  expect(evalRPN(["2", "1", "+", "3", "*"])).toEqual(9);
});

test("example 2", () => {
  expect(evalRPN(["4", "13", "5", "/", "+"])).toEqual(6);
});

test("example 3", () => {
  expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toEqual(22);
});