import { expect, test } from "bun:test";

import { wordBreak } from "../../src/medium/word-break";

test("example 1", () => {
  expect(wordBreak("leetcode", ["leet", "code"])).toBeTrue();
});
test("example 2", () => {
  expect(wordBreak("applepenapple", ["apple", "pen"])).toBeTrue();
});
test("example 3", () => {
  expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBeFalse();
});