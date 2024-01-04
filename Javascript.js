let compscore = 0;
let yourscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userfinalscore = document.querySelector("#your-score");
const compfinalscore = document.querySelector("#comp-score");

const compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randindex = Math.floor(Math.random() * 3);
    return options[randindex];
};

const playgame = (userchoice) => {
    console.log("Choice of user is: ", userchoice);
};

const gamewinner = (userwin) => {
    if (userwin) {
        yourscore++;
        userfinalscore.innerText = yourscore;
        console.log("You win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green"
    } else {
        compscore++;
        compfinalscore.innerText = compscore;
        console.log("Computer won");
        msg.innerText = "Computer Win!";
        msg.style.backgroundColor = "red"
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        const compchoice1 = compchoice();
        console.log("Computer choice is: ", compchoice1);

        if (compchoice1 === userchoice) {
            console.log("Game was a draw");
            msg.innerText = "Game was a draw";
            msg.style.backgroundColor = "#081b08";
        } else {
            let userwin = true;
            if (userchoice === "rock")
                userwin = compchoice1 === "paper" ? false : true;
            else if (userchoice === "paper")
                userwin = compchoice1 === "scissors" ? false : true;
            else if (userchoice === "scissors")
                userwin = compchoice1 === "rock" ? false : true;
            gamewinner(userwin);
        }
    });
});
