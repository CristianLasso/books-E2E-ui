const { faker } = require('@faker-js/faker');

let bookName = faker.company.companyName();

describe('edit book function', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:4200/dashboard');
        cy.get('[data-icon="edit"]').eq(5).click()
        cy.get('#name').click()
        cy.get('#name').clear()
        cy.get('#name').type(bookName)

        // Act
        cy.contains('Save').click();

    })

    //Assert
    it ('the book name changed', () => {
        
        cy.contains(bookName).should('exist')

    })


})