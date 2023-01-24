let score = 0;
let timeLeft = 60;
let question = 0;
let startQuiz = document.querySelector("sQuiz");


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
    let object = questionArray[questionNumber];
    let {question, choice1, choice2, choice3, choice4} = object;
    let choices = [choice1, choice2, choice3, choice4];

    questionText.textContent = question;
//iterate through choices with forloop
    for (var i = 0; i < choicesArray.length; i++) {
        let selection = choicesText[i];
        let choice = choiceArray[i];
        selection.innerHTML = choice;
    }
}

//start event
startQuiz.addEventListener("click", function() {
    showQuestions();
    for (var i =0; i < 10; i++) {
        let selection = choicesText[i];
        selection.addEventListener("click", function(pick) {
            
            //register user selection from array
            const userChoice = pick.currentTarget.textContent
            const rightChoice = questionsArray[question].answer
            //if answer is right, + point
            if (userChoice === rightChoice) {
                score++;
            }

            question++;
            //when all questions run through quiz ends
            if (question >= questionsArray.length) {
                clearQuestion();
                clearInterval(interval);
                timer.innerHTML = "Quiz is Over";
                return;
            }
            showQuestions();
        });
    }
})

//create timer
