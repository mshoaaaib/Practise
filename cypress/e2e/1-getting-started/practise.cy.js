/// <reference types="cypress" />

it('Getting URL ', function(){

    cy.visit('https://practicetestautomation.com/practice-test-login/')
   //cy.screenshot()
   
   
})

it('Enter Credentials ', function(){

    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.screenshot()
})

it('Login ', function(){

    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.url().should('include', 'logged-in-successfully/')
    cy.screenshot()
})
