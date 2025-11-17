export function wordBreak(s: string, wordDict: string[]): boolean {
  const dict = new Set(wordDict);
  let result = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    for (let j = -1; j < i; j++) {
      if ((j === -1 || result[j]) && dict.has(s.substring(j + 1, i + 1))) {
        result[i] = true;
        break;
      }
    }
  }

  return result[result.length - 1]!;
};
