/** Jordan Gaza's JavaScript Game Lab
 * Short turn-based game using prompts, while, and if loops.
 * @todo Declare variables, work them into equation  */

let grantHealth = 10;
let userHealth = 40;
let grantDeath = "";

//Initial prompt

let answer = prompt("Would you like to play a game?");

let user = "";

console.log(answer);

if (answer.toLowerCase() === "yes" ) {
  user = prompt("Great! What is your name?");
}


//While loop
while (userHealth > 0 && grantDeath < 3) {
  grantHealth = grantHealth - Math.floor(Math.random() * 3);
  userHealth = userHealth - Math.floor(Math.random() * 3);
  console.log(user + " has " + userHealth + " life left.");
  console.log("Grant the Great has " + grantHealth + " life left.");

  if (grantHealth <= 0) {
    grantHealth = 10;
    grantDeath++;
    console.log("Grant died!");
  }

}

//If loops 

if (grantDeath === 3){
    console.log(user + " has won!");

}

if (userHealth < 0){
    console.log("Grant has won!");
}

