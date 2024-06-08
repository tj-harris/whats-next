import { useQuery } from "@tanstack/react-query";
import { Octokit } from "octokit";

export const useFileContents = (repo: string, file: string) => {
  return useQuery({
    queryKey: [repo, "file", "contents"],
    queryFn: async () => {
      const kit = new Octokit();
      const contents = (
        await kit.request(`GET /repos/${repo}/contents/${file}`)
      ).data.content;
      return atob(contents);
    },
    enabled: !!file,
  });
};
