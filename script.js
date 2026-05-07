console.log('helloworld');
function getPlayerChoice() {
    let playerMove = "";
    while (true) {
        let input = prompt('Type rock, paper or scissors');
        if (input === null) {
            alert("Game Exited!!");
            return null;
            

        }

        else {


            playerMove = input.toLowerCase().trim();

          
          if (playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
             return playerMove; 
            }
            else {
                alert('Invalid choice! Please try again.');
            }
            console.log(playerMove);

        }
    }
}
function getComputerChoice() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber < 1 / 3) {
        computerMove = "rock";
    }
    else if (randomNumber < 2 / 3) {
        computerMove = "paper";
    }
    else if (randomNumber >= 2 / 3) {
        computerMove = "scissors";
    }
    return computerMove;
}
function playRound(){
 const humanSelection= getPlayerChoice();
 const computerSelection = getComputerChoice();
 console.log(humanSelection);
 console.log(computerSelection);
 if(humanSelection === null){
    return null;
 }
 alert("your move " + humanSelection + " computer move " + computerSelection);
if (humanSelection == computerSelection) {
    alert('its a tie');

}
else if  (humanSelection == " rock" && computerSelection == " scissors" || humanSelection == "scissors" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock") {
    alert("YOU WIN ");
    return  "human";
}
else {
  const computerWin=  alert("Computer Win");
  return "computer"
}
}
function playGame(){
    let playerScore = 0;
let computerScore = 0;

for( let i = 0; i < 5 ;i++){
 const result = playRound();
 if(result === null){
    alert('Game Exited by User.')
    return;
 }
 if(result === "computer"){
    computerScore = computerScore + 1;
 }
 else if( result === "human"){
 playerScore = playerScore + 1;
 } 
 console.log( "Current player  secore " + playerScore + " computer score " + computerScore)
}
 if(playerScore > computerScore){
    alert('You are chempion');
 }
 else if(computerScore > playerScore){
    alert('Computer is chempion');
 }
 else{
    alert('its a draw')
 }
console.log(playerScore);
console.log(computerScore);
  
}

playGame();