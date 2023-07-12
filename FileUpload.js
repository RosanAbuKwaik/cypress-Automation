/// <reference types="cypress"/>
describe('File Upload', () => {
//   cypress FileUpload :

    it.skip('Single File Upload', () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").selectFile('cypress/fixtures/cypress.pdf')
        cy.get("#file-upload").selectFile('cypress/fixtures/cypress.pdf')
        // selectFile is method for uploading the file :
        cy.get("input#file-submit").click();
        cy.wait(5000); //after click on the upload button wait : 
        cy.get(".example h3").should("have.text","File Uploaded!"); //to verfy that  success uploaded is visible :
    });

    it.skip(' File Upload Drop and Drag ', () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").selectFile("cypress/fixtures/cypress.pdf", { action: 'drag-drop' });
        cy.wait(5000);
       cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span").contains("cypress.pdf"); //confirm that card contains cypress.pdf file 
    });

    it.only('Multiple File Upload', () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    // Note : when using seslctFile method should contain a full relative path of the files
    cy.get("input#filesToUpload").selectFile(["cypress/fixtures/cypress.pdf","cypress/fixtures/merged(1).pdf"]);
    cy.wait(5000);
    //have.text same as contain.text :
    cy.get(':nth-child(6) > strong').should("have.text","Files You Selected:")    //verify that text contains "File You Selected"
    // cy.get(':nth-child(6) > strong').should("contain.text","Files You Selected:")
});

});














