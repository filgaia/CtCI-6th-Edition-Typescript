import { IAdjacent } from './helpers';

/**
 * To get the order of the projects we just need to create a graph of the
 * projects and their dependencies and do a topological sort. To detect if an
 * order can be determined we also need to check for cycles as topological sort
 * will only work on DAGs.
 *
 * N = |projects|
 * M = |dependencies|
 * Time: O(N+M) - this assumes that the objects and we use as hashmaps and the
 * Set data type have operations that take O(1) time.
 * Additional space: O(N)
 */
export function buildOrder(projects: number[], dependencies: number[][]): number[] {
  const adj: IAdjacent = {};
  const finished: number[] = [];
  const discovered = new Set<number>();
  const path = new Set<number>();

  // create adjacency matrix
  projects.forEach((project: number) => (adj[project] = []));
  dependencies.forEach((edge: number[]) => adj[edge[1]].push(edge[0]));
  // run topological sort
  projects.forEach((project: number) => topologicalSort(adj, discovered, finished, path, project));

  return finished.reverse();
}

function topologicalSort(
  adj: IAdjacent,
  discovered: Set<number>,
  finished: number[],
  path: Set<number>,
  project: number,
): void {
  if (discovered.has(project)) {
    return;
  }

  discovered.add(project);
  path.add(project);
  for (const neighbor of adj[project]) {
    if (path.has(neighbor)) {
      throw new Error('dependencies are cyclic');
    }

    topologicalSort(adj, discovered, finished, path, neighbor);
  }
  path.delete(project);
  finished.push(project);
}
