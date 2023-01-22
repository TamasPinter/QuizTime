// define variables
let startButton = document.querySelector("sQuiz");
let quizContainer = document.getElementById("quiz");
let quizArea = document.getElementById("question");
let secondsLeft = 60;

//set up questiosn in array bank
let questions = [
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
    question("text?", ["option1", "option2", "option3", "option4"], "correct answer"),
];

function quiz(){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//Display questions and choices
function quizQuest() {
    if(quiz.finished()) {
        showTotal();
    }
    else {
        quizArea.innerHTML = quiz.getQuestionIndex().text;
        let choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            let quizArea = document.getElementbyId("choice" + 1);
            quizArea.innerHTML = choices[i];
            guess('butt' + i, choices[i]);
        }

    }
}