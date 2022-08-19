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
  // Asking question
  alert('You have ' + chances + ' chances left');
  let response = prompt(q);
  // Take answer, check the array of correct answers
  for (let i = 0; i <= 3; i++) {
  //if it is matching one, return good
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

// Call quetsions up to number 4
for (let i =0; i < answers.length; i++) {
  console.log(askQuestionsWithAnswers(questions[i], answers[i]));
}

// Call 5th question
gameQuestion(questions[4], gameAnswers);

for (let i = 0; i < 4; i++) {
  let response = prompt(mathQuestion);
  if (response == mathAnswer) {
    alert('Wow you got it. Look at the big brain on Brad!');
    correctAnswers++;
    break;
  } else if (response < mathAnswer) {
    alert('Too low!');
    let response = prompt(mathQuestion);
    mathChances--;

  }
  else if (response > mathAnswer) {
    alert('Too high!');
    let response = prompt(mathQuestion);
    mathChances--;

  }
  alert('You got ' + correctAnswers + ' correct!' );
}

// 'use strict';

// console.log('Lets do this.');
// let name = prompt('What is your name, traveller?');
// alert('Hello, ' + name + ' welcome to my site!');

// let mathAnswer = 6
// let chances = 6;

// let mathQuestion = [
//   'Can you guess a number between 1 and 10?',
// ];

// let questions = [
//   'Is my favorite color purple?',
//   'Is my favorite movie There will be blood?',
//   'Is my favorite book The Hobbit?',
//   'What are some of my favorite video games?',
// ];

// let answers = [
//   'purple',
//   'there will be blood',
//   'the hobbit',
//   ['skyrim', 'dark souls', 'pubg', 'elden ring'],
// ];

// for (let i = 0; i < questions.length; i++) {
//   let response = prompt(questions[i]);

//   if (typeof(answers[i]) !== 'string') {
//     for (let j = 0; j < chances; j++) {
//       let correct = false;
//       for ( let eachAnswer of answers[i]) {
//         if (response.toLowerCase() === eachAnswer) {
//           correct = true;
//           break;
//         }
//       }
//       if (correct === false) {
//         alert('Guess again!');
//         chances-- ;
//         response = prompt(questions[3]);
//         // alert('Some of the options were skyrim, dark souls, elden ring, and pubg!')

//       } else {
//         alert('You got it! The options were skyrim, dark souls, elden ring, and pubg!');
//         break;
//       }
//     }
//     alert('Some of the options were skyrim, dark souls, elden ring, and pubg!');
//   }
// }


// for (let i = 0; i < 4; i++) {
//   let response = prompt(mathQuestion);
//   if (response == mathAnswer) {
//     alert('Wow you got it. Look at the big brain on Brad!')
//     break;
//   } else if (response < mathAnswer) {
//     alert('Too low!');

//   }
//   else if (response > mathAnswer) {
//     alert('Too high!');

//   }


//   else if (response.toLowerCase() === answers[i]) {
//     alert('Good Job!');
//   } else {
//     alert('Try again!');
//   }
// }




// let user = prompt('Hey! What is your name?');
// console.log(user);
// alert('Hi!, ' + user + ' welcome to my site!');
// if (user === null) {
//   alert('That is not a name silly.');
//   user = prompt('Why are you being difficult?');
// }

// let color = prompt('What is my favorite color?');
// if (color === 'string'); {
//   color = color.toLowerCase();
// }

// switch (color) {
// case 'red':
//   alert('Insert Full Metal Jacket Joke');
//   break;
// case 'blue':
//   alert('Certain blues are okay I suppose.');
//   break;
// case 'yellow':
//   alert('Guess again mustard lover');
//   break;
// case 'green':
//   alert('You are the worst.');
//   break;
// case 'purple':
//   alert('Mine too!');
//   break;
// default:
//   alert('Oh interesting, I don\'t know that color. Also im not sure how to code for every possible color.');
// }


// let game = prompt('What is my favorite video game?');
// if (typeof(game) === 'string') {
//   game = game.toLowerCase();
// }

// switch (game) {
// case 'call of duty' :
//   alert('C\'mon have some class..');
//   break;
// case 'skyrim' :
//   alert('Yes! Isn\'t it great?');
//   break;
// case 'dark souls' :
//   alert('Very Close!');
//   break;
// default:
//   alert('I don\'t know that game. Any good?');
// }

// let movie = prompt('What is my favorite movie?');
// if (typeof(movie) === 'string') {
//   movie = movie.toLowerCase();
// }

// switch (movie) {
// case 'there will be blood' :
//   alert('You nailed it!');
//   break;
// default:
//   alert('Nope thats not it');
// }

// let book = prompt('What is my favorite book?');
// if (typeof(book) === 'string') {
//   book = book.toLowerCase();
// }
// switch (book) {
// case 'dune' :
//   alert('no, but thats cool.');
//   break;
// case 'harry potter' :
//   alert('No, I didnt get into that until I was an old man.');
//   break;
// case 'lord of the rings' :
//   alert('Very Close!');
//   break;
// case 'the hobbit' :
//   alert('You guessed it!');
//   break;
// default:
//   alert('I don\'t know that book. Any good?');
// }

// let wordsPer = prompt('How many words per minute can  I type?');
// if (typeof(wordsPer) === 'string') {
//   wordsPer = wordsPer.toLowerCase();
// }
// switch (wordsPer) {
// case '60' :
//   alert('I wish..');
//   break;
// case '80' :
//   alert('You are hilarious.');
//   break;
// case '100' :
//   alert('I hate you.');
//   break;
// default:
//   alert('guess again.');
// }

// alert('Thank you for playing, ' + user);


