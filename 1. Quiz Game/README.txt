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
