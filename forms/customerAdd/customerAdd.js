let result1 = ""
let postAdd= ""

customerAdd.onshow=function(){
   txtAllCustomerName_contents.style.height = "100px"
}


btnAllCustomer1.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)
if (req.status == 200){ 
        results1 = JSON.parse(req.responseText)
        console.log(results1)
    if (results1.length == 0){  
        NSB.MsgBox(`There are no customer in the database.`)
    } else {   
        console.log(`the parsed JSON is ${results1}`)
        console.log(`the first row/item in the big array is a small array: ${results1[0]}`)

        // Now output the names of all the customers into the textArea control:
        let message3 = ""
        for (i = 0; i < results1.length; i++)
            message3 = message3 + results1[i][1] + "\n"
        txtAllCustomerName.value = message3
     } // end else
}else{  
        NSB.MsgBox(`Error: ${req.status}`)
}
}

btnAdd.onclick=function(){
    let name= inptAdd.value
    let name1 = name.split(", ")
    let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('"+name1[0]+"','"+name1[1]+"','"+name1[2]+"','"+name1[3]+"','"+ name1[4]+"')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)

    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)
    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            NSB.MsgBox(`You have successfully added the customer!`)
        else
            NSB.MsgBox(`There was a problem with adding the customer to the database.`)
    } else 
        // transit error
        NSB.MsgBox(`Error: ${req.status}`)
}

btnCheck3.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)
if (req.status == 200){ 
        postAdd = JSON.parse(req.responseText)
        console.log(postAdd)

    if (postAdd.length == 0){  
        NSB.MsgBox(`There are no customer in the database.`)
    }else {   
        console.log(`the parsed JSON is ${postAdd}`)
        console.log(`the first row/item in the big array is a small array: ${postAdd[0]}`)

        // Now output the names of all the dogs into the textArea control:
        let message4 = ""
        for (i = 0; i < postAdd.length; i++)
            message4 = message4 + postAdd[i][1] + "\n"
        txtPostAdd.value = message4
     } // end else

}else{  
        NSB.MsgBox(`Error: ${req.status}`)
}

}





/*
// display customer names
customerAdd.onshow=function(){

// populate drop down with customer names     
            selAddCustomer.clear()
            query = "SELECT * FROM customer;"
            req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=[password]&database=djc83259&query" + query)
    if (req.status == 200) { //transit worked.
            allCustomerNames = JSON.parse(req.responseText)
            selUpdate.clear()
            for (i = 0; i <= allCustomerNames.length - 1; i++)
                selUpdate.addItem(allCustomerNames[i])
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
*/