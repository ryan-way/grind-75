export function twoSum(nums: number[], target: number): number[] {

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    const pair = map.get(target - num);
    if (pair !== undefined) {
      return [pair, i];
    } else {
      map.set(num, i);
    }
  }

  throw new Error("Should have exactly one solution: " + JSON.stringify([...map]));
};
