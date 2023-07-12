/// <reference types= "cypress"/>
describe("smoke test", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  beforeEach(() => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });
  
  it("Valiadte login ", () => {
    cy.get(
      'a[id="item_4_title_link"] div[class="inventory_item_name"]'
    ).click();
  });
  it("Validate add to the cart", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").click();
  });
  afterEach(() => {
    cy.get("#react-burger-menu-btn").click();

    // logout key
    cy.get("#logout_sidebar_link").click();
  });
});
