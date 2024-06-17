const quizData = [
    {
        question: " Как следует назвать файл, содержащий модуль?",
        a: "модуль.py",
        b: "module.py",
        c: "имя_модуля.py",
        correct: "c",
    },
    {
        question: "Где должны находиться определения функций, переменных и классов в модуле?",
        a: "В начале файла",
        b: "В основном блоке кода",
        c: "В любом месте файла",
        correct: "c",
    },
    {
        question: "Как вы можете сделать функцию, переменную или класс доступными при импортировании модуля?",
        a: "Добавить их в список __all__",
        b: "Объявить их как общедоступные",
        c: "Ничего не делать, все будет доступно",
        correct: "a",
    },
    {
        question: "Что происходит, когда вы импортируете модуль впервые?",
        a: "Код модуля компилируется",
        b: "Код модуля выполняется",
        c: "Python ищет файл модуля",
        correct: "b",
    },
    {
        question: "Как вы можете повторно загрузить модуль, если он был изменен?",
        a: "Использовать команду reload(module_name)",
        b: "Использовать команду import module_name",
        c: "Ничего не делать, изменения применятся автоматически",
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