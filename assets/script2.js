const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');

//log all questions in a const
const quizData = [
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
//get the getSelected answer
function getSelected() {
    let ans = undefined;
    all_answer.forEach((answer) => {
        if (answer.checked) {
            ans = answer.id;
        }
    });
    return ans;
}
//disselect all answer
function deselectans() {
    all_answer.forEach((answer) => {
        answer.checked = false;
    });
}
//load the quiz data
function getquiz() {
    deselectans();
    question.innerText = quizData[index].question;
    a.innerText = quizData[index].a;
    b.innerText = quizData[index].b;
    c.innerText = quizData[index].c;
    d.innerText = quizData[index].d;
}
//move forward the quiz
function startquiz() {
    btn.addEventListener('click', () => {
        let ans = getSelected();
        if (ans) {
            if (ans == quizData[index].correct) {
                score++;
            }
        }
        index++;
        if (index < quizData.length) {
            getquiz();
        } else {
            alert('score :' + score);
            location.reload();
        }
    });
}
getquiz();
startquiz();