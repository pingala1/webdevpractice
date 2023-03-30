let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupForm =document.forms["signupForm"];
    let firstNameInput=signupForm.firstName;
    console.log(firstNameInput.value);
});


