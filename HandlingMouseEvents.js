///<reference types= "cypress"/>
require ('@4tw/cypress-drag-drop')
describe('Mouse Operations', () => {
        it.skip('MouseHover', () => {
            cy.visit("https://demo.opencart.com/"); //visit website
            cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
            // .should("not.be.visible")
            //descktops in the header
            cy.get(".collapse.navbar-collapse").contains("Desktops").trigger("mouseover").click(); //mouseover to the desktop then use clcik on it
            //Macs drop down should be visible 
            cy.get("ul[class='list-unstyled']").contains("Mac (1)").should("be.visible");
        });

        it.skip('Right Click', () => {
            cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html"); //visit website
            // dropdown list can trigger with and get copy and confirm it is visible :       
            /*
            cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu"); // (right click me) button
            cy.get(".context-menu-icon-copy").should("be.visible"); //get copy form the dropdownlist and conform that this item is visble 
          */
            cy.get(".context-menu-one.btn.btn-neutral").rightclick(); //button(right click me)
            cy.get(".context-menu-icon-copy").should("be.visible"); //get copy form the dropdownlist and confirm that this item is visble 
        });

        it.skip('Drag and Drop using plugins', () => {
            cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
            cy.wait(3000);
            cy.get('#box6').drag('#box106',{force:true});
        });

        it.only('Scrolling Page', () => {
        cy.visit("https://www.countries-ofthe-world.com/");
             cy.get('a[href="flags-of-asia.html"]').click();
             // it is Down to scroll into the Myanmar flag :
              cy.get("img[alt='Flag of Myanmar']").scrollIntoView({duration:2000}); //scroll to the bottom flag using scroll into view 
              // to verify that the flag is visible :
              cy.get("img[alt='Flag of Myanmar']").should("be.visible");
              cy.get("img[alt='Flag of Armenia']").scrollIntoView({duration:2000});
              cy.get("img[alt='Flag of Armenia']").should("be.visible")
              cy.get("#footer").scrollIntoView();
              




        });

});