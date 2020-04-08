var answersEl = $(".answers");

var timeLeft = localStorage.getItem("timer");
var time = parseInt(timeLeft);

var timeLeftEl = $("#timeLeft");
timeLeftEl.text(localStorage.getItem("timer"));

console.log(answersEl);
$( document ).ready(function() {
    answersEl.click(function () {
        event.preventDefault();
        if(event.target.id == "github") {
           window.location.replace("questionThree.html");
        } else {
            //wrong
        }
    });
    var timerInterval = setInterval( function () {
        time--;
        localStorage.setItem("timer", time);
        timeLeftEl.text(localStorage.getItem("timer"));
        if(time <= 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
});

