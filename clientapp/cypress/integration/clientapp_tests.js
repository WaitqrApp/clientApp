//Arrange
//Act
//Assert
describe('Clientapp test', function(){
   it('loads client app default route', function(){
        cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        });
       cy.visit('https://clientewaitqr.netlify.app/')
   }) 
})