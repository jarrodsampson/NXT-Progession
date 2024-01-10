import React from "react";
import Accordion from "./Accordion";

describe("<Accordion />", () => {
  it("renders Accordion", () => {
    cy.mount(<Accordion answer={"Answer"} question={"Question"} />);
    cy.get("[data-cy=accordion]").should("be.visible");
  });
});
