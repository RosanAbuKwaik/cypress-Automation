///<reference types= "cypress"/>
describe('test using HadlingTables', () => {
    beforeEach('Login',()=> {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("input#input-username").type("demo");
    cy.get("input#input-password").type("demo");
    cy.get("button.btn-primary").click();
    cy.get("button.btn-close").click();
    //navigate to the Customers sub menue
    //> means a that under the li tag 
    cy.get("li#menu-customer>a").click();
    cy.get("#menu-customer>ul>li:first-child").click();
})
    it('Check num of rows and cols',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should("have.length",'10'); //get the num of rows 
       cy.get("table[class='table table-bordered table-hover']>thead>tr").should("have.length",'1'); //get the num of cols 
    })

    it('check cell data from specific rows & columns',()=>{
        //arrive the 5th rowdata then arrive the 3rd column to get the data:
        // verify that data is displayed in this cell 
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)').contains("xvrt@test.com");
    })
    it('Read all the rows and columns data in the first page',()=>{
        // to get all the rows 
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
      .each(($row,index,$rows)=>{
                // $row : increment for each row that displayed 
                // $index : shows all the indexes for each row
                // $rows : contains all the rows that display 
        cy.wrap($row).within( () =>{
        cy.get("td").each(($col,index,$cols)=>{
        cy.log($col.text());
     })

    })


        })
    })
    it('Paginations',()=>{
    //find total number of pages 
       let TotalPages;
        cy.get(".col-sm-6.text-end").then((e)=>{
       let mytext = e.text();   //Showing 1 to 10 of 13767 (1377 Pages)
       TotalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1) //start from number 1377
       cy.log("Total number of pages in a table "+TotalPages);
    })



    let totalPages=5;
    for(let p=1;p<=totalPages;p++){
        if(totalPages>1){
            cy.log("Active page is :"+p); //  p : the pages numbers 
            //insted of written 1 ,2 ,3 ,4 , 5, 6 .... 
            //1.do for loop for teses pages 
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click(); //the num 5
            cy.wait(3000);
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr') //catach all the rows 
            .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td:nth-child(3)").then((e)=>{
                    cy.log(e.text()) // the Emails in the 3rd cols
                })
            })
        })

    }
    }
})
 
});









