'use strict';
let chances = 6;
let mathAnswer = 46;
let mathChances = 5;
let correctAnswers = 0;

let questions = [
  'Is my favorite color purple?',
  'Is my favorite movie There will be blood?',
  'Is my favorite book The Hobbit?',
  'Is Austria my favorite country to visit?',
  'What are some of my favorite games?'
];

let mathQuestion = [
  'Can you guess my favorite number?'
];

let answers = [
  ['Yes'],
  ['Yes'],
  ['Yes'],
  ['Yes']
];

let gameAnswers = [
  'skyrim',
  'elden ring',
  'dark souls',
  'pubg'
];

let value = playerName('Hello Traveller, I am ', 'Ian');

alert(value);

let name = prompt('What do they call you?');

alert('Pleased to meet you, ' + name);

function playerName(string, name) {
  let greeting = string + name;
  return greeting;
}

function askQuestionsWithAnswers(q,a) {
  let response = prompt(q);
  let correct = false;
  for (let answer of a ) {
    if (answer.toLowerCase() === response.toLowerCase()) {
      correct = true;
      correctAnswers++;
    }
  }
  if (correct === true) {
    return 'You got it!';
  }
  else {
    return 'Nope.';
  }
}

function gameQuestion(q,a) {
  let correct = false;
  if (chances === 0) {
    alert('Out of chances... The options were skyrim, elden ring, dark souls, and pubg.');
    return;
  }

  alert('You have ' + chances + ' chances left');
  let response = prompt(q);

  for (let i = 0; i <= 3; i++) {

    if (response === a[i]) {
      correct = true;
    }
  }
  if (correct === true) {
    alert('You got it! The options were skyrim, elden ring, dark souls, and pubg.');
    correctAnswers;
    return;
  }
  else {
    chances --;
    alert('Try again!');
    gameQuestion(questions[4], gameAnswers);
  }
}

for (let i =0; i < answers.length; i++) {
  console.log(askQuestionsWithAnswers(questions[i], answers[i]));
}

gameQuestion(questions[4], gameAnswers);

for (let i = 0; i < 4; i++) {
  let response = prompt(mathQuestion);
  if (response === mathAnswer) {
    alert('Wow you got it. Look at the big brain on Brad!');
    correctAnswers++;
    break;
  } else if (response < mathAnswer) {
    alert('Too low! Try again');
    mathChances--;

  }
  else if (response > mathAnswer) {
    alert('Too high! Try again');
    mathChances--;

  }
  alert('You got ' + correctAnswers + ' correct!' );
}

