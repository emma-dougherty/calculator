describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have arithmetical operations updating the display with the result of the operation', () => {
  cy.get('#number1').click()
  cy.get('#operator_add').click()
  cy.get('#number2').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '3')
  })

  it("should be able to carry out addition operations and update the running total shown on the display", () => {
    cy.get("#number4").click();
    cy.get("#operator-add").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "10");
  });

  it("should carry out subtraction operations and update the running total shown on the display", () => {
    cy.get("#number6").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "59");
  });

  it("should carry out multiplication operations and update the running total shown on the display", () => {
    cy.get("#number1").click();
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "56");
  });

  it("should carry out division operations and update the running total shown on the display", () => {
    cy.get("#number8").click();
    cy.get("#number0").click();
    cy.get("#operator-divide").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "20");
  });

  it('should have multiple operations that can be chained together', () => {
    cy.get('#number7').click()
    cy.get('#operator-subtract').click()
    cy.get('#number3').click()
    cy.get('#operator_add').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9')
  })

  it ('should have an output as expected for positive numbers', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9')
  })

  it ('should have an output as expected for negative numbers', () => {
    cy.get('#number4').click()
    cy.get('#operator-subtract').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-5')
  })

  it ('should have an output as expected for decimal numbers', () => {
    cy.get('#number1').click()
    cy.get('#operator-divide').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0.25')
  })

  it ('should have an output as expected for very large numbers', () => {
    cy.get('#number2').click()
    cy.get('#number5').click()
    cy.get('#operator-multiply').click()
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '25000')
  })

  it ('should display "Not a number" when a number is divided by zero', () => {
    cy.get('#number3').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Not a number')
  })

  })

