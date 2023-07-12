/// <reference types="cypress"/>

    // Fixtures file will conatin all the pictures and all jsons files 
    // using fixture method insted of written a static text in the type method will written as 
    //written from the fixtures files data to arrive from then method 
    
    // Direct Access 
    // it.only('FixturesDemoTest', () => {
    // //   to set our application :
    //     cy.visit("https://opensource-demo.orangehrmlive.com/");
    //     //to go to the fixture file and get the orangehrm file :
    //    //fixture method to get the data from the json files 
    //    // insted of written 'Admin' as static text write data when use then method :
    //     cy.fixture("orangehrm").then( (data)=>{
    //     cy.get("input[placeholder='Username']").type(data.username); //this data.username will go to the fixture file and get the "username" then arrive to the username from this json file 
    //     cy.get("input[placeholder='Password']").type(data.password); // also get from the json file and arrive to the password text 
    //     cy.get("button[type='submit']").click();
    //     cy.get(".oxd-topbar-header-title").should("have.text",data.expected)
    //    });
    
       
    // });

    // Access through Hook - for multipme it blocks 
    
    // before method it can be used to make the fixture function only alone 
    // in the second function will use the withput fixture funxtion to take info from the json file 
    

    let userdata;
    before('create a varaible  called userData to store the data that come from the fixtures orangehrm file by using then function after use fixture method ',()=>{
    cy.fixture("orangehrm").then((data)=>{
        userdata= data;
    })
       })

    it('FixturesDemoTest', () => {
        //userdata: varible to arrive the data from the json file : 
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("input[placeholder='Username']").type(userdata.username); //this data.username will go to the fixture file and get the "username" then arrive to the username from this json file 
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-topbar-header-title").should("have.text",userdata.expected)
    }) 


    








