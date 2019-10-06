/// <reference types="Cypress" />

context('/users', () => {
  it('empty list', () => {
    cy.request('/users').then(response => {
      expect(response.body).to.have.length(0);
    });
  });

  it('create one', () => {
    cy.request('POST', '/users', { name: 'test' }).then(response => {
      expect(response.body).to.have.property('_id');
      expect(response.body).to.have.property('name', 'test');
    });
  });

  it('one user', () => {
    cy.request('/users').then(response => {
      expect(response.body).to.have.length(1);
    });
  });
});
