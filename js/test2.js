const quizData = [
    {
        question: "Какой из этих операторов используется для вычисления остатка от деления?",
        a: "*",
        b: "%",
        c: "+",
        correct: "b",
    },
    {
        question: "Какой оператор используется для возведения числа в степень?",
        a: "/",
        b: "**",
        c: "//",
        correct: "b",
    },
    {
        question: "Что вернет выражение 5 > 3 and 2 < 4?",
        a: "SyntaxError",
        b: "False",
        c: "True",
        correct: "c",
    },
    {
        question: "Какой оператор используется для сложения строк?",
        a: "+",
        b: "-",
        c: "*",
        correct: "a",
    },
    {
        question: "Что вернет выражение 'python' in 'i love python'?",
        a: "TypeError",
        b: "False",
        c: "True",
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