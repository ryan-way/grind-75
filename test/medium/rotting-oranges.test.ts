import { expect, test } from "bun:test";

import { orangesRotting } from "../../src/medium/rotting-oranges";

test("example 1", () => {
  expect(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])).toEqual(4);
});
test("example 2", () => {
  expect(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])).toEqual(-1);
});
test("example 3", () => {
  expect(orangesRotting([[0, 2]])).toEqual(0);
});