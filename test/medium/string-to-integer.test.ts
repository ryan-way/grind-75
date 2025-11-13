import { expect, test } from "bun:test";

import { myAtoi } from "../../src/medium/string-to-integer";

test("example 1", () => {
  expect(myAtoi("42")).toBe(42);
});
test("example 2", () => {
  expect(myAtoi(" -042")).toBe(-42);
});
test("example 3", () => {
  expect(myAtoi("1337c0d3")).toBe(1337);
});
test("example 4", () => {
  expect(myAtoi("0-1")).toBe(0);
});
test("example 5", () => {
  expect(myAtoi("words and 987")).toBe(0);
});
test("underflow", () => {
  expect(myAtoi("-99999999999")).toBe(-(2 ** 31));
});
test("overflow", () => {
  expect(myAtoi("99999999999")).toBe(2 ** 31 - 1);
});
test("wrong answer", () => {
  expect(myAtoi("+1")).toBe(1);
});