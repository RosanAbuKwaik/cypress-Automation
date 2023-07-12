///<reference types="cypress"/>

describe('MyTestSuite', () => {   
    before(()=>{
        cy.log(" *** lanuch app ***")
  
    })

    after(()=>{
        cy.log("*** Close the app ***")
    })

    beforeEach(()=>{
        cy.log("*** Login ***")

    })

    afterEach('*** Logout ***',()=>{

    })

    it('search', () => {
    cy.log(" *** searching *** ")


        });

        it.skip('advanced search', () => {
             cy.log(" ***  advanced searching *** ")
   
        });
            
        it.only('listing Products', () => {
            
            cy.log(" *** listing products *** ")

        });
});










