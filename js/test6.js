const quizData = [
    {
        question: "Что такое аргументы функции?",
        a: "Переменные, которые используются внутри функции",
        b: "Значения, передаваемые в функцию при ее вызове",
        c: "Константы, определенные в функции",
        correct: "b",
    },
    {
        question: "Какой из этих способов определения функции с аргументами является корректным?",
        a: "def my_function(a b):",
        b: "def my_function(a, b):",
        c: "def my_function(a, b)",
        correct: "b",
    },
    {
        question: "Сколько аргументов может принимать функция?",
        a: "Только один",
        b: "Два",
        c: "Любое количество",
        correct: "c",
    },
    {
        question: "Какая из этих записей является корректным вызовом функции с аргументами?",
        a: "my_function(arg1, arg2)",
        b: "my_function(arg1 arg2)",
        c: "my_function()",
        correct: "a",
    },
    {
        question: "Что происходит, если функция не содержит оператор return?",
        a: "Происходит ошибка во время выполнения программы",
        b: "Функция не возвращает ничего",
        c: "Функция возвращает значение None",
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