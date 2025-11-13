import { expect, test } from "bun:test";

import { _Node, cloneGraph } from "../../src/medium/clone-graph";

test("example 1", () => {
  const first = new _Node(1);
  const second = new _Node(2);
  const third = new _Node(3);
  const fourth = new _Node(4, [first, third]);
  third.neighbors = [second, fourth];
  second.neighbors = [first, third];
  first.neighbors = [second, fourth];
  expect(cloneGraph(first)).toEqual(first);
});