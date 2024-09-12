
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(document).keypress(()=>{
    if (!gameStarted) {
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

function nextSequence(){
    userClickedPattern = [];

    level++
    $("h1").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);  

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);    
};
$(".btn").click((e) => {
    var userChosenColour = e.target.id;    
    userClickedPattern.push(userChosenColour); 
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
});

function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
}, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { 
       if (userClickedPattern.length === gamePattern.length){
        setTimeout(() => {
            nextSequence();
        }, 1000);
       }
    }else {
        var sound = new Audio("sounds/wrong.mp3");
        sound.play();
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);        
        $("h1").html("GAME-OVER<br><br>Press Any Key to Restart");
        startOver();
    }   
}

function startOver(){
    gameStarted = false;
    level = 0;
    gamePattern = [];
}

