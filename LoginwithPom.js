///<reference types="cypress"/>
import Login from "./PageObjects/Loginpage2.js";
describe("Login Test", () => {
  it("Login Test page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-title").should("have.text", "Dashboard");
  });
  //using pom design pattern :

  it.only("Login Test page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.ClickSubmit();
    ln.VerifyLogin();
});

// Using POM Login with fixtures 
it.skip("Login Test page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture('orangehrm').then((data)=>{
        const ln = new Login();
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.ClickSubmit();
        ln.VerifyLogin();
    });

 
});
});
