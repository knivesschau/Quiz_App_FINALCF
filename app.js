'use strict';

const STORE = {
  questions: [
    {
      question: "What is the name of Link's fairy in Ocarina of Time?",
      answers: [
        'Tael',
        'Navi',
        'Tatl',
        'Saria'
      ],
      correctAnswer: "Navi"
    },
    {
      question: "Which of the following is NOT a usable item in A Link to the Past?",
      answers: [
        'Book of Mudora',
        'Bombos Medallion',
        'Cane of Byrna',
        'Wand of Wishes'
      ],
      correctAnswer: 'Wand of Wishes'
    },
    {
      question: "What is the name of the talking sailboat in The Wind Waker?",
      answers: [
        'King of Red Lions',
        'Darunia',
        'Kaepora Gaebora',
        'King Rhoam'
      ],
      correctAnswer: 'King of Red Lions'
    },
    {
      question: "Who is the guardian of Koholint Island in Link's Awakening?",
      answers: [
        'Lanaryu',
        'Dinraal',
        'The Wind Fish',
        'The Seven Sages'
      ],
      correctAnswer: 'The Wind Fish'
    },
    {
      question: "Which of the following is NOT a cooking ingredient in Breath of the Wild?",
      answers: [
        'Passion Fruit',
        'Monster Extract',
        'Tabantha Wheat',
        'Mighty Bananas'
      ],
      correctAnswer: 'Passion Fruit'
    },
    {
      question: "Which of the following is NOT a usable mask in Majora's Mask?",
      answers: [
        'Keaton Mask',
        'Fierce Deity Mask',
        'Mask of Truth',
        'Mask of Power'
      ],
      correctAnswer: 'Mask of Power'
    },
    {
      question: "Which famous male celebrity named their daughter after Princess Zelda?",
      answers: [
        'Idris Elba',
        'John Goodman',
        'Cuba Gooding Jr.',
        'Robin Williams'
      ],
      correctAnswer: 'Robin Williams'
    },
    {
      question: "Which game did Dark Link first make his appearance in?",
      answers: [
        'A Link to the Past',
        'The Legend of Zelda',
        'Zelda II: The Adventure of Link',
        'Ocarina of Time'
      ],
      correctAnswer: 'Zelda II: The Adventure of Link'
    },
    {
      question: "Which of the following is NOT a dungeon in Twilight Princess?",
      answers: [
        'Forest Temple',
        'Palace of Twilight',
        'Shadow Temple',
        'Temple of Time'
      ],
      correctAnswer: 'Shadow Temple'
    },
    {
      question: "In A Link to the Past, what animal does Link turn into when he first enters the Dark World?",
      answers: [
        'A white dove',
        'A pink rabbit',
        'A green crocodile',
        'An orange fox'
      ],
      correctAnswer: 'A pink rabbit'
    },
  ],
  questionNumber: 0,
  currentScore: 0,
  quizStart: false
};

//this function increments the question number as the user goes through each question.
function questionTracker() {
  console.log('questionTracker ran');
  STORE.questionNumber++;
}

//this function increments the user score if they answer correctly.
function scoreTracker() {
  console.log('scoreTracker ran');
  STORE.currentScore++;
}

//this function holds the HTML for the quiz's landing page. 
function homePage() {
  console.log('homePage ran');
  
  const homePageHTML = 
  `<header role="banner">
  <h1 class="title-homepage"> The Legend of Zelda Trivia Quiz </h1>
  <h2 class="secondary-text"> How much do you know about this beloved series? </h2>
  </header>

  <main id="home-page">
  <form id="start-page">
  <fieldset id ="starter-button">
  <input type="button" id="start-quiz" aria-label="Start Quiz Button" value="Let's Find Out!"></input>
  </fieldset>
  </form> 
  </main>`

  $('body').html(homePageHTML);
}

//this function holds the HTML for the quiz's final results page. 
function resultPage(){
  console.log('resultPage ran');
  
  const resultPageHTML = 
  `<header role="banner">
  <h1 class="title-results">Final Results</h1>
  <h2 class="final-score">Your final score was ${STORE.currentScore} out of 10!</h2>
  </header>
  <main id="results-page">`
  
  const restartButton = 
  `<fieldset id="restart-button">
  <form id="end-page">
  <input type="button" id="restart-quiz" aria-label="Restart Quiz Button" value="Click to Try Again!"></input>
  </form>
  </fieldset>
  </main>`

  if (STORE.currentScore >= 5) {
    $('body').html(resultPageHTML + `<p class="above-5">Nice job! You're a Zelda whiz!</p>` + restartButton);
  }
  else if (STORE.currentScore < 5) {
    $('body').html(resultPageHTML + `<p class="below-5">It looks like you need to brush up on your Zelda knowledge!</p>` + restartButton);
  }
}

//this function renders the HTML for all questions/answer choices, as well as the user's score/question progress.
function questionGenerator() {
  console.log('questionGenerator ran')

  const questionText = 
  `<main class = "main-quiz">
  <fieldset id="quiz-questions-answers">
  <form id="quiz-form">
  <legend id="question-text">${STORE.questions[STORE.questionNumber].question}</legend>`

  const answerText = STORE.questions[STORE.questionNumber].answers.map(answer => {
    return `<input type="radio" name="answer-selections" aria-label="Select Answer" value="${answer}">${answer}</input>`
  }); 

  const quizButtons = 
  `<input type="button" id="next-question" aria-label="Next Question Button" value="Next Question"></input>
  <input type="button" id="submit-button" aria-label="Submit Answer Button" value="Submit Answer"></input>
  <input type="button" id="show-results" aria-label="Show Results Button" value="Show Me My Results!"></input>`

  const infoTrackers = 
  `
  <p id="question-tracker">Question ${STORE.questionNumber + 1} out of 10</p>
  <p id="score-tracker">Your current score is: ${STORE.currentScore} out of 10</p>
  </form>
  </fieldset>
  </main>`

$('body').html(questionText + answerText.join('') + quizButtons + infoTrackers)
$("#next-question").hide(); 
$("#show-results").hide();
}

//this function toggles the buttons on every question page depending on user interaction.
function buttonSwitch() {
  $("#unanswered").remove();
  $("#submit-button").hide();
  
  if (STORE.questionNumber < 10) {
      $("#next-question").show();
    }
  else if (STORE.questionNumber === 10) {
    $("#show-results").show();
  }
}

//this function checks the user's answers against the STORE with textual feedback if they are right/wrong. if they don't answer, they will be prevented from progressing.
function answerChecker() {
  console.log('answerChecker ran')
  $("#unanswered").remove();
  const answerChoice = $("input[name='answer-selections']:checked").val();
  if (answerChoice === undefined) {
    $("#next-question").before(`<p id="unanswered">Please select an answer.</p>`);
  }
  else if (answerChoice === STORE.questions[STORE.questionNumber].correctAnswer) {
    questionTracker();
    scoreTracker(); 
    buttonSwitch();
    $("#next-question").before(`<p id="correct"> That's right! Your current score is ${STORE.currentScore} out of 10.</p>`)
  }
  else if (answerChoice !== STORE.questions[STORE.questionNumber].correctAnswer) {
    questionTracker(); 
    buttonSwitch(); 
    $("#next-question").before(`<p id="incorrect"> Not quite! The correct answer is: ${STORE.questions[STORE.questionNumber - 1].correctAnswer}. 
    Your current score is ${STORE.currentScore} out of 10.</p>`)
  }
};

//this function implements button functionality to load immediately into the DOM to work in tandem with the quizRender() function. 
function buttonInitialize() {
console.log('buttonInitialize ran');
$(document).on("click", "#start-quiz", function(event) {
    STORE.quizStart = true; 
    quizRender(); 
  }); 

$(document).on("click","#submit-button", function(event) {
  answerChecker();
  });

$(document).on("click","#next-question", function(event) {
  quizRender();
  });

$(document).on("click","#show-results", function(event) {
  quizRender();
  });

$(document).on("click","#restart-quiz", function(event) {
  STORE.quizStart = false;
  STORE.questionNumber = 0;
  STORE.currentScore = 0;
  homePage();
  });

quizRender();
}

//this function renders the appropriate quiz HTML page based on several checks on the user's progress AND their button interactions. 
function quizRender() {
  console.log('quizRender ran');
  if (STORE.quizStart === false) {
    homePage();
  }
  else if (STORE.questionNumber >= 0 && STORE.questionNumber < 10) {
    questionGenerator();
  }
  else if (STORE.questionNumber >= 10) {
    resultPage(); 
    scoreTracker();
  }
}

//loads button functionality to the DOM immmediately
$(buttonInitialize);