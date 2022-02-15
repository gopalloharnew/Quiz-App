"use strict";
const questionArray1 = [
  {
    question: `MS-Word is an example of`,
    options: [
      { opt: `An operating system `, isTrue: false },
      { opt: `A processing device `, isTrue: false },
      { opt: `Application software`, isTrue: true },
      { opt: `An input device`, isTrue: false },
    ],
  },
  {
    question: `Ctrl, Shift and Alt are called ... keys`,
    options: [
      { opt: `modifier`, isTrue: true },
      { opt: `function`, isTrue: false },
      { opt: `alphanumeric`, isTrue: false },
      { opt: `adjustment`, isTrue: false },
    ],
  },
  {
    question: `A computer cannot "boot" if it does not have the ... `,
    options: [
      { opt: `Compiler`, isTrue: false },
      { opt: `Loader `, isTrue: false },
      { opt: `Operating system`, isTrue: true },
      { opt: `Assembler`, isTrue: false },
    ],
  },
  {
    question: `Junk e-mail is also called ... `,
    options: [
      { opt: `Spam`, isTrue: true },
      { opt: `Spoof`, isTrue: false },
      { opt: `Sniffer script`, isTrue: false },
      { opt: `Spool`, isTrue: false },
    ],
  },
  {
    question: ` ... are attempts by individuals to obtain confidential information from you by falsifying their identity`,
    options: [
      { opt: `Phishing trips`, isTrue: false },
      { opt: `Computer viruses`, isTrue: false },
      { opt: `Phishing scams`, isTrue: true },
      { opt: `Spyware scams`, isTrue: false },
    ],
  },
  {
    question: `Several computers linked to a server to share programs and storage ... `,
    options: [
      { opt: `Grouping`, isTrue: false },
      { opt: `Library`, isTrue: false },
      { opt: `Network`, isTrue: true },
      { opt: `Integrated system`, isTrue: false },
    ],
  },
  {
    question: `Where is RAM located?`,
    options: [
      { opt: `Expansion Board`, isTrue: false },
      { opt: `Mother Board `, isTrue: true },
      { opt: `External Drive`, isTrue: false },
      { opt: `Father Board`, isTrue: false },
    ],
  },
  {
    question: ` ... is a software program used to view Web pages`,
    options: [
      { opt: `site`, isTrue: false },
      { opt: `host`, isTrue: false },
      { opt: `link`, isTrue: false },
      { opt: `browser`, isTrue: true },
    ],
  },
  {
    question: `The first computer was programmed using ... `,
    options: [
      { opt: `Assembly language`, isTrue: false },
      { opt: `Spaghetti code`, isTrue: false },
      { opt: `Source code`, isTrue: false },
      { opt: `Machine language`, isTrue: true },
    ],
  },
  {
    question: `The function of BIOS is to`,
    options: [
      { opt: `Initialize the system hardware components`, isTrue: true },
      { opt: `Update the system`, isTrue: false },
      { opt: `Ensure system performance`, isTrue: false },
      { opt: `Save the system from crashing`, isTrue: false },
    ],
  },
];

// VARIABLES AND CONSTANTS

const questions = [...questionArray1];
let marksArray = [];
let marksObtained = 0;
let totalMarks = questions.length;
let currentpage, currentQuestion;
for (let m = 0; m < questions.length; m++) {
  marksArray.push(0);
}

const app = document.querySelector("#app");
const startButton = document.querySelector(".start-button");
const startScreen = document.querySelector(".start-screen");
const questionRow = document.querySelector(".questions-row");
const resultScreen = document.querySelector(".result-screen");

// FUNCTIONS

function populateQuestions(questionsArray) {
  questionRow.innerHTML = "";
  for (let i = 0; i < questionsArray.length; i++) {
    const question = questionsArray[i];
    questionRow.innerHTML += `<div class="question-wraper flex center">
      <div class="question-box">
          <div class="question">${question.question}</div>
          <div class="options flex column">
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
  currentpage = "questionRow";
  questionRow.scrollLeft = 0;
  currentQuestion = 0;
}

function PreveNextSubmitButton() {
  for (let p = 0; p < questions.length; p++) {
    const prevbtn = document.getElementsByClassName("prev-button")[p];
    const nextbtn = document.getElementsByClassName("next-button")[p];
    if (p != 0) {
      prevbtn.addEventListener("click", () => {
        currentQuestion = p - 1;
        questionRow.scrollLeft = window.innerWidth * currentQuestion;
      });
    } else {
      prevbtn.style.color = "grey";
      prevbtn.style.pointerEvents = "none";
    }

    if (p < questions.length - 1) {
      nextbtn.addEventListener("click", () => {
        currentQuestion = p + 1;
        questionRow.scrollLeft = window.innerWidth * currentQuestion;
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
    if (parseInt(totalMarks) < 10) {
      totalMarks = "0" + parseInt(totalMarks);
    }
    if (parseInt(marksObtained) < 10) {
      marksObtained = "0" + parseInt(marksObtained);
    }
    app.scrollTop = window.innerHeight * 2;
    currentpage = "resultScreen";
    resultScreen.innerHTML = `<div class="your-result">Your Score is&nbsp; ${marksObtained}/${totalMarks}</div>
    <div class="restart-button flex center" onclick="startQuiz()">Restart</div>`;
  });

  window.addEventListener("keydown", (e) => {
    if (currentpage === "questionRow") {
      if (e.code === "ArrowRight" && currentQuestion < questions.length - 1) {
        currentQuestion++;
        questionRow.scrollLeft = window.innerWidth * currentQuestion;
      } else if (e.code === "ArrowLeft" && currentQuestion != 0) {
        currentQuestion--;
        questionRow.scrollLeft = window.innerWidth * currentQuestion;
      }
    }
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

app.scrollTop = 0;
populateQuestions(questions);
PreveNextSubmitButton();
questionChecker();
currentpage = "startScreen";
questionRow.scrollTop = 0;
