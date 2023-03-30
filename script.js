let submitButton = document.getElementById("submitButton");

let errors={
    
}

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupForm =document.forms["signupForm"];
    let firstNameInput=signupForm.firstname;
    let lastNameInput=signupForm.lastname;//<input name="lastname">
    
    if(firstNameInput.value==""){
        errors.firstName="firstname should not be empty";
        
        }
        if(lastNameInput.value==""){
            errors.lastName="lastname should not be empty";
            
        }
        console.log(errors);
        for(let error in errors){

        }
    });
    // let lastnameGroup=document.getElementById('lastnameGroup');
    // let lastnameMessage=document.querySelector("#lastnameGroup .message");
    // lastnameGroup.classList.add("error");
    // lastnameMessage.textContent="lastname should not be empty";