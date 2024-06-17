const quizData = [
    {
        question: "Какой оператор используется для ввода данных с клавиатуры в Python?",
        a: "print()",
        b: "input()",
        c: "scan()",
        correct: "b",
    },
    {
        question: "Какая функция используется для вывода данных на экран?",
        a: "input()",
        b: "printf()",
        c: "print()",
        correct: "c",
    },
    {
        question: "Какая переменная хранит значение, введенное пользователем?",
        a: "user_input",
        b: "result",
        c: "output",
        correct: "a",
    },
    {
        question: "Как можно объединить вывод нескольких объектов в одну строку с помощью функции print()?",
        a: "Используя скобки",
        b: "Используя оператор +",
        c: "Используя запятую",
        correct: "c",
    },
    {
        question: "Какой тип данных возвращает функция input() по умолчанию??",
        a: "String",
        b: "Float",
        c: "Integer",
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