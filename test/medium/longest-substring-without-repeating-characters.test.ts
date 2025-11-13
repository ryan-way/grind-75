import { expect, test } from "bun:test";

import { lengthOfLongestSubstring } from "../../src/medium/longest-substring-without-repeating-characters";

test("example 1", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});
test("example 2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});
test("example 3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});