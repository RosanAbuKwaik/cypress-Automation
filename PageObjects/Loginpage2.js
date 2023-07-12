class Login {
    // class contains the fields selectors 

 txtUserName ="input[placeholder='Username']";
    txtPassword ="input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmsg=".oxd-topbar-header-breadcrumb > .oxd-text";

    //method for enter username in the username field
    setUserName(username) {
      cy.get(this.txtUserName).type(username)
    }
    //method for enter the password in the password field
    setPassword(password) {
      cy.get(this.txtPassword).type(password);
    }
    //method for click on the submit button
    ClickSubmit() {
      cy.get(this.btnSubmit).click();
    }
    VerifyLogin() {
      cy.get(this.lblmsg).should("have.text", "Dashboard");
    }
  }
  export default Login; // to export the login page
  
  