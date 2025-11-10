export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function listFromArray(arr: number[]): ListNode {
  let head;
  let tail;

  for (const num of arr) {
    let current = new ListNode(num);

    if (head == undefined || tail == undefined) {
      head = current;
      tail = current;
    } else {
      tail.next = current;
      tail = current;
    }
  }

  return head!;
}