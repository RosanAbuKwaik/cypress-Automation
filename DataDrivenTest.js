///<reference types ="cypress"/>

// describe('MyTestSuite', () => {
//     it('DataDrivenTest', () => {
//         cy.fixture('orangehrm2.json').then((data)=>{
//             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//             data.forEach((userdata)=>{
//                 cy.get("input[placeholder='Username']").type(userdata.username); //this data.username will go to the fixture file and get the "username" then arrive to the username from this json file 
//                 cy.get("input[placeholder='Password']").type(userdata.password); //this data.username will go to the fixture file and get the "username" then arrive to the username from this json file 
//                 cy.get("button[type='submit']").click();
//                 if(userdata.username == "Admin" && userdata.password == "admin123"){         
//                     // if the username and password is equal the excpected result it will pass and confirm that the system  display the excpected results 
//                 // that the "Dashboard" in the main page 
//                 cy.get(".oxd-topbar-header-title").should("have.text",userdata.expected)     
//             }else{
//                 // if the username or the password have an error should verify that validation massege is true here :
//                 cy.get(".oxd-alert.oxd-alert--error").should("have.text",userdata.expected);
//             }
//             cy.reload(); // Add this line to reset the form for the next iteration
//             })
//         })

//     });
// });
  
      



