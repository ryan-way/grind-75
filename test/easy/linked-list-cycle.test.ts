import { expect, test } from "bun:test";

import { hasCycle } from "../../src/easy/linked-list-cycle";
import { listFromArray } from "../../src/types";

test("example 1", () => {
  const list = listFromArray([3, 2, 0, -4]);
  if (list.next?.next?.next) {
    list.next.next.next.next = list.next;
  }
  expect(hasCycle(list)).toBeTrue();
})

test("example 2", () => {
  const list = listFromArray([1, 2]);
  if (list.next) {
    list.next.next = list;
  }
  expect(hasCycle(list)).toBeTrue();
})

test("example 3", () => {
  const list = listFromArray([1]);
  expect(hasCycle(list)).toBeFalse();
})
