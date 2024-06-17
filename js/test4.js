const quizData = [
    {
        question: "Какая конструкция используется для выполнения блока кода многократно?",
        a: "if-else",
        b: "for",
        c: "while",
        correct: "c",
    },
    {
        question: "Что отображает условие в операторе if?",
        a: "Действие, которое нужно выполнить",
        b: "Условие, которое нужно проверить",
        c: "Количество повторений",
        correct: "b",
    },
    {
        question: "Какая конструкция используется для проверки нескольких условий?",
        a: "switch-case",
        b: "try-except",
        c: "if-elif-else",
        correct: "c",
    },
    {
        question: "Какое ключевое слово используется для выхода из цикла?",
        a: "break",
        b: "continue",
        c: "return",
        correct: "a",
    },
    {
        question: "Какое ключевое слово используется для пропуска текущей итерации цикла?",
        a: "skip",
        b: "continue",
        c: "pass",
        correct: "b",
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