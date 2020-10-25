let allNames = ""
customerUpdate.onshow=function(){
    // get the data to populate the dropdown with names from database
    let query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)

    if (req.status == 200) { //transit worked.
            allNames = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            selUpdate.clear()
            for (i = 0; i <= allNames.length - 1; i++)
                selUpdate.addItem(allNames[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}
btnUpdate.onclick=function(){
    let newName = inptNewName.value
    let oldName = selUpdate.value

    let found = false
    for (i = 0; i <= allNames.length - 1; i++) {
        // console.log(`FOUND IS false and name is ${allNames[i]}`)
        if (oldName == allNames[i]) {
            found = true
            break
        }
     }   

    if (found == false) 
       NSB.MsgBox("That pet name is not in the database.")
    else if (found == true) {
        query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
        //alert(query)
       req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)
        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully changed the pet name!`)
                // reset controls to original state
                inptNewName.value = ""
                selUpdate.value = ""
            } else
                NSB.MsgBox(`There was a problem changing the pet name.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
            
    }
  }  

btnCheck2.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=djc83259&pass=" + pw + "&database=djc83259&query=" + query)
if (req.status == 200){ 
        postDel = JSON.parse(req.responseText)
        console.log(postDel)

    if (postDel.length == 0){  
        lblUpdate.textContent = "There are no customer in the database."

    }else {   
        console.log(`the parsed JSON is ${postDel}`)
        console.log(`the first row/item in the big array is a small array: ${postDel[0]}`)

        // Now output the names of all the dogs into the textArea control:
        let message1 = ""
        for (i = 0; i < postDel.length; i++)
            message1 = message1 + postDel[i][1] + "\n"
        txtUpdate.value = message1
     } // end else
}else{  
        lblUpdate.textContent = "Error code: " + req.status

}

}

