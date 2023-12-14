describe("App spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have docs section", () => {
    cy.get("h2").contains("Docs");
  });
});
