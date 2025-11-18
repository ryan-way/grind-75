export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const results = [];

  for (let i = 0; i < nums.length; i++) {
    if (i != 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (j != i + 1 && nums[j] === nums[j - 1]) {
        j++;
        continue;
      }
      if (k != nums.length - 1 && nums[k] === nums[k + 1]) {
        k--;
        continue;
      }
      const curr = nums[i]! + nums[j]! + nums[k]!;
      if (curr < 0) {
        j++;
      } else if (curr > 0) {
        k--;
      } else {
        results.push([nums[i]!, nums[j]!, nums[k]!]);
        k--;
      }
    }
  }
  return results;
};