
// Definition for singly-linked list.
import { ListNode } from "../../types";


export function hasCycle(head: ListNode | null): boolean {
  if (head == null) return false;

  let slow: ListNode | null = head;
  let fast = head.next?.next;

  if (fast === undefined) return false;

  while (fast !== undefined && slow !== null && fast !== null) {
    if (slow === fast) {
      return true;
    };
    slow = slow.next;
    fast = fast?.next?.next;
  }

  return false;
};