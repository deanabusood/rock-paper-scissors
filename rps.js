let num;

      function computerPlay() {
        const options = ["Rock", "Paper", "Scissors"];
        return options[Math.floor(Math.random() * options.length)];
      }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();

        if (playerSelection === "ROCK") {
          if (computerSelection === "ROCK") {
            num = 0;
            return "You Tie! You both chose Rock";
          }
          else if(computerSelection === "SCISSORS"){
            num = 1;
              return "You Win! Rock beats Scissors";
          }
          else if(computerSelection === "PAPER"){
            num = 2;
              return "You Lose! Paper beats Rock";
          }
        }

        else if (playerSelection === "PAPER") {
          if (computerSelection === "PAPER") {
            num = 0;
            return "You Tie! You both chose Paper";
          }
          else if(computerSelection === "ROCK"){
            num = 1;
              return "You Win! Paper beats Rock";
          }
          else if(computerSelection === "SCISSORS"){
            num = 2;
              return "You Lose! Scissors beats Paper";
          }
        }

        else if (playerSelection === "SCISSORS") {
          if (computerSelection === "SCISSORS") {
            num = 0;
            return "You Tie! You both chose Scissors";
          }
          else if(computerSelection === "PAPER"){
            num = 1;
              return "You Win! Scissors beats Paper";
          }
          else if(computerSelection === "ROCK"){
            num = 2;
              return "You Lose! Rock beats Scissors";
          } 
        }
    }

    function determineWinner(playerScore, computerScore){
      if(playerScore === computerScore){
        alert("You tied the computer!");
      }
      else if (playerScore > computerScore){
        alert("You beat to the computer!");
      } 
      else{
        alert("You lost to the computer!");
      }
    }

    // function game(){
    //   let playerScore = 0;
    //   let computerScore = 0;

    //     for(let i = 0; i < 5; i++){
    //         playerSelection = prompt("Rock, Paper, or Scissors?");
    //         alert( playRound(playerSelection, computerPlay()));

    //         if(num === 1){
    //           playerScore++;
    //         }
    //         else if(num === 2){
    //           computerScore++;
    //         }

    //         let gamesPlayed = (i + 1); //starts at 1
    //         alert("Total games played: "+(gamesPlayed)+"\n\nPlayer wins: "+(playerScore)+
    //         "\nComputer wins: "+(computerScore));

    //         if(gamesPlayed === 5){
    //           determineWinner(playerScore, computerScore);
    //         }
    //     } 
    // }
    
    // game();