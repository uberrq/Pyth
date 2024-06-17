const quizData = [
    {
        question: "Какие типы данных существуют в Python?",
        a: "Строки, числа, булевы значения, списки",
        b: "Строки, числа, булевы значения, списки, словари",
        c: "Все вышеперечисленное",
        correct: "c",
    },
    {
        question: "Как объявляется переменная в Python?",
        a: "x = 5",
        b: "var x = 5",
        c: "define x = 5",
        correct: "a",
    },
    {
        question: "Какое утверждение верно?",
        a: "Переменные в Python всегда имеют тип данных",
        b: "Переменные в Python могут изменять свой тип данных",
        c: "Переменные в Python нельзя изменять",
        correct: "b",
    },
    {
        question: "Какой тип данных используется для хранения текста в Python?",
        a: "float",
        b: "str",
        c: "bool",
        correct: "b",
    },
    {
        question: "Какое из этих выражений вернет True?",
        a: "5 is int('5')",
        b: "5 is '5'",
        c: "5 == '5'",
        correct: "a",
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