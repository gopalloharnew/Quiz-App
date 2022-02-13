const startButton = document.querySelector(".start-button");
const startScreen = document.querySelector(".start-screen");
const questionRow = document.querySelector(".questions-row");

startButton.addEventListener("click", () => {
  startScreen.classList.add("start-screen-up");
  questionRow.classList.add("quiz-started");
});
