Cypress.Commands.overwrite("visit", (origin, ...args) => {
  return origin(...args).then((win) => {
    const originMatch = win.matchMedia;
    win.matchMedia = (query) => {
      if (query === "(pointer: fine)") {
        return {
          matches: true,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          addListener: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          removeListener: () => {},
        } as never;
      }
      return originMatch(query);
    };
  });
});
