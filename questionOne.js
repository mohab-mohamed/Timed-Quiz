var answersEl = $(".answers");

var timeLeft = JSON.parse(localStorage.getItem("timer"));
var time = parseInt(timeLeft);

var timeLeftEl = $("#timeLeft");
timeLeftEl.text(JSON.parse(localStorage.getItem("timer")));

function storeScore() {
  // Stringify and set "todos" key in localStorage to todos array
  let tempUser = { name: "", score: 1, done: false };

  localStorage.setItem("user", JSON.stringify(tempUser));
  return;
}

console.log(answersEl);
$(document).ready(function () {
  answersEl.click(function () {
    event.preventDefault();
    if (event.target.id == "javascript") {
      window.location.replace("questionTwo.html");
      storeScore();
    } else {
      //wrong
      time = time - 5;
      if(time <= 0) {
          time = 0;
      }
    }
  });
  var timerInterval = setInterval(function () {
      if(time >=1) {
        time--;
      }
    localStorage.setItem("timer", JSON.stringify(time));
    timeLeftEl.text(JSON.parse(localStorage.getItem("timer")));
    if (time <= 0) {
      time = 0;
      let user = JSON.parse(localStorage.getItem("user"));
      let tempUser = { name: user.name, score: user.score, done: true };
      localStorage.setItem("user", JSON.stringify(tempUser));
      window.location.replace("end.html");
      clearInterval(timerInterval);
      return;
    }
  }, 1000);
});
