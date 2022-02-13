const questions = [
  {
    question: "What is The Value of 10 - 5",
    options: [
      { opt: "10", isTrue: false },
      { opt: "5", isTrue: true },
      { opt: "15", isTrue: false },
      { opt: "0", isTrue: false },
    ],
  },
  {
    question: "Which of the Following is Answer",
    options: [
      { opt: "Answer", isTrue: true },
      { opt: "Question", isTrue: false },
      { opt: "Correct", isTrue: false },
      { opt: "Right", isTrue: false },
    ],
  },
  {
    question: "what is 5*5/1",
    options: [
      { opt: "100", isTrue: false },
      { opt: "50", isTrue: true },
      { opt: "115", isTrue: false },
      { opt: "25", isTrue: false },
    ],
  },
  {
    question: "When is Independence day",
    options: [
      { opt: "15/07/1947 only", isTrue: false },
      { opt: "26/01", isTrue: false },
      { opt: "15/07", isTrue: true },
      { opt: "0", isTrue: false },
    ],
  },
  {
    question: "The 'Third Option' is Correct",
    options: [
      { opt: "Option 1", isTrue: false },
      { opt: "Last Option", isTrue: true },
      { opt: "Another Option", isTrue: false },
      { opt: "Third Option", isTrue: false },
    ],
  },
];

const startButton = document.querySelector(".start-button");
const startScreen = document.querySelector(".start-screen");
const questionRow = document.querySelector(".questions-row");
const prevButton = document.querySelectorAll(".prev-button");

startButton.addEventListener("click", () => {
  startScreen.classList.add("start-screen-up");
  questionRow.classList.add("quiz-started");
});

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  questionRow.innerHTML += `<div class="question-wraper">
    <div class="question-box">
        <div class="question">${question.question}</div>
        <div class="options">
            <div class="opt">${question.options[0].opt}</div>
            <div class="opt">${question.options[1].opt}</div>
            <div class="opt">${question.options[2].opt}</div>
            <div class="opt">${question.options[3].opt}</div>
        </div>
        <div class="buttons">
            <div class="button prev-button">Previous</div>
            <div class="button next-button">Next</div>
        </div>
    </div>
</div>`;
}

document.getElementsByClassName("prev-button")[0].style.pointerEvents = "none";
document.getElementsByClassName("prev-button")[0].style.color = "grey";

let nextBtnArray = document.getElementsByClassName("next-button");
let lastnextBtn =
  document.getElementsByClassName("next-button")[nextBtnArray.length - 1];

lastnextBtn.classList.add("submit-button");
lastnextBtn.innerHTML = "Submit";
lastnextBtn.classList.remove("next-button");

for (let j = 0; j < questions.length; j++) {
  const question = questions[j];
  const prevbtn = document.getElementsByClassName("prev-button")[j];
  const nextbtn = document.getElementsByClassName("next-button")[j];

  prevbtn.addEventListener("click", () => {
    if (j != 0) {
      questionRow.scrollLeft = window.innerWidth * (j - 1);
    }
  });

  if (j < questions.length - 1) {
    nextbtn.addEventListener("click", () => {
      questionRow.scrollLeft = window.innerWidth * (j + 1);
    });
  }
}
