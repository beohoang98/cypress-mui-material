declare global {
  namespace Cypress {
    interface Chainable {
      muiChooseDate(date: Date): Chainable;
      muiChooseTime(date: Date): Chainable;
    }
  }
}
export {};
