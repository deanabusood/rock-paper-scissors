
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
          }
          else if(computerSelection === "PAPER"){
            textField.textContent = "You Lose! Paper beats Rock";
          }
        }
        else if (playerSelection === "PAPER") {
          if (computerSelection === "PAPER") {
            textField.textContent = "You Tie! You both chose Paper";
          }
          else if(computerSelection === "ROCK"){
            textField.textContent = "You Win! Paper beats Rock";
          }
          else if(computerSelection === "SCISSORS"){
            textField.textContent = "You Lose! Scissors beats Paper";
          }
        }
        else if (playerSelection === "SCISSORS") {
          if (computerSelection === "SCISSORS") {
            textField.textContent = "You Tie! You both chose Scissors";
          }
          else if(computerSelection === "PAPER"){
            textField.textContent = "You Win! Scissors beats Paper";
          }
          else if(computerSelection === "ROCK"){
            textField.textContent = "You Lose! Rock beats Scissors";
          } 
        }

    }

    function determineWinner(playerScore, computerScore){
      if(playerScore === SCORE_TO_WIN){
        alert("You beat the computer!");
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
    textField.setAttribute("style", "text-align: center");

    const mainDiv = document.querySelector("div");
    mainDiv.appendChild(textField);