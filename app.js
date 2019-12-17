'use strict';

const store = {
  questions: [
    {
      question: "What is the name of Link's fairy in Ocarina of Time?",
      answers: [
        'Tael',
        'Navi',
        'Tatl',
        'Saria'
      ],
      correctAnswer: 'Navi'
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
      question: "In A Link to the Past, what animal does Link turn into when he first enters the Dark World?"
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
}

//this function increments the question number. 
function questionTracker() {
  questionNumber++;
}

//this function increments the user score if they answer correctly.
function scoreTracker() {
  currentScore++;
}

//this function holds the HTML for the quiz's landing page. 
function homePage() {
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
  const resultPageHTML = 
  `<header role="banner">
  <h1 class="title-results">Final Results</h1>
  <h2 class="final-score">Your final score was ${STORE.currentScore} out of 10!</h2>
  </header>
  <main id="results-page">
  <form id="end-page">
  <fieldset id="restart-button">
  <input type="button" id="restart-quiz" aria-label="Restart Quiz Button" value="Click to Try Again!"></input>
  `

  if (STORE.currentScore <= 5) {
    $('body').html(resultPageHTMl).text(`<p id="above-5">Nice job! You're a <i>Zelda</i> whiz!</p>`);
  }
  else if (STORE.currentScore > 5) {
    $('body').html(resultsPageHTML).text(`<p id="below-5">It looks like you need to brush up on your <i>Zelda</i> knowledge!`);
  }
}

//this function renders the HTML for all questions/answer choices, as well as the user's score/question progress.
function questionGenerator() {

}

//this function checks the user's answers against the STORE with textual feedback if they are right/wrong. if they don't answer, they will be prevented from progressing.
function answerChecker() {

}

//this function implements button functionality to load immediately into the DOM to work in tandem with the quizRender() function. 
function buttonInitialize() {
  $(document).on("click", "#start-quiz", function(event) {
    STORE.quizStart === true; 
    quizRender(); 
  }); 
}

//this function renders the appropriate quiz HTML page based on several checks on the user's progress AND their button interactions. 
function quizRender() {
  if (STORE.quizStart === false) {
    homePage(); 
  }
}

$(homePage);