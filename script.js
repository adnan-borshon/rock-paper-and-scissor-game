let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let result = document.querySelector(".result")
let user = document.querySelector("#user");
let comp = document.querySelector("#comp")


let userScore= 0;
let computerScore = 0;
let Win = [
    ["rock", "scissor"],
    ["scissor", "paper"],
    ["paper", "rock"]
];
function computerPlay() {
    let x =["rock", "paper", "scissor"];
   let i=parseInt(Math.random()*(3))  ;
   return x[i];
}


function playRound(userChoice){

    let computerChoice = computerPlay();
    if(userChoice === computerChoice) {
        result.innerText = "Draw";
        result.style.backgroundColor = "blue";
        console.log("draw")
    }
    else {
        for(let winner of Win){
            if(winner[0]=== userChoice && winner[1]===computerChoice ){
                userScore++;
                 result.innerText = "You win";
                 result.style.backgroundColor = "green";
                 user.children[0].innerText = `${userScore}`
                console.log("Win")

                
        break;
            }
            else if(winner[0]=== computerChoice && winner[1]=== userChoice){
                computerScore++;
                 result.innerText = "You lost";
                result.style.backgroundColor = "red";
                comp.children[0].innerText = `${computerScore}`
                console.log("lose")

                break;
        }
       
    }

}
}
rock.addEventListener("click", ()=> playRound("rock"));
paper.addEventListener("click", ()=> playRound("paper"));
scissor.addEventListener("click", ()=> playRound("scissor"));
