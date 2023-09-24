describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('h1').should('contain', 'Ponti Studios');
  });
});
