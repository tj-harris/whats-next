import React from "react";
import { Button } from "./button";

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <div className="h-screen bg-slate-800 p-11">
        <Button variant="outline">Test</Button>
      </div>,
    );
  });
});
