
    let playerScore = 0;
    let computerScore = 0;
    const SCORE_TO_WIN = 5; 

      function computerPlay() {
        const options = ["Rock", "Paper", "Scissors"];
        return options[Math.floor(Math.random() * options.length)];
      }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();

        if (playerSelection === "ROCK") {
          if (computerSelection === "ROCK") {
            textField.textContent = "You Tie! You both chose Rock";
          }
          else if(computerSelection === "SCISSORS"){
            textField.textContent = "You Win! Rock beats Scissors";
            playerScoreboard.textContent = "Player score: "+(++playerScore);
          }
          else if(computerSelection === "PAPER"){
            textField.textContent = "You Lose! Paper beats Rock";
            computerScoreboard.textContent = "Computer score: "+ (++computerScore);
          }
        }
        else if (playerSelection === "PAPER") {
          if (computerSelection === "PAPER") {
            textField.textContent = "You Tie! You both chose Paper";
          }
          else if(computerSelection === "ROCK"){
            textField.textContent = "You Win! Paper beats Rock";
            playerScoreboard.textContent = "Player score: "+(++playerScore);
          }
          else if(computerSelection === "SCISSORS"){
            textField.textContent = "You Lose! Scissors beats Paper";
            computerScoreboard.textContent = "Computer score: "+ (++computerScore);
          }
        }
        else if (playerSelection === "SCISSORS") {
          if (computerSelection === "SCISSORS") {
            textField.textContent = "You Tie! You both chose Scissors";
          }
          else if(computerSelection === "PAPER"){
            textField.textContent = "You Win! Scissors beats Paper";
            playerScoreboard.textContent = "Player score: "+(++playerScore);
          }
          else if(computerSelection === "ROCK"){
            textField.textContent = "You Lose! Rock beats Scissors";
            computerScoreboard.textContent = "Computer score: "+ (++computerScore);
          } 
        }
          determineWinner();
    }

    function determineWinner(){
      if(playerScore === SCORE_TO_WIN){
        alert("You beat the computer!");
        //reset score if user chooses to replay
      }
      else if(computerScore === SCORE_TO_WIN){
        alert("The computer beat you!");
      }
    }


    const buttons = document.querySelectorAll("button.choice");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {

            playRound(button.id, computerPlay());
        });
    });

    const textField = document.createElement("h3");
    textField.textContent = "Make your selection!";
    textField.setAttribute("style", "text-align: center; margin-top: -25px");

    const mainDiv = document.querySelector("div");
    mainDiv.appendChild(textField);

    const scoreBoard = document.querySelector("#scores");
    const playerScoreboard = document.createElement("h3");
    const computerScoreboard = document.createElement("h3");

    playerScoreboard.textContent = "Player score: "+(playerScore);
    computerScoreboard.textContent = "Computer score: "+(computerScore);


    scoreBoard.appendChild(playerScoreboard);
    scoreBoard.appendChild(computerScoreboard);
