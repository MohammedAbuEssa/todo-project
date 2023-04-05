"use strict"

let userName = prompt("What is your name?");
let gender=prompt("What is your gender?").toUpperCase();

let age = parseInt(prompt("Please " + userName +" enter your age:"));

console.log(typeof(age));

if (age<1) {
    alert("Your age is "+age);
}

let welcomeMessage=confirm("Do you want to skip the welcoming message.")

if (welcomeMessage===false) {
    if(gender==="MALE"){
    alert("welcome Mr. "+ userName);}
    else if(gender==="FEMALE"){
    alert("welcome Ms. "+ userName);
    }
}





let somkingUser=confirm("Do you smoke?");
let jordanianUser=confirm("Are you a jordanian citizen?");
let study=confirm("Have you studied at the university?");

const threeQuestions=[];

threeQuestions.push(somkingUser);
threeQuestions.push(jordanianUser);
threeQuestions.push(study);

console.log(threeQuestions);