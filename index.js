
let highscores = JSON.parse(localStorage.getItem("highscores"));

if(highscores == null) {
    highscores = [];
}

user = {name: "", score: 0, done: false};
localStorage.setItem("highscores", JSON.stringify(highscores));
localStorage.setItem("user", JSON.stringify(user));

$(document).ready(function () {
  var startQuizEL = $("#startQuiz");
  var timeLeft = "60";
  localStorage.setItem("timer", JSON.stringify(timeLeft));

  startQuizEL.click(function () {
    var timeLeft = "60";
    localStorage.setItem("timer", JSON.stringify(timeLeft));
    window.location.replace("questionOne.html");
  });

  var timeLeftEl = $("#timeLeft");
  timeLeftEl.text(JSON.parse(localStorage.getItem("timer")));
});

