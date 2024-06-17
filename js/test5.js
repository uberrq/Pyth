const quizData = [
    {
        question: "Какое ключевое слово используется для определения функции в Python?",
        a: " def",
        b: "function",
        c: "create",
        correct: "a",
    },
    {
        question: "Где должно находиться определение функции в коде?",
        a: "В начале программы",
        b: "В конце программы",
        c: "Может находиться в любом месте программы",
        correct: "c",
    },
    {
        question: "Какая из этих записей является корректным вызовом функции?",
        a: "function_name()",
        b: "function_name",
        c: "call_function()",
        correct: "a",
    },
    {
        question: "Какой символ используется для передачи аргументов в функцию?",
        a: "{}",
        b: "()",
        c: "[]",
        correct: "b",
    },
    {
        question: "Что должен возвращать оператор return в функции?",
        a: "Ничего",
        b: "Только целое число",
        c: "Значение любого типа",
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