describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('[data-testid="navbar"]').should('contain', 'Ponti Studios');
  });
});
