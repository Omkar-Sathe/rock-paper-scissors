function getComputerChoice(random_number) {
    switch(random_number) {
        case 1: 
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelect, compSelect) {
    if ((playerSelect == "Rock") && (compSelect == "Paper")) {
        return "You lose! Paper beats rock";
    }
    else if ((playerSelect == "Rock") && (compSelect == "Scissors")) {
        return "You win! Rock beats scissors";
    }
    else if ((playerSelect == "Paper") && (compSelect == "Rock")) {
        return "You win! Paper beats rock";
    }
    else if ((playerSelect == "Paper") && (compSelect == "Scissors")) {
        return "You lose! Scissors beats paper";
    }
    else if ((playerSelect == "Scissors") && (compSelect == "Rock")) {
        return "You lose! Rock beats scissors";
    }
    else if ((playerSelect == "Scissors") && (compSelect == "Paper")) {
        return "You win! Scissors beats paper";
    }
    else {
        return "It's a tie!";
    }
}

function game(playerSelect) {
    let random_number;
    let min = 1;
    let max = 3;
    //let playerSelect;
    let compSelect;

    random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    compSelect = (getComputerChoice(random_number));
    //playerSelect = prompt("What do you choose?");
    console.log(playRound(playerSelect, compSelect));

}

const rock_btn = document.querySelector('#rbtn');
rock_btn.addEventListener('click', () => {
    playerSelect = "Rock";
    game(playerSelect);
});

const paper_btn = document.querySelector('#pbtn');
paper_btn.addEventListener('click', () => {
    playerSelect = "Paper";
    game(playerSelect);
});

const sci_btn = document.querySelector('#sbtn');
sci_btn.addEventListener('click', () => {
    playerSelect = "Scissors";
    game(playerSelect);
});

//game();


