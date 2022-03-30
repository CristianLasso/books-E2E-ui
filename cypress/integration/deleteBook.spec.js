let bookName;

describe('delete book function', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:4200/dashboard');

    })

    it ('the book is deleted', () => {
        //Arrange
        cy.get('.ant-checkbox-input').eq(1).click()
        bookName = cy.get('.ant-table-row').eq(1).get('.ant-table-cell').eq(1).toString()
        
        // Act
        cy.contains('Delete').click();
        
        //Assert
        cy.contains(bookName).should('not.exist')

    })

})