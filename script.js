/** @todo Figure this out and don't die in the process */

let grantHealth = 10;
let userHealth = 40;
let grantDeath = "";

//initial prompt

let user = "";
let answer = prompt("Would you like to play a game?");

if (answer === "yes","Yes") {
//   document.getElementById("start").innerHTML =
  let user = prompt("Great! What is your name?");
}


//while loop
while (userHealth > 0, grantDeath < 3){
    grantHealth == grantHealth - (Math.floor(Math.random() * 3));
    userHealth == userHealth - (Math.floor(Math.random() * 3));
    prompt(user + " has " + userHealth + " left.");
    prompt("Grant the Great has " + grantHealth + " left.");
}


//haha i dont know what im doing
// function playerName(name){
//     const answer = getRandomAnswer(answers);
    
//     generateResponse(name, answer);

// }


// function generateResponse(name, answer){
//     console.log(`You asked: ${name}`);
//     console.log(`Our answer is: ${answer}`);

// }


/**An if statement?? If user says yes to playing game, leads to
 * another prompt where name is asked? If no, something like "ur lame". 
 * How to initialize actual game after that
 */