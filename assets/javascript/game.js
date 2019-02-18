// Timer code copied from stack overflow! It still doesn't work 100% - nothing happens when it ends it just starts over. Maybe I can talk to TA for help? :D
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function check(){

var question1 = document.trivia.question1.value;
var question2 = document.trivia.question2.value;
var question3 = document.trivia.question3.value;
var question4 = document.trivia.question4.value;
var question5 = document.trivia.question5.value;
var correct = 0;

    if (question1 == "Paul Brown") {
        correct++;
    }
    if (question2 == "1970") {
        correct++;
    }
    if (question3 == "False") {
        correct++;
    }
    if (question4 == "hungry") {
        correct++
    }
    if (question5 == "jungle") {
        correct++
    }

    
var messages = ["Are YOU the #1 Bengals Fan?", "You're an average Joe Mixon", "Clearly, Cincinnati isn't your team."];
var images = ["assets/images/fan.gif", "assets/images/joe.png", "assets/images/lose.jpg"];
var range;

    if (correct < 3) {
        range = 2
    }

    if (correct > 2 && correct < 5) {
        range = 1
    }

    if (correct > 3 && correct < 6) {
        range = 0
    }

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("images").src = images[range];

}


