
describe('mysuite', () => {
   it('NavidtaionTest', () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should('eq','Your Store');
    cy.get(':nth-child(7) > .nav-link').click(); //camera navigation bar in the header 
    cy.get("h2").should("have.text","Cameras"); // verofy that heading have the same title as expected in the webiste 
    cy.go("back"); // using go method will navigate to the home page 
    cy.title().should('eq','Your Store'); //this to confirm from the title of the image it is correct to display for the page  
    cy.go("forward"); //to go to the next page (go to the forward page)
    //  minus means go back , bu numbers you can verify that how many stes to go back
    // cy.go(-1); //back (Home Page)
    //  cy.go(1) //forward (Cameras)
    // cy.reload(); //method for reload the page 
    

}); 

});  