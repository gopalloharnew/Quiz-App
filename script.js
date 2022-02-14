"use strict";
const questionArray1 = [
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
      { opt: "50", isTrue: false },
      { opt: "115", isTrue: false },
      { opt: "25", isTrue: true },
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
      { opt: "Third Option", isTrue: true },
      { opt: "Another Option", isTrue: false },
      { opt: "Last Option", isTrue: false },
    ],
  },
  {
    question: "This is a latest Question",
    options: [
      { opt: "Old Anwer", isTrue: false },
      { opt: "No Answer", isTrue: false },
      { opt: "Correct Answer", isTrue: false },
      { opt: "Latest Answer", isTrue: true },
    ],
  },
  {
    question: "The 'Third Option' is Correct",
    options: [
      { opt: "Option 1", isTrue: false },
      { opt: "Third Option", isTrue: true },
      { opt: "Another Option", isTrue: false },
      { opt: "Last Option", isTrue: false },
    ],
  },
  {
    question: "The 'Third Option' is Correct",
    options: [
      { opt: "Option 1", isTrue: false },
      { opt: "Third Option", isTrue: true },
      { opt: "Another Option", isTrue: false },
      { opt: "Last Option", isTrue: false },
    ],
  },
];

// VARIABLES AND CONSTANTS

const questions = [...questionArray1];
let marksArray = [];
let marksObtained = 0;
let totalMarks = questions.length;
for (let m = 0; m < questions.length; m++) {
  marksArray.push(0);
}

const app = document.querySelector("#app");
const startButton = document.querySelector(".start-button");
const startScreen = document.querySelector(".start-screen");
const questionRow = document.querySelector(".questions-row");
const prevButton = document.querySelectorAll(".prev-button");
const resultScreen = document.querySelector(".result-screen");

// FUNCTIONS

function populateQuestions(questionsArray) {
  questionRow.innerHTML = "";
  for (let i = 0; i < questionsArray.length; i++) {
    const question = questionsArray[i];
    questionRow.innerHTML += `<div class="question-wraper flex center">
      <div class="question-box">
          <div class="question">${question.question}</div>
          <div class="options flex row">
              <div class="opt q-no-${i} flex center">${question.options[0].opt}</div>
              <div class="opt q-no-${i} flex center">${question.options[1].opt}</div>
              <div class="opt q-no-${i} flex center">${question.options[2].opt}</div>
              <div class="opt q-no-${i} flex center">${question.options[3].opt}</div>
          </div>
          <div class="buttons flex">
              <div class="button flex center prev-button">Previous</div>
              <div class="button flex center next-button">Next</div>
          </div>
      </div>
  </div>`;
  }
}

function startQuiz() {
  questionRow.scrollLeft = 0;
  for (let j = 0; j < questions.length; j++) {
    const optionsforq = document.getElementsByClassName(`q-no-${j}`);
    for (let n = 0; n < optionsforq.length; n++) {
      const newOption = optionsforq[n];
      newOption.classList.add("unselected");
      newOption.classList.remove("selected");
    }
  }
  for (let m = 0; m < questions.length; m++) {
    marksArray[m] = 0;
  }
  app.scrollTop = window.innerHeight;
  questionRow.scrollLeft = 0;
}

function PreveNextSubmitButton() {
  for (let p = 0; p < questions.length; p++) {
    const prevbtn = document.getElementsByClassName("prev-button")[p];
    const nextbtn = document.getElementsByClassName("next-button")[p];
    if (p != 0) {
      prevbtn.addEventListener("click", () => {
        questionRow.scrollLeft = window.innerWidth * (p - 1);
      });
    } else {
      prevbtn.style.color = "grey";
      prevbtn.style.pointerEvents = "none";
    }

    if (p < questions.length - 1) {
      nextbtn.addEventListener("click", () => {
        questionRow.scrollLeft = window.innerWidth * (p + 1);
      });
    } else {
      nextbtn.classList.add("submit-button");
      nextbtn.innerHTML = "Submit";
      nextbtn.classList.remove("next-button");
    }
  }

  const submitbtn = document.getElementsByClassName("submit-button")[0];
  submitbtn.addEventListener("click", () => {
    marksObtained = 0;
    for (const questionMark of marksArray) {
      marksObtained += questionMark;
    }
    if (parseInt(totalMarks) < 9) {
      totalMarks = "0" + parseInt(totalMarks);
    }
    if (parseInt(marksObtained) < 9) {
      marksObtained = "0" + parseInt(marksObtained);
    }
    app.scrollTop = window.innerHeight * 2;
    resultScreen.innerHTML = `<div class="your-result">Your Score is&nbsp; ${marksObtained}/${totalMarks}</div>
    <div class="restart-button flex center" onclick="startQuiz()">Restart</div>`;
  });
}

function questionChecker() {
  for (let j = 0; j < questions.length; j++) {
    const question = questions[j];
    const optionsforq = document.getElementsByClassName(`q-no-${j}`);

    for (let n = 0; n < optionsforq.length; n++) {
      const newOption = optionsforq[n];
      newOption.addEventListener("click", () => {
        for (let p = 0; p < optionsforq.length; p++) {
          const optionforbg = optionsforq[p];
          optionforbg.classList.remove("selected");
          newOption.classList.add("unselected");
        }
        newOption.classList.add("selected");
        newOption.classList.remove("unselected");
        if (question.options[n].isTrue) {
          marksArray[j] = 1;
        } else {
          marksArray[j] = 0;
        }
      });
    }
  }
}

// SEQUENCE

populateQuestions(questions);
PreveNextSubmitButton();
questionChecker();
app.scrollTop = 0;
questionRow.scrollTop = 0;
