
export class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}

export function cloneGraph(node: _Node | null): _Node | null {

  if (node === null) return null;

  return dfs(new Map(), node);
};


function dfs(map: Map<number, _Node>, node: _Node): _Node {
  if (map.has(node.val)) {
    return map.get(node.val)!;
  }

  const clone = new _Node(node.val);
  map.set(node.val, clone);

  clone.neighbors = node.neighbors.map((neighbor) => dfs(map, neighbor));

  return clone;
}