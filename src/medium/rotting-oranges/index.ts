export function orangesRotting(grid: number[][]): number {
  const distance: number[][] = grid.map((row) => row.map((value) => value !== 0 ? Number.MAX_VALUE : 0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i]!.length; j++) {
      if (grid[i]![j] === 2) {
        dfs(distance, grid, i, j, 0);
      }
    }
  }

  const max = distance.flat().reduce((a, b) => Math.max(a, b));
  return max === Number.MAX_VALUE ? -1 : max;
};


function dfs(distance: number[][], grid: number[][], i: number, j: number, depth: number) {
  if (i >= grid.length || i < 0 || j >= grid[i]!.length || j < 0) {
    return;
  }
  if (distance[i]![j]! > depth) {
    distance[i]![j] = depth;

    dfs(distance, grid, i + 1, j, depth + 1);
    dfs(distance, grid, i - 1, j, depth + 1);
    dfs(distance, grid, i, j + 1, depth + 1);
    dfs(distance, grid, i, j - 1, depth + 1);
  }
}