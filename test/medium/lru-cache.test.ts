import { expect, test } from "bun:test";

import { LRUCache } from "../../src/medium/lru-cache";

test("example 1", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toEqual(1);
  cache.put(3, 3);
  expect(cache.get(2)).toEqual(-1);
  cache.put(4, 4);
  expect(cache.get(1)).toEqual(-1);
  expect(cache.get(3)).toEqual(3);
  expect(cache.get(4)).toEqual(4);
});
test("failed 1", () => {
  const cache = new LRUCache(3);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.put(3, 3);
  cache.put(4, 4);
  expect(cache.get(4)).toEqual(4);
  expect(cache.get(3)).toEqual(3);
  expect(cache.get(2)).toEqual(2);
  expect(cache.get(1)).toEqual(-1);
  cache.put(5, 5);
  expect(cache.get(1)).toEqual(-1);
  expect(cache.get(2)).toEqual(2);
  expect(cache.get(3)).toEqual(3);
  expect(cache.get(4)).toEqual(-1);
  expect(cache.get(5)).toEqual(5);
});