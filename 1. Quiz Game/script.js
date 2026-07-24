const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "Java",
            "Python",
            "CSS",
            "C++"
        ],
        answer: 2
    },

    {
        question: "Which company developed React?",
        options: [
            "Google",
            "Facebook",
            "Microsoft",
            "Apple"
        ],
        answer: 1
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "int",
            "var",
            "string",
            "define"
        ],
        answer: 1
    },

    {
        question: "Which method prints output in the browser console?",
        options: [
            "print()",
            "console.log()",
            "echo()",
            "write()"
        ],
        answer: 1
    }
];

let start_btn = document.querySelector("#start-button");
let start_screen = document.querySelector("#start-screen");
let quiz_screen = document.querySelector("#quiz-screen");


let currentQuestionIndex = 0;
/*  
    Tracks which question is currently displayed.
    questions[0] = (first question) 
*/

let score = 0;


//  START BUTTON EVENT........
start_btn.addEventListener("click", () => {

    start_screen.classList.remove("active1");
    quiz_screen.classList.add("active2");

    loadQuestion();
});


// DISPLAY THE CURRENT QUESTION TEXT
let question_txt = document.querySelector("#question-text");
let current_question = document.querySelector("#current-question");
let answer_container = document.querySelector("#answer-container")

function loadQuestion() {

    let question = questions[currentQuestionIndex];

    question_txt.textContent = question.question;

    current_question.textContent = currentQuestionIndex + 1;

    answer_container.innerHTML = "";

    question.options.forEach((elem , index) => {

        const answer_btn = document.createElement("div");
        answer_btn.classList.add("answer-btn")

        answer_btn.textContent = elem;

        answer_btn.addEventListener("click", () => {

            checkAnswer(index);
        })

        answer_container.appendChild(answer_btn);
    })

}

// SCORE BOARD
let scoreBoard = document.querySelector("#score");

function checkAnswer(selectedAns) {

    const question = questions[currentQuestionIndex]


    if(selectedAns === question.answer)
    {
        score++;

        scoreBoard.textContent = score;

    }

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length)
    {
        loadQuestion();
    }
    else
    {
        showResult();
    }
}

// RESULT SCREEN
let result_screen = document.querySelector("#result-screen");
let final_score = document.querySelector("#final-score"); 

function showResult() {

    quiz_screen.classList.remove("active2");
    result_screen.classList.add("active3");
    final_score.textContent = score;
}

// RESTART BUTTON

let restart_btn = document.querySelector("#restart-btn");

restart_btn.addEventListener("click", () => {

    currentQuestionIndex = 0;

    score = 0;

    scoreBoard.textContent = score;

    result_screen.classList.remove("active3");

    quiz_screen.classList.add("active2");

    loadQuestion();

});