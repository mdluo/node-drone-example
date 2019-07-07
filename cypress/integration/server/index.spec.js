/// <reference types="Cypress" />

context('GET /', () => {
  it('works', () => {
    cy.request('/').then(response => {
      expect(response.body).to.have.property('hello', 'world');
    });
  });
});

context('GET /users', () => {
  it('works', () => {
    cy.request('/users').then(response => {
      expect(response.body).to.have.length(5);
      expect(response.body[0]).to.eq('test');
    });
  });
});
