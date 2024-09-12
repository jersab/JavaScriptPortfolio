var gameArea = document.querySelector(".game");
var button = document.querySelector("button");
var message = document.querySelector(".message");
var title = document.querySelector("h1");
var score = 0;
var gamePlay = false;

button.addEventListener("click", function() {
    if (!gamePlay) {
        gamePlay = true;
        message.innerHTML = "Guess the combo";
        gameArea.innerHTML = "";
        title.innerText = "Guess The Combo Game";
        makar();
        button.innerHTML = "Check Combo";
    } else {
        score++;
        message.innerHTML = "Guesses " + score;
        let number = document.querySelectorAll(".num");
        let win = 0;
        for (let i = 0; i < number.length; i++) {
            if (number[i].value < number[i].correct) {
                number[i].style.backgroundColor = "blue";
            } else if (number[i].value > number[i].correct) {
                number[i].style.backgroundColor = "red";
            } else {
                number[i].style.backgroundColor = "green";
                win++;
            }
            if (win == number.length) {
                gameEnd();
            }
        }
    }
});

function makar() {
    for (let i = 0; i < 4; i++) {
        let e = document.createElement("input");
        e.setAttribute("type", "number");
        e.setAttribute("max", 9);
        e.setAttribute("min", 0);
        e.classList.add("num");
        e.order = i;
        e.correct = Math.floor(Math.random() * 10);
        e.value = 0;
        gameArea.appendChild(e);
    }
}

function gameEnd() {
    title.innerText = "🎉 You Win 🎉";
    message.innerHTML = "You succeeded in " + score + " tries";
    button.innerHTML = "Start a new game";
    score = 0;
    gamePlay = false;
}
