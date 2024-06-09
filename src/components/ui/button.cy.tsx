import { Button } from "./button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(
      <div className="h-screen bg-slate-800 p-11">
        <Button variant="outline">Test</Button>
      </div>,
    );
  });
});
