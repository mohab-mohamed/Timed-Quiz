$(document).ready(function () {
  function renderHighScores() {
    $scoreList = $("#scoreList");

    $scoreList.empty();

    let highscores = JSON.parse(localStorage.getItem("highscores"));

    highscores.forEach((highscore) => {
      const listItem = $("<li>");
      const listStr = highscore.name + ": " + highscore.score.toString();

      listItem.text(listStr);

      $scoreList.append(listItem);
    });
  }
  renderHighScores();
  let modalOptions = {
    keyboard: true,
    focus: true,
    show: true,
  };
  let initialUser = JSON.parse((localStorage.getItem("user")));
  let initialScore = initialUser.score;
  let done = initialUser.done;

  console.log(initialUser);
  let $scoreSpan = $("#scoreSpan");
  $scoreSpan.text(initialScore);

  if (done) {
    console.log("enetered");
    const $formModal = $("#formModal");
    $formModal.modal(modalOptions);
  }

  $highscoreForm = $(".highscoreForm");

  $highscoreForm.on("submit", async function (event) {
    event.preventDefault();

    let $nameInput = $("#nameInput");
    let user = JSON.parse(localStorage.getItem("user"));
    let score = user.score;

    let saveUser = { name: $nameInput.val().trim(), score: score };

    let highscores = JSON.parse(localStorage.getItem("highscores"));

    highscores.push(saveUser);
    localStorage.setItem("highscores", JSON.stringify(highscores));

    renderHighScores();

    let resetUser = { name: "", score: 0, done: false };
    localStorage.setItem("user", JSON.stringify(resetUser));

    const $formModal = $("#formModal");

    $formModal.modal("hide");
  });
});
