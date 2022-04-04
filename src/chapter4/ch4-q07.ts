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
export function buildOrder(projects: any, dependencies: any) {
  const adj = {};
  const finished: any = [];
  const discovered = new Set();
  const path = new Set();

  // create adjacency matrix
  projects.forEach((project: any) => adj[project] = []);
  dependencies.forEach((edge: any) => adj[edge[1]].push(edge[0]));
  // run topological sort
  projects.forEach((project: any) => topologicalSort(adj, discovered, finished, path, project));

  return finished.reverse();
}

function topologicalSort(adj: any, discovered: any, finished: any, path: any, project: any) {
  if (discovered.has(project)) {
    return;
  }

  discovered.add(project);
  path.add(project);
  for (const neighbour of adj[project]) {
    if (path.has(neighbour)) {
      throw new Error('dependencies are cyclic');
    }

    topologicalSort(adj, discovered, finished, path, neighbour);
  }
  path.delete(project);
  finished.push(project);
}
