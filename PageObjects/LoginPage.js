class Login {
  //method for enter username in the username field
  setUserName(username) {
    cy.get("input[placeholder='Username']").type(username);
  }
  //method for enter the password in the password field
  setPassword(password) {
    cy.get("input[placeholder='Password']").type(password);
  }
  //method for click on the submit button
  ClickSubmit() {
    cy.get("button[type='submit']").click();
  }
  VerifyLogin() {
    cy.get(".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard");
  }
}
export default Login; // to export the login page

