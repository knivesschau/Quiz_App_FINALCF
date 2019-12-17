'use strict';

const store = {
  questions: [
    {
      question: "What is the name of Link's fairy in Ocarina of Time?",
      answers: [
        'Epona',
        'Navi',
        'Tatl',
        'Saria'
      ],
      correctAnswer: 'Navi'
    },
    {
      question: 'Which of the following is NOT a usable item in A Link to the Past?',
      answers: [
        'Book of Mudora',
        'Bombos Medallion',
        'Cane of Byrna',
        'Wand of Wishes'
      ],
      correctAnswer: 'Wand of Wishes'
    },
    {
      question: 'What is the name of the talking sailboat in The Wind Waker?',
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

  <main id ="home-page">
  <form id ="start-page">
  <fieldset id ="starter-button">
  <input type="button" id="start-quiz" aria-label="Start Quiz Button" value="Let's Find Out!"></input>
  </fieldset>
  </form> 
  </main>`

  $('body').html(homePageHTML);
}

//this function holds the HTML for the quiz's landing page. 
function resultPage(){
  
}

//this function implements button functionality to load immediately into the DOM to work in tandem with quizRender(). 
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