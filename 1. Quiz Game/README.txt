-------------------------------------------------------------------START--------------------------------------------------------------------------------------

=> At starting we have a start screen and when we click on "START QUIZ" the start screen will disappear and QUIZ SCREEN will appear.


    <div class="container">

        <div class="start screen">   </div>

        <div class="quiz screen">    </div>

        <div class="result-screen">  </div>

    </div>

=> Initially we are having start screen as active and after clicking start quiz button the quiz screen will become active.



    <div class="container">
    
        <div class="start active" id="start-screen">
            <h1>   </h1>
            <p>      </p>
            <button id="start-button">  </button>
        </div>

        <div class="screen" id="quiz-screen">

            <div class="quiz-header">
            
                <h1 id="question-text">  </h1>

                <div class="quiz-info">

                    <p>
                        Question <span id="current-question">1</span> of <span>5</span>
                    </p>

                    <p>
                        Score: <span id="score">0</span>
                    </p>

                </div>

            </div>

            <div class="answer-container" id="answer-container">

                <!-- Answers will be inserted througn javascript code -->

            </div>

            <div class="progress-bar">

                <div id="progress">

                </div>

            </div>

        </div>

        <div id="result-screen" class="screen">

            <h1>Quiz Results</h1>

            <div class="result-info">

                <p>
                    You scored <span>0</span> out of <span>5</span>
                </p>

                <div class="result-message">Good job</div>

            </div>

            <button id="restart-btn">Restart Quiz</button>

        </div>

    </div>



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function loadQuestion() {

    const question = questions[currentQuestionIndex];

    questionText.textContent = question.question;

    currentQuestion.textContent = currentQuestionIndex + 1;

    answerContainer.innerHTML = "";

    question.options.forEach((option) => {

        const button = document.createElement("button");

        button.classList.add("answer-btn");

        button.textContent = option;

        answerContainer.appendChild(button);

    });

}



Line 1:

answerContainer.innerHTML = "";

Imagine the first question is displayed.

It has 4 buttons.

HTML
CSS
JS
Python

Now the user answers.

The second question comes.

If we don't remove the old buttons, the new buttons will be added below the old ones.

It will become something like:

HTML
CSS
JS
Python

Google
Facebook
Microsoft
Apple

Now there are 8 buttons, which is wrong.

So before adding new buttons, we clear the container.

answerContainer.innerHTML = "";

means

"Remove everything inside the answer container."

Suppose HTML is

<div id="answer-container">

    <button>HTML</button>

    <button>CSS</button>

    <button>JS</button>

    <button>Python</button>

</div>

After

answerContainer.innerHTML = "";

it becomes

<div id="answer-container">

</div>

Completely empty.



Line 2:

question.options.forEach((option) => {

This is one of the most useful JavaScript methods.

Suppose

question.options

contains

[
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
]

forEach() says:

"Go through every element one by one."

First iteration
option = "HTML"

Second iteration
option = "CSS"

Third iteration
option = "JavaScript"

Fourth iteration
option = "Python"

So this block of code runs 4 times.




Line 3:

const button = document.createElement("button");

This creates a button.

Imagine JavaScript silently creates

<button></button>

It exists in memory.

It is NOT visible on the webpage yet.



Line 4:

button.classList.add("answer-btn");

Adds the class.

Before

<button></button>

After

<button class="answer-btn"></button>

Now your SCSS styles are applied.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

question.options.forEach((option, INDEX) => {

    const button = document.createElement("button");

    button.classList.add("answer-btn");

    button.textContent = option;

    button.addEventListener("click", () => {

        checkAnswer(INDEX);

    });

    answerContainer.appendChild(button);

});

Now below the loadQuestion() function, add this new function:

function checkAnswer(selectedIndex) {

    const question = questions[currentQuestionIndex];

    if (selectedIndex === question.answer) {

        score++;

        scoreElement.textContent = score;

    }

    console.log("Selected Option :", selectedIndex);
    console.log("Correct Answer :", question.answer);

}




Step 1:

question.options.forEach((option, index) => {

Previously we had:

question.options.forEach((option) => {

Now we added another parameter:

index:
What is index?

Suppose our options are

[
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
]

During the loop:

option	    index
--------------------
HTML	    0
CSS	        1
JavaScript	2
Python	    3

So JavaScript automatically tells us which option number we're currently creating.



Step 2:

button.addEventListener("click", () => {

    checkAnswer(index);

});

This means:

"Whenever this button is clicked, call the checkAnswer() function and send the index of that button."

Suppose the user clicks:

Hyper Tool Markup Language

That is the third option.

Its index is

2

So JavaScript runs

checkAnswer(2);

If the user clicks

Hyper Text Markup Language

JavaScript runs

checkAnswer(0);


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Add this function below checkAnswer():


function showResult() {

    quizScreen.classList.remove("active2");

    resultScreen.classList.add("active3");

    finalScore.textContent = score;

}


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

When the user clicks Restart Quiz, we need to reset everything:

restartButton.addEventListener("click", () => {

    currentQuestionIndex = 0;

    score = 0;

    scoreElement.textContent = score;

    resultScreen.classList.remove("active3");

    quizScreen.classList.add("active2");

    loadQuestion();

});