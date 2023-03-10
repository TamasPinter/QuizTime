const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const d = document.getElementById('d+');
const btn = document.querySelector('#submit');
const all_answer = document.querySelectorAll('.answer');
let highScore = document.querySelector('#high-score');



//log all questions in a const
const quizQuestions = [
    {
        question: 'Who owns Star Wars?',
        a: 'ESPN',
        b: 'Time Warner',
        c: 'Disney',
        d: 'Universal Studios',
        correct: 'c',
    },
    {
        question: 'Where would I embedd my link to a CSS stylesheet?',
        a: 'Footer Tag',
        b: 'JS script document',
        c: 'Body tag',
        d: 'Head tag',
        correct: 'd',
    },
    {
        question: '2005 UEFA Champions League final was between?',
        a: 'Chelsea FC and Porto FC',
        b: 'AC Milan and Liverpool FC',
        c: 'Manchester United and Sparta Prague',
        d: 'Bayern Munich and PSG',
        correct: 'b',
    },
    {
        question: 'Front End, Back End and _____',
        a: 'Processor Development',
        b: 'Social Media Development',
        c: 'All Stack Development',
        d: 'Full Stack Development',
        correct: 'd',
    },
    {
        question: 'James Cameron is behind which blockbuster franchise?',
        a: 'Batman',
        b: 'Avatar',
        c: 'Avengers',
        d: 'Fast and the Furious',
        correct: 'b',
    },
    {
        question: 'Which is not part of Semantic coding?',
        a: '<article>',
        b: '<div>',
        c: '<aside>',
        d: '<footer>',
        correct: 'b',
    },
    {
        question: 'Canada has a total of ___ teams in Major League Baseball',
        a: '0',
        b: '1',
        c: '2',
        d: '3',
        correct: 'b',
    },
    {
        question: 'JS script files should typically be linked where?',
        a: 'In the <head>',
        b: 'At the bottom of the <body>',
        c: 'At the top of the <body>',
        d: 'In the <footer>',
        correct: 'b',
    },
    {
        question: 'Who was the brother of The Hound in Game of Thrones?',
        a: 'The Mountain',
        b: 'The Viper',
        c: 'The Faceless Man',
        d: 'The Mad king',
        correct: 'a',
    },
    {
        question: 'CSS stands for:',
        a: 'Central Secret Service',
        b: 'Change Script Syndicate',
        c: 'Control Style Sheet',
        d: 'Cascading Style Sheet',
        correct: 'd',
    },
];

let index = 0;
let score = 0;
//log the selected choice
function getSelected() {
    let ans = undefined;
    all_answer.forEach((answer) => {
        if (answer.checked) {
            ans = answer.id;
        }
    });
    return ans;
}

function deselectans() {
    all_answer.forEach((answer) => {
        answer.checked = false;
    });
}
//load the quiz data
function getquiz() {
    deselectans();
    question.innerText = quizQuestions[index].question;
    a.innerText = quizQuestions[index].a;
    b.innerText = quizQuestions[index].b;
    c.innerText = quizQuestions[index].c;
    d.innerText = quizQuestions[index].d;
}
//quiz process and logic
function startquiz() {
    btn.addEventListener('click', () => {
        Timer();
        let ans = getSelected();
        getquiz();
       
        
        
        //show message if correct or wrong and add or subtract points
        if (ans) {
            if (ans == quizQuestions[index].correct) {
                score++;
                alert('That is Correct! You get 1 point!');
            }
            else {
                score--;
                alert('That is Wrong! You lose 1 point!'); 
            }
        }
        index++;
        if (index < quizQuestions.length) {
            getquiz();
        } else {
            alert('score :' + score);
            let finalScore = score;
            //ask for user name
            let name = prompt('Please enter your name');
            //save score and name to local storage
            localStorage.setItem("name", name);
            localStorage.setItem("score", finalScore);
            
            location.reload();
            
        }
    });
}

//load saved score to high score
function loadScore() {
    let savedName = localStorage.getItem("name");
    let savedScore = localStorage.getItem("score");
    highScore.innerHTML = savedName + " " + savedScore;
}








function Timer() {
    let timeLeft = 60;
    let time = setInterval(function () {
    document.getElementById('timer').innerHTML = timeLeft + "seconds left!";
    timeLeft--;
    if (timeLeft == 0) {
        clearInterval(time);
        alert('You are out of time!');
        getquiz();
    } 
}, 1000); 
}


startquiz();
loadScore();