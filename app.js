'use strict';
const store = {

  questions: [
    {
      question: 'What type of farm does Dwight own?',
      answers: [
        'Bear Farm',
        'Beet Farm',
        'Carrot Farm',
        'Beetle Farm'
      ],
      correctAnswer: 'Beet Farm'
    },
    {
      question: 'When did Ryan and Kelly hook up for the first time?',
      answers: [
        'New Years Eve',
        'February 14th',
        'Kelly’s Birthday',
        'February 13th'
      ],
      correctAnswer: 'February 13th'
    },
    {
      question: 'What name did Pam and Angela fight over for their babies?',
      answers: [
        'Andrew',
        'James',
        'Phillip',
        'William'
      ],
      correctAnswer: 'Phillip'
    },
    {
      question: 'How long were Pam and Roy engaged?',
      answers: [
        '3-4 Years',
        '3 Months',
        '6 Years',
        '2 Years'
      ],
      correctAnswer: '3-4 Years'
    },
    {
      question: 'Who ruined Pam\'s pregnancy secret during her wedding weekend?',
      answers: [
        'Andy',
        'Michael',
        'Erin',
        'Jim'
      ],
      correctAnswer: 'Jim'
    },
  ],
  questionNumber: 0,
  score: 0
};

let counter = 0;

let wrong = 0;



function addHtml() {
  let question = store.questions[counter];
  return `<div class ='question-box'>
  <img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
  <div class= 'question'>${question.question}</div>
  <form id='questions'>
      <input id='answer1' name = 'answers' type= 'radio' value = '${question.answers[0]}'>
      <label for= 'answer1'>${question.answers[0]}</label><br>
      <input id='answer2' name = 'answers' type= 'radio' value = '${question.answers[1]}'>
      <label for= 'answer2'>${question.answers[1]}</label><br>
      <input id='answer3' name = 'answers' type= 'radio' value = '${question.answers[2]}'>
      <label for= 'answer3'>${question.answers[2]}</label><br>
      <input id='answer4' name = 'answers' type= 'radio' value = '${question.answers[3]}'>
      <label for= 'answer4'>${question.answers[3]}</label><br>
      <button class = 'submit-answer' type = 'submit'>Submit Answer!</button>
  </form>
  <h3><span>Question #${store.questionNumber + 1} / 5 </span><span>You have: ${store.score} Correct Answers, and ${wrong} Incorrect Answer!</span></h3>`
}

function addHtmlFeedback() {
  let question = store.questions[counter];
  return `<div class ='question-box'>
  <img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
  <div class= 'question'>${question.question}</div>
  <form id='questions'>
      <input id='answer1' name = 'answers' type= 'radio' value = '${question.answers[0]}'>
      <label for= 'answer1'>${question.answers[0]}</label><br>
      <input id='answer2' name = 'answers' type= 'radio' value = '${question.answers[1]}'>
      <label for= 'answer2'>${question.answers[1]}</label><br>
      <input id='answer3' name = 'answers' type= 'radio' value = '${question.answers[2]}'>
      <label for= 'answer3'>${question.answers[2]}</label><br>
      <input id='answer4' name = 'answers' type= 'radio' value = '${question.answers[3]}'>
      <label for= 'answer4'>${question.answers[3]}</label><br>
      <button class = 'submit-answer' type = 'submit'>Submit Answer!</button>
  </form>
  <h3><span>Question #${store.questionNumber + 1} / 5 </span><span>You have: ${store.score} Correct Answers, and ${wrong} Incorrect Answer!</span></h3>
  <h2>${feedback}</h2>`
}


function renderPage() {
  console.log('renderPage. . . . Has Run :)')
  let html = addHtml();
  $('main').html(html)

}

function renderFeedback(){
  let html = addHtmlFeedback();
  $('main').html(html);
}

function submitAnswer() {
  $('main').on('submit', 'form#questions', function (event) {
    event.preventDefault();
    let answer = $('input[name=answers]:checked').val();
    if (store.questions[counter].correctAnswer === answer) {
      alert('GOOD JOB')
      store.score++;
    } else {
      alert('Horrible job, you suck!')
      wrong++
    }
    counter++
    renderPage();
  })
}

let feedback = '';


function main() {
  renderPage();
  submitAnswer();
}

$(main)
/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */