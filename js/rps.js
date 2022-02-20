
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
            updateBorder(playerSelection, "TIE");
          }
          else if(computerSelection === "SCISSORS"){
            textField.textContent = "You Win! Rock beats Scissors";
            playerScoreboard.textContent = "Player score: "+(++playerScore);
            updateBorder(playerSelection, "WIN");
          }
          else if(computerSelection === "PAPER"){
            textField.textContent = "You Lose! Paper beats Rock";
            computerScoreboard.textContent = "Computer score: "+ (++computerScore);
          }
        }
        else if (playerSelection === "PAPER") {
          if (computerSelection === "PAPER") {
            textField.textContent = "You Tie! You both chose Paper";
            updateBorder(playerSelection, "TIE");
          }
          else if(computerSelection === "ROCK"){
            textField.textContent = "You Win! Paper beats Rock";
            playerScoreboard.textContent = "Player score: "+(++playerScore);
            updateBorder(playerSelection, "WIN");
          }
          else if(computerSelection === "SCISSORS"){
            textField.textContent = "You Lose! Scissors beats Paper";
            computerScoreboard.textContent = "Computer score: "+ (++computerScore);
          }
        }
        else if (playerSelection === "SCISSORS") {
          if (computerSelection === "SCISSORS") {
            textField.textContent = "You Tie! You both chose Scissors";
            updateBorder(playerSelection, "TIE")
          }
          else if(computerSelection === "PAPER"){
            textField.textContent = "You Win! Scissors beats Paper";
            playerScoreboard.textContent = "Player score: "+(++playerScore);
            updateBorder(playerSelection, "WIN");
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
        resetGame(); 
      }
      else if(computerScore === SCORE_TO_WIN){
        alert("The computer beat you!");
        resetGame();
      }
    }

    function resetGame(){
      playerScore = 0;
      computerScore = 0;
      playerScoreboard.textContent = "Player score: "+(playerScore);
      computerScoreboard.textContent = "Computer score: "+ (computerScore);
    }

    function updateBorder(playerSelection, result){
        if(option === "WIN"){
          playerSelection.classList.toggle("win");
        }
        else if(option === "LOSE"){
          playerSelection.classList.toggle("lose")
        }
        else{
          playerSelection.classList.toggle("tie")
        }
    }

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");


    const buttons = document.querySelectorAll("button.choice");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {

            playRound(button.id, computerPlay());
        });
    });

    const textField = document.createElement("h2");
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
