import { createFileRoute } from "@tanstack/react-router";
import { options } from "../../api/useRepoFiles";
import { CodeBlock } from "react-code-blocks";
import { useFileContents } from "@/api/useFileContents";
import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Route = createFileRoute("/play/$repo")({
  loader: async ({ params }) =>
    queryClient.ensureQueryData(options(params.repo)),
  component: Play,
});

function Play() {
  const { repo } = Route.useParams();
  const { data } = useSuspenseQuery(options(repo));
  const file = data?.[Math.floor(Math.random() * data.length)] ?? "";
  const { data: contents, isLoading } = useFileContents(repo, file);
  const lines = contents?.split("\n") ?? [];
  const lineIndex = Math.floor(Math.random() * lines.length);
  const line = lines[lineIndex];
  const hint = lines.slice(lineIndex - 5, lineIndex);
  return (
    <div className="mt-6">
      <div className="text-foreground">{file}</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CodeBlock
            text={hint.join("\n")}
            language="tsx"
            showLineNumbers={false}
            wrapLongLines
          />

          <div className="text-foreground">{line}</div>
        </>
      )}
    </div>
  );
}

export default Play;
