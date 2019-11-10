/** @todo Figure this out and don't die in the process */

let grantHealth = 10;
let userHealth = 40;
let grantDeath = "";

//initial prompt

let answer = prompt("Would you like to play a game?");

let user = "";

if ((answer === "yes" , "Yes")) {
  user = prompt("Great! What is your name?");
}


//while loop
while (userHealth > 0 && grantDeath < 3) {
  grantHealth = grantHealth - Math.floor(Math.random() * 3);
  userHealth = userHealth - Math.floor(Math.random() * 3);
  console.log(user + " has " + userHealth + " life left.");
  console.log("Grant the Great has " + grantHealth + " life left.");

  if (grantHealth <= 0) {
    grantHealth = 10;
    grantDeath++;
    console.log("Grant died!");
//   } else if (userHealth <= 0) {
  //    console.log("Grant the Great is the winner");
  }

}

if (grantDeath = 3){
    console.log(user + " has won!")

}

