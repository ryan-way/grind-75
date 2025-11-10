import { expect, test } from "bun:test";

import { canConstruct } from "../../src/easy/ransom-note";

test("example 1", () => {
  expect(canConstruct("a", "b")).toBeFalse();
})

test("example 2", () => {
  expect(canConstruct("aa", "ab")).toBeFalse();
})

test("example 3", () => {
  expect(canConstruct("aa", "aab")).toBeTrue();
})
