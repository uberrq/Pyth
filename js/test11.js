const quizData = [
    {
        question: "Какой оператор используется для обработки исключений в Python?",
        a: "try-catch",
        b: "try-except",
        c: "try-return",
        correct: "b",
    },
    {
        question: "Какое ключевое слово используется для генерации пользовательского исключения?",
        a: "raise",
        b: "throw",
        c: "except",
        correct: "a",
    },
    {
        question: "Что происходит, если в блоке try возникает исключение, но нет соответствующего блока except?",
        a: "Исключение обрабатывается системой",
        b: "Программа останавливается с ошибкой",
        c: "Исключение игнорируется",
        correct: "b",
    },
    {
        question: "Какой блок кода выполняется, если в блоке try произошло исключение?",
        a: "блок finally",
        b: "блок else",
        c: "блок except",
        correct: "c",
    },
    {
        question: "Какое ключевое слово используется для выхода из блока обработки исключений?",
        a: "return",
        b: "break",
        c: "continue",
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