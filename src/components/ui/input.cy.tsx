import { Input } from "./input";

describe("<Input />", () => {
  it("renders", () => {
    cy.mount(
      <div className="h-screen bg-slate-800 p-11">
        <Input placeholder="Test" />
      </div>,
    );
  });
});
