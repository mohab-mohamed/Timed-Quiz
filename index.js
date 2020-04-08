

$( document ).ready(function() {
    var startQuizEL = $("#startQuiz");
    var timeLeft = "60";
    localStorage.setItem("timer", timeLeft);

    startQuizEL.click(function () {
        var timeLeft = "60";
        localStorage.setItem("timer", timeLeft);
       window.location.replace("questionOne.html");
       
    });


    var timeLeftEl = $("#timeLeft");
    timeLeftEl.text(localStorage.getItem("timer"));
});
