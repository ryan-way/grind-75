export function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let best = 0;
  let start = 0;
  for (let i = 0; i < s.length;) {
    if (set.has(s[i])) {
      set.delete(s[start++]);
    } else {
      set.add(s[i++]);
    }

    best = Math.max(set.size, best);
  }
  return best;
};