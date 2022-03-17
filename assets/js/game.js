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

  // Subtract values "playerAttack" from "enemyHealth"
  enemyHealth = enemyHealth - playerAttack;

  // Log the results of player attack
  console.log(
    playerName +
      " hit " +
      enemyName +
      " for " +
      playerAttack +
      " damage! " +
      enemyName +
      " only has " +
      enemyHealth +
      " health remaining!"
  );
  // Subtract values "enemyAttack" from "playerHealth"
  playerHealth = playerHealth - enemyAttack;

  // Log results of enemy attack
  console.log(
    enemyName +
      " hit " +
      playerName +
      " for " +
      enemyAttack +
      " damage! " +
      playerName +
      " only has " +
      playerHealth +
      " health remaining!"
  );

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
