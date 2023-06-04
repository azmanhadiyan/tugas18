describe("Assertion", () => {
  beforeEach(() => {
    cy.visit("http://demoaut.katalon.com");
  })

  it('clicking "Make Appointment" navigates to a new url', () => {

    cy.contains("Make Appointment").click();
    cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')
    cy.get('.col-sm-offset-4 > .input-group > .form-control')

  });
});
