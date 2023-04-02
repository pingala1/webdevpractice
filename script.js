let submitButton = document.getElementById("submitButton");

let errors={
    
}

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupForm =document.forms["signupForm"];
    let firstNameInput=signupForm.firstname;
    let lastNameInput=signupForm.lastname;//<input name="lastname">
    let EmailInput=signupForm.Email;
    let passwordInput=signupForm.password;

    if(firstNameInput.value==""){
        errors.firstname="firstname should not be empty";
        
        }
        if(lastNameInput.value==""){
            errors.lastname="lastname should not be empty";
            
        }
        if(EmailInput.value==""){
            errors.Email="Email should not be empty";
        }
        if(passwordInput.value.length<=5){
            errors.password="Minimum 6 characters are needed";
        }
        console.log(errors);
        for(let error in errors){
            let lastnameGroup=document.getElementById(`${error}Group`);
            let lastnameMessage=document.querySelector(`#${error}Group .message`);
            lastnameGroup.classList.add("error");
            lastnameMessage.textContent=errors[error];
        }
        if(Object.keys(errors).length == 0){
          signupForm.submit();
        }
    });
    