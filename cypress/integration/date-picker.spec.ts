describe("Date Picker", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Select date", () => {
    cy.get("[data-testid=date-picker]").muiChooseDate(new Date("2013-10-15"));

    cy.get("[data-testid=date-picker]")
      .find("input")
      .should("have.value", "10/15/2013");
  });
});
