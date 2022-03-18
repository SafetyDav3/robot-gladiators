// ↓↓↓ Robot Fighting Game ↓↓↓

// →→→ Player Stats ←←←
var playerName = window.prompt("What is the name of your robot?");
var playerHealth = 100;
var playerAttack = 10;

// →→→ Enemy Stats ←←←

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// ↓↓↓ Fight function ↓↓↓

var fight = function () {
  // Alert players they are starting a round
  window.alert("Welcome Robot Gladiators!");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP the battle? \n ~Enter FIGHT or SKIP to choose."
  );

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

  // Check player health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " has " + playerHealth + " health left.");
  }

  // Check enemy health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
};

// ↓↓↓ Calling the fight function ↓↓↓
fight();
