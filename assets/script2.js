let timeLeft = 60;
let questionArrayIndex = 0;
let timeInterval = ('');
let score = 0;
let buttons = document.querySelector("#buttons");
let startScreen = document.querySelector(".startScreen");
let startButton = document.querySelector(".startButton");
let quizScreen = document.querySelector(".quizScreen");
let questionText = document.querySelector("#questionText");
let container = document.querySelector(".container");
let qTitle = document.querySelector("#qTitle");
let timerEl = document.querySelector("#count");

// set questions with q=question and use correctindex assigneed to buttons to log answers
function fillQuestions(q, onAnswered) {
    questionText.querySelector("h3").innerText = q.question;
    q.answerArr.forEach((option, i) => {
      try {
        let old_button = buttons.querySelector(
          "button:nth-child(" + (i + 1) + ")"
        );
        let new_element = old_button.cloneNode(true);
        new_element.innerHTML = option;
        new_element.addEventListener("click", () => onAnswered(q.correctIndex === i));
        old_button.parentNode.replaceChild(new_element, old_button);
      } catch (error) {
        console.error('Error while draw the ' + (i + 1) +  "th button:", error);
      }
    });
  }

  //questionarray bank, question/answer/correct choice
    let questionArray = [
    {
      question: "How old am I",
      answerArr: ["12", "24", "38", "34"],
      correctIndex: 2,
    },
    {
      question: "Where am I",
      answerArr: ["Home", "Moon", "DisneyLand", "Space"],
      correctIndex: 0,
    },
    {
      question: "What do we type on",
      answerArr: ["Floor", "Keys", "Walls", "Nothing"],
      correctIndex: 1,
    },
    {
      question: "Where is Carmen San Diego",
      answerArr: [ "San Diego", "Missing", "Space", "Underwater"],
      correctIndex: 0,
    }
  ];
  
  //start button, set counter and call questions
  
  startButton.addEventListener("click", setCounter);
  
  function setCounter() {
    timeLeft = 60;
    timeInterval = null;
    questionArrayIndex = 0;
    if (event.target.matches("button")) {
      startScreen.setAttribute("style", "display: none ");
      quizScreen.setAttribute("style", "display: block ");
    }
  
    let timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "time left: " + timeLeft;
  
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        endScreen();
        let totalScore = score;
      }
    }, 1000);
  
    displayQuestions();
  }
  
  //show questions based on questionarray and index, add score and refresh
  function displayQuestions() {
    if (questionArrayIndex >= questionArray.length) {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
      endScreen();
      return;
    }
     currentLayout = questionArray[questionArrayIndex];
    fillQuestions(currentLayout, (rightAnswer) => {
      if (!rightAnswer) {
        timerEl.textContent = "time left: " + timeLeft;
      }
      score++;
      questionArrayIndex++;
      displayQuestions();
    });
  }
  

 