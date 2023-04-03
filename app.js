

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


