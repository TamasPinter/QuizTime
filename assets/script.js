let score = 0;
let timeLeft = 60;
let question = 0;
let questionNumber = 0;
let startQuiz = document.querySelector("#start");
let container = document.getElementById("#container");
let questionsBox = document.getElementById("#questionsBox");
let choicesText = document.querySelectorAll(".answer");
let questionText = document.querySelector("#question");
let enter = document.querySelector("#enter");
const body = document.getElementById("body");


let questionsArray = [
    //10 questions with answer for arrays
    {
      question: "What does parseInt do?",
      choice1: "parses a string argument and returns a floating point number.",
      choice2: "evaluates JavaScript code represented as a string.",
      choice3:"parses a string argument and returns an integer of the specified radix",
      choice4: "it pops up a prompt window in your browser.",
      answer: "parses a string argument and returns an integer of the specified radix",
    },
    {
      question: "how do you declare a variable?",
      choice1: "variable name = value",
      choice2: "var name = value;", 
      choice3: "var.NAME = value;",
      choice4: "var = name.value;",
      answer: "var name = value;",
    },
    {
      question: "which of these will evaluate to the number 20?",
      choice1: "var twenty = 10 + 10; ",
      choice2: "var twenty = '10' + '10'; ",
      choice3: "var twenty = 10 + '10'; ",
      choice4: "twenty = '20' ",
      answer: "var twenty = 10 + 10; ",
    },
    {
      question: "what is the proper syntax for this function?",
      choice1: "myfunction() (console.log('Hello World!'); ",
      choice2: "function MYFUNCTION {console.log('Hello World!'}; ",
      choice3: "function myFunction() {console.log('Hello World!')}; ",
      choice4: "function() = myFunction {console.log(12)} ",
      answer: "function myFunction() {console.log('Hello World!')}; ",
    },
    {
      question: "What does parseInt do?",
      choice1: "parses a string argument and returns a floating point number.",
      choice2: "evaluates JavaScript code represented as a string.",
      choice3:"parses a string argument and returns an integer of the specified radix",
      choice4: "it pops up a prompt window in your browser.",
      answer: "parses a string argument and returns an integer of the specified radix",
     },
    {
      question: "how do you declare a variable?",
      choice1: "variable name = value",
      choice2: "var name = value;", 
      choice3: "var.NAME = value;",
      choice4: "var = name.value;",
      answer: "var name = value;",
    },
    {
      question: "which of these will evaluate to the number 20?",
      choice1: "var twenty = 10 + 10; ",
      choice2: "var twenty = '10' + '10'; ",
      choice3: "var twenty = 10 + '10'; ",
      choice4: "twenty = '20' ",
      answer: "var twenty = 10 + 10; ",
    },
     {
      question: "what is the proper syntax for this function?",
      choice1: "myfunction() (console.log('Hello World!'); ",
      choice2: "function MYFUNCTION {console.log('Hello World!'}; ",
      choice3: "function myFunction() {console.log('Hello World!')}; ",
      choice4: "function() = myFunction {console.log(12)} ",
      answer: "function myFunction() {console.log('Hello World!')}; ",
    },
    {
      question: "What does parseInt do?",
      choice1: "parses a string argument and returns a floating point number.",
      choice2: "evaluates JavaScript code represented as a string.",
      choice3:"parses a string argument and returns an integer of the specified radix",
      choice4: "it pops up a prompt window in your browser.",
      answer: "parses a string argument and returns an integer of the specified radix",
    },
    {
      question: "how do you declare a variable?",
      choice1: "variable name = value",
      choice2: "var name = value;", 
      choice3: "var.NAME = value;",
      choice4: "var = name.value;",
      answer: "var name = value;",
    },
    {
      question: "which of these will evaluate to the number 20?",
      choice1: "var twenty = 10 + 10; ",
      choice2: "var twenty = '10' + '10'; ",
      choice3: "var twenty = 10 + '10'; ",
      choice4: "twenty = '20' ",
      answer: "var twenty = 10 + 10; ",
    },
    {
      question: "what is the proper syntax for this function?",
      choice1: "myfunction() (console.log('Hello World!'); ",
      choice2: "function MYFUNCTION {console.log('Hello World!'}; ",
      choice3: "function myFunction() {console.log('Hello World!')}; ",
      choice4: "function() = myFunction {console.log(12)} ",
      answer: "function myFunction() {console.log('Hello World!')}; ",
    },
];

// create a function to call on question array
function showQuestions() {
    let object = questionsArray[questionNumber];
    let {question, choice1, choice2, choice3, choice4} = object;
    let choices = [choice1, choice2, choice3, choice4];

    questionText.textContent = question;
//iterate through choices with forloop
    for (let i = 0; i < choices.length; i++) {
        let selection = choicesText[i];
        let choice = choices[i];
        selection.innerHTML = choice;
    }
}

//start event
startQuiz.addEventListener("click", function() {
    showQuestions();
    for (let i = 0; i < 4; i++) {
        let selection = choicesText[i];
        selection.addEventListener("click", function(e) {
            
            //register user selection from array
            const userChoice = e.currentTarget.textContent;
            const rightChoice = questionsArray[question].answer;
            //if answer is right, + point
            if (userChoice === rightChoice) {
                score++;
                
            }

            questionNumber++;
            //when all questions run through quiz ends
            if (questionNumber >= questionsArray.length) {
                clearQuestion();
                clearInterval(interval);
                timer.innerHTML = "Quiz is Over";
                return;
            }
            
        });
    } showQuestions();
})

//create timer
function setTime() {
    let interval = setInterval(function () {
        timeLeft--;
        timer = document.getElementById("timer");
        if (timeLeft === 0) {
            clearInterval();
            clearQuestion();
        } 
    }, 1000)
}

//clear out options and question
function clearQuestion() {
    questionsBox.setAttribute("style", "width:250px; height: 150px");
    container.setAttribute("style", "width: 30%");
    questionsBox.style.display = "none";
    userName.setAttribute("style", "visibility: visible");
    enter.style.visibility = "visible";
}

//save score and name local
let savedScore = [];
let localStorageContent = localStorage.getItem('High Scores')
localStorageContent = JSON.parse(localStorageContent);

if(localStorageContent !== null) {
    savedScore = localStorageContent
}

console.log(localStorageContent);

enter.addEventListener("click", function(event) {
    event.preventDefault();

  console.log(body);
  console.log(event);

  let isNumber = typeof Number(enterName.value) === 'number'


  if(enterName.value === ''  ) {
      alert("You need to enter a name!") 
      return
  } 

  enterName.value = enterName.value; 
  
  var scoreText = `Score: ${score} You finished the quiz! in ${timerScore} seconds`;
  var currentScore = {'name': enterName.value, 'scoreTimer': scoreText};

  highscoresArr.push(currentScore);
  localStorage.setItem('High Scores', JSON.stringify(savedScore));
  var userDisplayName = ""; ///

  for(var i = 0; i < savedScore.length; i++){
    savedScore[i]
    console.log(savedScore[i]);
    userDisplayName += `
    <div id="name-container">
  ${'Player Name: ' +  savedScore[i].name} 
  </div>
  <div>
    ${savedScore[i].scoreTimer}
  </div>`;
  }

  body.innerHTML = `         
  <div  id="hsBanner">
    <h1>HIGH SCORES!</h1>
  </div>
  <div id="scoresContainer">
    ${userDisplayName}
  </div>`;
  

  localStorage.setItem('Player Score/Time', scoreText)

  console.log("Player Name: " + enterName.value + scoreText); 

  let savedName = localStorage.getItem('Player Name');
  let userRecord = localStorage.getItem('Player Score/Time');


  
if (savedName) {
	enterName.textContent = savedName;
} else if (userRecord) {
    scoreText.textContent = userRecord
}

});
