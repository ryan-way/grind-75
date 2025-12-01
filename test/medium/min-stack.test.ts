import { expect, test } from "bun:test";

import { MinStack } from "../../src/medium/min-stack";

test("example 1", () => {
  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  expect(stack.getMin()).toEqual(-3);
  stack.pop();
  expect(stack.top()).toEqual(0);
  expect(stack.getMin()).toEqual(-2);
});