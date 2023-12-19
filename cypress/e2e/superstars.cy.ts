describe("App spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/superstars");
    cy.scrollTo(0, 0);
  });

  it("should navigate to the correct Superstars route", () => {
    cy.url().should("eq", "http://localhost:3000/superstars");
  });

  it("should have top navigation section", () => {
    cy.get("nav").should("be.visible");
  });

  it("should have correct top navigation links", () => {
    const expectedLinks = ["Home", "Superstars", "Services", "Contact"];

    expectedLinks.forEach((link) => {
      cy.get("nav").contains(link);
    });
  });

  it("should not have back to top button", () => {
    cy.get("[data-cy=back-to-top]").should("not.exist");
  });

  it("should have back to top button", () => {
    cy.scrollTo(0, 400);
    cy.get("[data-cy=back-to-top]").should("be.visible");
  });

  it("should have loading spinner initially", () => {
    cy.get("[data-cy=loading-spinner]").should("be.visible");
  });

  it("should have div with superstars", () => {
    cy.get("[data-cy=superstar-div]").should("be.visible");
  });

  it("should have 24 superstars initially", () => {
    cy.get("[data-cy=superstar-div]").should("be.visible");
    cy.get("[data-cy=superstar-div] .infinite-scroll-component .flex").should("have.length", 25);
    cy.get("[data-cy=loading-spinner]").should("not.exist");
  });

  it("should have footer section", () => {
    cy.get("footer").should("be.visible");
    cy.get("h3").contains("Quick Links");
  });

  it("should have correct footer navigation links", () => {
    const expectedLinks = ["Home", "About", "Services", "Contact"];

    expectedLinks.forEach((link) => {
      cy.get("footer .list-none").contains(link);
    });
  });
});
