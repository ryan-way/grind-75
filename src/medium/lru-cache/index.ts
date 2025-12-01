class Node {
  next: Node | undefined;
  prev: Node | undefined;
  key: number;
  val: number;

  constructor(key: number, val: number, prev?: Node, next?: Node) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}


export class LRUCache {
  capacity: number;
  map: Map<number, Node>;
  tail: Node | undefined;
  head: Node | undefined;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node === undefined) {
      return -1;
    }

    if (node.next === undefined) {
      return node.val;
    }

    if (node.prev === undefined) {
      this.head = this.head!.next;
      this.head!.prev = undefined;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    node.prev = undefined;
    node.next = undefined;

    this.tail!.next = node;
    node.prev = this.tail;
    this.tail = node;
    return node.val;
  }

  put(key: number, value: number): void {
    const node = this.map.get(key) ?? new Node(key, value);
    if (!this.map.has(key)) {
      this.map.set(key, node);
      if (this.tail === undefined) {
        this.tail = node;
        this.head = node;
      } else {
        this.tail!.next = node;
        node.prev = this.tail;
        this.tail = node;
        if (this.map.size > this.capacity) {
          this.map.delete(this.head!.key);
          this.head = this.head!.next;
          this.head!.prev = undefined;
        }
      }
    } else {
      node.val = value;
      if (node.next === undefined) {
        return;
      }

      if (node.prev === undefined) {
        this.head = this.head!.next;
        this.head!.prev = undefined;
      } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }

      node.prev = undefined;
      node.next = undefined;

      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */