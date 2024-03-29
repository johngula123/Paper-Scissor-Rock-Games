let score = {
  wins: 0, 
  losses:0,
  ties:0
};

let result ='';
function pickMove(playerMove){
  let output =document.querySelector("#result");
  let array=["Scissor","Rock","Paper"];
  let computerMove= array[Math.floor(Math.random() * array.length)];
  if(playerMove === "Rock"){
    if(computerMove === "Paper"){
      result = "You Lose";
    }
    else if(computerMove === "Scissor"){
       result = "You win";
    }
    else if(computerMove === "Rock"){
       result ="Tie";
    }
  }
  else if(playerMove === "Scissor"){
    if(computerMove === "Paper"){
      result ="You win";
    }
    else if(computerMove === "Rock"){
       result ="You Lose";
    }
    else if(computerMove === "Scissor"){
      result ="Tie";
    }
  }
  else if(playerMove === "Paper"){
    if(computerMove === "Rock"){
      result ="You win";
    }
    else if(computerMove === "Scissor"){
      result ="You Lose";
    }
    else if(computerMove === "Paper"){
      result ="Tie";
    }
  }
      if(result === "You win"){
      score.wins += 1;
    }
    else if(result === "You Lose"){
      score.losses +=1;
    }
    else if(result === "Tie"){
      score.ties +=1;
    }
  output.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. Result ${result} <br>
  Wins: ${score.wins}
  Losses: ${score.losses}
  Ties: ${score.ties}`;
}
