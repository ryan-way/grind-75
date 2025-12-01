class KeyValue {
  latestValue: string;
  latestTimestamp: number;
  map: Map<number, string>;
  list: [string, number][];

  constructor(value: string, timestamp: number) {
    this.latestValue = value;
    this.latestTimestamp = timestamp;
    this.map = new Map().set(timestamp, value);
    this.list = [[value, timestamp]];
  }

  set(value: string, timestamp: number) {
    this.map.set(timestamp, value);
    this.list.push([value, timestamp]);
    this.latestTimestamp = timestamp;
    this.latestValue = value;
  }

  get(timestamp: number): string {
    const value = this.map.get(timestamp);
    if (value !== undefined) return value;

    if (timestamp > this.latestTimestamp) return this.latestValue;
    if (timestamp < this.list[0]![1]) return "";

    let start = 0;
    let end = this.list.length - 1;

    while (start < end - 1) {
      const mid = Math.floor((start + end) / 2);

      if (this.list[mid]![1] === timestamp) {
        return this.list[mid]![0];
      } else if (this.list[mid]![1] < timestamp) {
        start = mid;
      } else {
        end = mid - 1;
      }
    }

    return this.list[start]![0];
  }
}

export class TimeMap {
  map: Map<string, KeyValue>;
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const keyValue: KeyValue = this.map.get(key) ?? new KeyValue(value, timestamp);
    this.map.set(key, keyValue);
    keyValue.set(value, timestamp);
  }

  get(key: string, timestamp: number): string {
    const keyValue = this.map.get(key);

    if (keyValue === undefined) {
      return "";
    }

    return keyValue.get(timestamp);
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */