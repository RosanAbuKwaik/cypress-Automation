/// <reference types="cypress"/>
describe('mysuite', () => {
    it('Capture screenshots & videos', () => {
        cy.visit("https://demo.opencart.com/");
        cy.screenshot("homepage");
        cy.wait(3000)
        cy.get("img[alt='Your Store']").screenshot("logo");
        // Automatically  capture screenshout & videos an failure
        cy.get(':nth-child(7) > .nav-link').click(); 
        cy.get("div[id='content'] h2").should("have.text","Tablets"); // the video will be in the videos 


    });
});





