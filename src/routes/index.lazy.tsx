import { useState } from "react";

import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Form,
});

function Form() {
  const [repo, setRepo] = useState("tanstack/react-query");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRepo(e.currentTarget.value);
  };
  const play = () => {};
  return (
    <div className="mt-40 flex flex-col items-center space-y-5">
      <div className="text-xl text-white">Enter a public GitHub repo</div>
      <div className="flex space-x-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input value={repo} id="repository" onChange={handleChange} />
            <Link to={"/play/$repo"} params={{ repo }}>
              <Button onClick={play}>Play</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
