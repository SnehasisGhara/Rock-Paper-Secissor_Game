let userScore = 0;
let compScore = 0;
// Access the user choice 
const choices = document.querySelectorAll(".choice");
// Access the msg
const Msg = document . querySelector ("#msg")
// Access computer score and User score 
const userScoreUpdate=document.querySelector("#user-score");
const compScoreUpdate=document.querySelector("#comp-score");

// console.log(choices);
// Create random  Computer Choice 
const genCompChoice = () => {
    const option = ["Rock","Paper","Scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}
// Draw function 
const drawGame = () => {
    // console.log("Game Was Draw ");
    Msg.innerText = "Game Draw !";
    Msg.style.backgroundColor = "#081b31";
};
// user winner condition 
const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You Win The Game")
        userScore++;
        userScoreUpdate.innerText = userScore ;
        Msg.innerText = `You Win !Your ${userChoice} Move Beats ${compChoice}`;
        Msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoreUpdate.innerText = compScore ;
        console.log("Lose The Game");
        Msg.innerText = `You Lost!  ${compChoice} Beats Your ${userChoice} Move ` ;
        Msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("User Choice = " , userChoice);
    // Generate computer choice 
    const compChoice = genCompChoice();
    console.log("Computer Choice = " , compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true ;
        if(userChoice === "Rock"){
            // paper, scissors
            userWin=compChoice === "Paper" ?false :  true;
        }else if(userChoice === "Paper"){
            userWin=compChoice === "Scissors" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin , userChoice,compChoice);

    }
}
// Create a user choice  
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was  ",userChoice)
        playGame(userChoice);

    });
});

