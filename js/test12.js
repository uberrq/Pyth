const quizData = [
    {
        question: "Как создать пользовательское исключение в Python?",
        a: "Наследовать класс от встроенного исключения",
        b: "Использовать ключевое слово exception",
        c: "Определить функцию, возвращающую исключение",
        correct: "a",
    },
    {
        question: "Какое преимущество имеют пользовательские исключения?",
        a: "Они позволяют использовать встроенные инструменты для отладки",
        b: "Они позволяют обрабатывать ошибки более точно",
        c: "Они позволяют сократить количество кода",
        correct: "b",
    },
    {
        question: "Каким образом можно обработать пользовательское исключение?",
        a: "Использовать оператор try-catch",
        b: "Использовать оператор try-except",
        c: "Использовать оператор try-finally",
        correct: "b",
    },
    {
        question: "Что происходит, если пользовательское исключение не будет обработано?",
        a: "Программа завершится с ошибкой",
        b: "Программа завершится без ошибки",
        c: "Исключение будет обработано системой",
        correct: "a",
    },
    {
        question: "Как можно передать дополнительную информацию с пользовательским исключением?",
        a: "Через переменные в блоке except",
        b: "Через предопределенные атрибуты исключения",
        c: "Через аргументы при создании исключения",
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