// display customer names
let allCustomerNames = ""
customerAdd.onshow=function(){

// populate drop down with customer names     
            selAddCustomer.clear()
            query = "SELECT * FROM customer;"
            req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=[password]&database=djc83259&query" + query)
    if (req.status == 200) { //transit worked.
            allCustomerNames = JSON.parse(req.responseText)
            
            // names now in results array - load names into the dropdown
            selAddCustomer.clear()
            for (i = 0; i <= allCustomers.length - 1; i++)
                selAddCustomer.addItem(allCustomerNames[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
  }
}  

// add customer button
btnAddCustomer.onclick=function(){
  if(typeof(s) == "object") {
  return
  } else {
    //Create query to add customer to database
     query = "INSERT INTO customer2 (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178');"
    // insert new customer
     req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=[password]&database=djc83259&query" + query)
  
  let updatedCustomerList = ""
   if (req.status == 200) { //transit worked.
      //save the sate of the customer 
      updatedCustomerList = JSON.parse(req.responseText)
      console.log(updatedCustomerList)
    } else
      console.log("error")
    
    //Assign result of added customer
    lblAddMsg.text = "Jesse Antiques, was added to the customers database."
    
    //QUERY REMAINING CUSTOMERS
    query = "SELECT name FROM customer;"
    // get the remaining customers
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=[password]&database=djc83259&query" + query)
    
  let remainingCustomers = ""
    if (req.status == 200) { //transit worked.
      //save the sate of the customer 
      remainingCustomers = JSON.parse(req.responseText)
      console.log(remainingCustomers)
    } else
      console.log("error")
    
    let finalCustomerList = ""
    for (i = 0; i <= remainingCustomers.length - 1; i++)
      finalCustomerList = finalCustomerList + remainingCustomers[i] + "\n"
    txtRemaining.value = finalCustomerList
  }
}

btnCheck3.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)
if (req.status == 200){ 
        postDel = JSON.parse(req.responseText)
        console.log(postDel)

    if (postDel.length == 0){  
        lblAddMsg.textContent = "There are no customer in the database."

    }else {   
        console.log(`the parsed JSON is ${postDel}`)
        console.log(`the first row/item in the big array is a small array: ${postDel[0]}`)


        // Now output the names of all the dogs into the textArea control:
        let message1 = ""
        for (i = 0; i < postDel.length; i++)
            message1 = message1 + postDel[i][1] + "\n"
        txtRemaining.value = message1
     } // end else
}else{  
        lblAddMsg.textContent = "Error code: " + req.status

}

}
