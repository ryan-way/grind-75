export function letterCombinations(digits: string): string[] {
  const results: string[] = [];
  const curr: string[] = [];

  dfs(results, curr, digits, 0);

  return results;
};


function dfs(results: string[], curr: string[], digits: string, index: number) {
  if (index === digits.length) {
    results.push(curr.join(""));
    return;
  }

  const map = new Map([["2", "abc"], ["3", "def"], ["4", "ghi"], ["5", "jkl"], ["6", "mno"], ["7", "pqrs"], ["8", "tuv"], ["9", "wxyz"]]);

  for (const c of map.get(digits[index]!)!) {
    curr.push(c);
    dfs(results, curr, digits, index + 1);
    curr.pop();
  }
}