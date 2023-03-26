//console.log("Javascript");

//Alert Dialog Box
//window.alert("Hello");

//Confirm Dialog Box
//let answer = window.confirm("are you sure to exit?");
//console.log(answer);

//Prompt Dialog Box
// let answer=window.prompt("what is the capital of nepal?");
// if(answer="kathamndu"){
//     window.alert("you are correct");
// }
// console.log(answer);
//console.log(window.document.body);
//window.document.body.style.backgroundColor="skyblue";
//document.body.style.fontFamily="sans-serif";

//document.body.innerHTML="<h1>css</h1>";
//selector
//let movies = document.getElementById("movies");
//movies.style.backgroundcolor = "cyan";
//console.log(movies);

//class selector
// let movies=document.getElementsByClassName("movies");
// console.log(movies);

//query selector
// let movies= document.querySelector(".movieList");
// movies.classList.add("big-red");
// movies.classList.remove("big-red");
// movies.classList.toggle("big-red");

//query Selector All
//let movies1 = document.querySelectorAll(".movieList");
// movies1[1].style.background="blue";

//Event Listener
// document.addEventListener("click",function(){
//     window.alert("you clicked");
// });

// let button=document.querySelector('.click');
// button.addEventListener("click",function(){
//     window.alert("you pressed a button");
// })
let button=document.querySelector(".click");
button.addEventListener("click",function(){
     document.body.classList.toggle("dark");
     if(button.textContent =="Dark Mode"){
        button.textContent="Light Mode";
     }else{
        button.textContent="Dark Mode";
     }
    
});