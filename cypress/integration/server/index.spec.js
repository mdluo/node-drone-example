/// <reference types="Cypress" />

context('GET /', () => {
  it('works', () => {
    cy.request('/').then(response => {
      expect(response.body).to.have.property('hello', 'world');
    });
  });
});
