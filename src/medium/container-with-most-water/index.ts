export function maxArea(height: number[]): number {
  let best = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    best = Math.max(best, (j - i) * Math.min(height[j]!, height[i]!));
    if (height[j]! < height[i]!) {
      j--;
    } else {
      i++;
    }
  }
  return best;
};