/**
 * One way to check if two nodes are connected is to do a BFS of the graph
 * from the source node. BFS would be useful where the nodes have many out
 * edges (degrees) and paths between pairs are not exceedingly deep as it will
 * visit neighbors from the source node radiating outwards.
 *
 * N = |vertices|
 * M = |edges|
 * Time: O(M)
 * Additional space: O(N)
 */
export function isConnectedBFS(graph: any, source: string, target: string): boolean {
  const discovered = new Set();
  const queue = [source];

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of graph[node!]) {
      if (!discovered.has(neighbor)) {
        if (neighbor === target) {
          return true;
        }
        discovered.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}

/**
 * One way to check if two nodes are connected is to do a DFS of the graph
 * from the source node. DFS would be useful where the graph has really long
 * paths and we want to travel as far as we can through that graph as quickly as
 * possible. DFS can be recursive or use a stack and iteration.
 *
 * N = |vertices|
 * M = |edges|
 * Time: O(M)
 * Additional space: O(N)
 */
export function isConnectedDFS(graph: any, source: string, target: string): boolean {
  return dfs(graph, new Set(), source, target);
}

function dfs(graph: any, discovered: Set<string>, source: string, target: string): boolean {
  if (source === target) {
    return true;
  }
  discovered.add(source);
  for (const neighbor of graph[source]) {
    if (!discovered.has(neighbor)) {
      if (dfs(graph, discovered, neighbor, target)) {
        return true;
      }
    }
  }
  return false;
}
