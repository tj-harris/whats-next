import { queryOptions } from "@tanstack/react-query";
import { Octokit } from "octokit";

export const options = (repo: string) =>
  queryOptions({
    queryKey: ["files", repo],
    queryFn: async () => {
      const kit = new Octokit();
      const head = (await kit.request(`GET /repos/${repo}/commits`)).data[0]
        .sha;
      const files = (
        await kit.request(`GET /repos/${repo}/git/trees/${head}?recursive=1`)
      ).data.tree;
      return files
        .filter((f: { type: string }) => f.type === "blob")
        .map((f: { path: string }) => f.path);
    },
  });
