const quizData = [
    {
        question: "Как импортировать модуль в Python?",
        a: "импортировать модуль",
        b: "import модуль",
        c: "подключить модуль",
        correct: "b",
    },
    {
        question: "Как импортировать отдельную функцию из модуля?",
        a: "импортировать функция из модуль",
        b: "import модуль.функция",
        c: "from модуль import функция",
        correct: "c",
    },
    {
        question: "Как импортировать все функции из модуля?",
        a: "import все из модуля",
        b: "from модуль import *",
        c: "импортировать все функции",
        correct: "b",
    },
    {
        question: "Как импортировать модуль под другим именем?",
        a: "import модуль as псевдоним",
        b: "import модуль как псевдоним",
        c: "от модуля импортировать как псевдоним",
        correct: "a",
    },
    {
        question: "Как установить внешний модуль с помощью pip?",
        a: "pip установить модуль",
        b: "установить модуль pip install модуль",
        c: "pip install модуль",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили на ${score} из ${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Пройти тест еще раз</button>
            <button2><a href="../tests.html">Вернуться на страницу с заданиями</a></button2>
            `;
        }
    }
});