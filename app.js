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

let counter = 1;

let wrong = 0;
/*
TODO:
track questions by question number -- DONE
assign counter for home, question pages, end
assign correct feedback
clean up design with css
*/


function addHtml() {
  let question = store.questions[store.questionNumber];
  let startPage = `<div>
  <img src="photos/main-page.jpg" alt="The Office Room"><br>
  <button id= "start" type= "submit" class= 'mainPage'>Start The Quiz!</button>
  <p>Welcome to a difficult quiz on the hit TV show The Office. This Quiz is very hard and you will be graded!</p>
  <img src="photos/dwight-main.jpg" alt="Dwight Main">
</div>`


  let questionPage = `<div class ='question-box'>
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

let goodResult = `<div>
<img src= "photos/happy-stanley.png" alt="Happy Stanley">
<h2>Nice Job!</h2>
<p>You got blank!</p>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div> `

  if (counter === 1) {
    return startPage;
  }

  if (counter === 2) {
    return questionPage;

  }

  if (counter === 3){
    return goodResult;
  }




}

function startQuiz() {
  $('button#start').on('click', function (event) {
    event.preventDefault();
    counter++
    //console.log('After Click '+counter)
    renderPage()
  })
}


function renderPage() {
  console.log('renderPage. . . . Has Run :)')
  let html = addHtml();
  $('main').html(html)

}


function submitAnswer() {
  $('main').on('submit', 'form#questions', function (event) {
    event.preventDefault();
    let answer = $('input[name=answers]:checked').val();
    if (store.questions[store.questionNumber].correctAnswer === answer) {
      alert('GOOD JOB')
      store.score++;
    } else {
      alert('Horrible job, you suck!')
      wrong++
    }
    store.questionNumber++
    renderPage();
    console.log(`This is the Q# ${store.questionNumber}`)
  })
}

let feedback = '';


function main() {
  renderPage();
  startQuiz();
  submitAnswer();

  //console.log(counter)
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