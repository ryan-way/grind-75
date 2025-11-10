import { describe, expect, test } from "bun:test";

import { getListNodePosition, listFromArray } from "../src/types";

describe("listFromArray", () => {
  test("example 1", () => {
    const list = listFromArray([3, 2, 0, -4]);
    expect(list.val).toEqual(3);
    expect(list.next).toBeDefined();
    expect(list.next?.val).toEqual(2);
    expect(list.next?.next).toBeDefined();
    expect(list.next?.next?.val).toEqual(0);
    expect(list.next?.next?.next).toBeDefined();
    expect(list.next?.next?.next?.val).toEqual(-4);
    expect(list.next?.next?.next?.next).toBeNull();
  })

  test("example 2", () => {
    const list = listFromArray([1, 2]);
    expect(list.val).toEqual(1);
    expect(list.next).toBeDefined();
    expect(list.next?.val).toEqual(2);
    expect(list.next?.next).toBeNull();
  })
})
