
describe('Custom Commands', () => {
    it.skip('Handling Links', () => {
      cy.visit("https://demo.nopcommerce.com/") 
      cy.clickLink("Apple MacBook Pro 13-inch")
      cy.get(".product-name").should("have.text","Apple MacBook Pro 13-inch");  
    });
// here is custom command for click on the link using label :
// to make the custom command will use the Cypress Pacakege with commands 
// using add function to put on the first parameter the name of the command :


// Using Casesnsitive characters here :

    it.skip('Over writing exisiting commands', () => {
        cy.visit("https://demo.nopcommerce.com/") 
        cy.clickLink("Apple MacBook Pro 13-inch") //using uppercase 
 });

    it.skip('Login Command', () => {
        cy.visit("https://demo.nopcommerce.com/") 
        //Login :
        // cy.wait(3000)
        // (loginapp) :  here using CutomCommand to easy process of create the accounts :
        cy.Loginapp("testing@gmail.com","test123") //this is cutom cammand that van be used to enter email and password to login the account :
        cy.get('ico-account').should("have.text","My account");
        cy.get(".button-1.login-button").click();
    });
    


});


















