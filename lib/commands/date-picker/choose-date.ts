import { getDate, getMonth, getYear, parse } from "date-fns";

Cypress.Commands.add(
  "muiChooseDate",
  { prevSubject: "element" },
  (element, date) => {
    const year = getYear(date);
    const month = getMonth(date) + 1;
    const dateNumber = getDate(date);
    const pickerSelector = "[role=dialog] .MuiCalendarPicker-root";

    element.find("[aria-label^='Choose date']").click();
    cy.get(pickerSelector)
      .within(() => {
        cy.get("[role=presentation] button").click();
      })
      .contains(year)
      .scrollIntoView()
      .click();

    cy.get(pickerSelector)
      .find("[aria-live=polite]:first")
      .invoke("text")
      .as("monthName");

    cy.get("@monthName").then((monthName) => {
      if (!monthName) return;
      const currentMonth = getMonth(parse(monthName + "", "MMMM", date)) + 1;
      const diff = Math.abs(currentMonth - month);
      if (diff <= 0 || isNaN(diff)) return;
      cy.log("Diff: " + diff, month, currentMonth);
      cy.wrap(Array(diff)).each(() => {
        if (currentMonth > month) {
          cy.get(pickerSelector).find("[aria-label='Previous month']").click();
        } else {
          cy.get(pickerSelector).find("[aria-label='Next month']").click();
        }
      });
    });

    cy.get(pickerSelector).find("[role=grid]").contains(dateNumber).click();
  }
);
