export class MinStack {
  order: number[];
  min: number[];
  constructor() {
    this.order = [];
    this.min = [];
  }

  push(val: number): void {
    this.order.push(val);
    this.min.push(Math.min(val, this.getMin() ?? Number.MAX_VALUE));
  }

  pop(): void {
    this.order.pop();
    this.min.pop();
  }

  top(): number {
    return this.order[this.order.length - 1]!;
  }

  getMin(): number {
    return this.min[this.min.length - 1]!;
  }

  printState() {
    console.log(`Order: ${JSON.stringify(this.order)}`);
    console.log(`Min: ${JSON.stringify(this.min)}`);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */