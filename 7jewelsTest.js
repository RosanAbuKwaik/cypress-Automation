/// <reference types="cypress"/>

describe("Login and Signup before add products to the cart & add product to the cart with checkout page", () => {
  it("sign in and add to the cart with checkout payment", () => {
    cy.visit("https://7jewels-stage.nstechs-dev.com/en/login");
    cy.get(":nth-child(2) > .form-control").type("h6bng0efpy@ezztt.com");
    cy.get('input[name="password"]').type("246810");
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.get(
      ":nth-child(10) > .widget_item-arrival > .widget_item-info > .widget_item-title-2 > a"
    ).click(); //add item to the cart
    cy.get(".d-flex.mb-5 > .btn").click();
    cy.get(":nth-child(4) > .custome-link > img").click(); //click on the cart icon to check payment
    // cy.wait(7000);
    cy.get(".col-lg-4 > :nth-child(1) > .btn").click(); //to open the checkout page for payment

    // to solve the problem that not reading inputs :

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get("input[name='first_name']").type("rosan");
    cy.get("input[name='last_name']").type("lastname");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .form-group > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Italy", { force: true })
      .type("{enter}");
    cy.get("input[name='address_1']").type("95 First Road", { force: true });
    cy.get("input[name='address_2']").type("Dolore libero qui ir");
    cy.get(
      ".section-governorates > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Novara", { force: true })
      .type("{enter}");
    cy.wait(2000);
    // cy.get(
    //   ".section-cities > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    // )
    cy.get(
      ".section-cities > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Battery Point", { force: true })
      .type("{enter}");
    cy.get("input[name='zip_code']").type("11485");
    cy.get("input[value='1'][name='is_ship_order']").check({ force: true }); //focus that should catch the checkbox not span
    cy.get("textarea[placeholder='Notes']").type("Voluptas consectetur");
    cy.get("input[name='invoice_first_name']").type("Colt");
    cy.get("input[name='invoice_last_name']").type("Chandler");
    cy.get(
      ":nth-child(9) > :nth-child(1) > .form-group > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Argentina", { force: true })
      .type("{enter}");
    cy.get("input[name='invoice_address_1']").type("843 Second Road", {
      force: true,
    });
    cy.get("input[name='invoice_address_2']").type("Ut ipsum in perferen", {
      force: true,
    });
    cy.get(
      ".section-invoice-governorates > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("La Pampa", { force: true })
      .type("{enter}");
    cy.wait(2000);
    cy.get(
      ".section-invoice-cities > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Departamento de Totoral", { force: true })
      .type("{enter}");
    cy.wait(2000);

    cy.get(":nth-child(11) > :nth-child(1) > .form-group > .form-control").type(
      "11485"
    );
    cy.get("#phone").type("2202006314");
    cy.get("input[name='invoice_email']").type("fasedynigo@mailinator.com");
    cy.get("input[name='name']").type("Aspen Frost");
    cy.get("input[name='number']").type("424242424242");
    cy.get("input[placeholder='MM']").type("11");
    cy.get("input[placeholder='YYYY']").type("2024");
    cy.get("input[placeholder='ex. 311']").type("311");
    cy.get("input[name='agree_conditions']").check({ force: true });
    cy.get("#btn_submit").click();
    cy.wait(3000);
    cy.get("#btn_submit").dblclick({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.get("#from_date").click();
    cy.get(".table-condensed > tbody > :nth-child(2) > :nth-child(3)").click();
    // cy.get(".swal2-confirm").click();
    // cy.get("#to_date").click();
    // cy.get(".table-condensed > tbody > :nth-child(3) > :nth-child(3)").click();
    cy.wait(4000);
    cy.get("#title").click().as("searchbtn");
    cy.wait(4000);
    cy.get("@searchbtn").type("202323");
    cy.get("button[type='button']").click();
    cy.get(':nth-child(1) > [data-title="Actions"] > a > .fa').click();
    // cy.get(".btn.btn-outline-primary.cancel-order").click();
    // cy.get("#reason").type("The product is not have a good quality ");
    // cy.get("button[class='swal2-confirm swal2-styled']").click();
    cy.go("back");
    cy.get(
      ':nth-child(2) > [data-title="Order Items"] > .d-flex > .ms-2 > img'
    ).click(); // to view products details
    cy.get(".add").click(); //to increse the cart number product
    cy.get(".d-flex.mb-5 > .btn").click(); // to add product to the cart
    cy.wait(3000);
    cy.go("back");
    cy.get(
      ".nav-link.font-medium.filter-status[data-status='pending']"
    ).click();
    cy.get(".nav-link.font-medium.filter-status.active").click();
    cy.get(":nth-child(4) > .nav-link").click();
    cy.wait(4000);
    cy.get("#pills-tabContent > div.all-data > table > tbody > tr > td").should(
      "have.text",
      "\n                    No Found Orders\n                "
    );
    cy.get(".nav-link.font-medium.filter-status.active").click();
    cy.get("td[colspan='10']").should(
      "have.text",
      "\n                    No Found Orders\n                "
    );

    // cy.get(
    //   "a[href='https://7jewels-stage.nstechs-dev.com/en/user/addresses']"
    // ).click(); // click to the address icon
    // cy.get(":nth-child(2) > .btn").click({ force: true }); // Add button
    // cy.wait(5000);
    // // cy.get("input[name='first_name'] class=['form-contorl']").type("first");
    // cy.get(".o > .form-group > .form-control").type("first");
    // cy.get(":nth-child(2) > :nth-child(2) > .form-group > .form-control").type(
    //   "last"
    // ); //lastname
    // cy.get(
    //   ".form-group > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    // )
    //   .type("Italy", { force: true })
    //   .type("{enter}");
    // cy.get(".form-group > .mb-2").type("street{1", { force: true });
    // cy.get('[name="address_2"]').type("street2", { force: true });
    // cy.get(".section-governorates > .dropdown > .btn")
    //   .type("Novara", { force: true })
    //   .type("{enter}");
    // cy.get(
    //   ".section-governorates > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    // )
    //   .type("Novara", { force: true })
    //   .type("{enter}");
    // cy.get(
    //   ".section-cities > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    // ).type("Battery Point", { force: true }).type("{entrer}");
    // cy.wait(2000);
    // cy.get(":nth-child(5) > .form-group > .form-control").type("123456");
    // cy.get("#phone").type("2062522600");
    // cy.get(":nth-child(7) > .form-group > .form-control").type(
    //   "rosan@gmail.com"
    // );
    // cy.get('#btn_submit').click();

    // DashBoard:
    cy.get(".nav-account > :nth-child(1) > a").click();
    cy.get(".col-lg-9 > .mb-3 > :nth-child(1)").should("be.visible");
    cy.wait(6000);
    cy.get(
      '[transform="translate(25.327,21.641)"] > .amcharts-Container > .amcharts-Sprite-group > .amcharts-Image'
    ).trigger("mouseover", { force: true });
    cy.get(
      '[transform="translate(25.327,21.641)"] > .amcharts-Container > .amcharts-Sprite-group > .amcharts-Image'
    ).click({ force: true });
    cy.wait(7000);

    // get the num of the sections in the Dashboard :
    cy.get(".row.row-cols-lg-5.row-cols-1.row-cols-md-3") // Replace 'section' with the selector for your specific section
      .find(".col")
      .its("length")
      .then((count) => {
        // 'count' will contain the number of divs found
        cy.log(`Number of divs: ${count}`);
      });
    cy.get(".row-cols-lg-5 > :nth-child(1) > .bg-dark-light").click({
      force: true,
    });
    cy.wait(7000);
    cy.get(
      ".col-lg-9 > :nth-child(1) > :nth-child(1) > :nth-child(1) > .text-white"
    ).should("eq", " Personal Data ");
    cy.get("input[name='first_name']").type("ttt", { force: true });
    cy.get("input[name='last_name']").type("lastname", { force: true });
    cy.wait(4000);
    cy.get("input[placeholder='Current Password']").type("12345", {
      force: true,
    });
    cy.get("#password").type("12345@2468", { force: true });
    cy.get("input[placeholder='Confirm New Password']").type("12345@2468", {
      force: true,
    });
    cy.get("#btn_submit");
    cy.wait(4000);
  });
});

//
//
//
//
//
//
