import { expect, test } from "bun:test";

import { TimeMap } from "../../src/medium/time-based-key-value-store";

test("example 1", () => {
  const map = new TimeMap();
  map.set("foo", "bar", 1);
  expect(map.get("foo", 1)).toEqual("bar");
  expect(map.get("foo", 3)).toEqual("bar");
  map.set("foo", "bar2", 4);
  expect(map.get("foo", 4)).toEqual("bar2");
  expect(map.get("foo", 5)).toEqual("bar2");
});

test("failed 1", () => {
  const map = new TimeMap();
  map.set("love", "high", 10);
  map.set("love", "low", 20);
  expect(map.get("love", 5)).toEqual("");
  expect(map.get("love", 10)).toEqual("high");
  expect(map.get("love", 15)).toEqual("high");
  expect(map.get("love", 20)).toEqual("low");
  expect(map.get("love", 25)).toEqual("low");
})