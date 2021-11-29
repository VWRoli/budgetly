describe('Budgetly dahsboard', () => {
  it('load dashboard page', () => {
    cy.visit('/');
    cy.contains('Dashboard');
  });
});
