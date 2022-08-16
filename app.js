'use strict';

console.log('Lets do this.');

let user = prompt('Hey! What is your name?');
console.log(user);
alert('Hi!, ' + user + ' welcome to my site!');
if (user === null) {
  alert('That is not a name silly.');
  user = prompt('Why are you being difficult?');
}

let color = prompt('What is my favorite color?');
if (color === 'string'); {
  color = color.toLowerCase();
}

switch (color) {
case 'red':
  alert('Insert Full Metal Jacket Joke');
  break;
case 'blue':
  alert('Certain blues are okay I suppose.');
  break;
case 'yellow':
  alert('Guess again mustard lover');
  break;
case 'green':
  alert('You are the worst.');
  break;
case 'purple':
  alert('Mine too!');
  break;
default:
  alert('Oh interesting, I don\'t know that color. Also im not sure how to code for every possible color.');
}


let game = prompt('What is my favorite video game?'); 
if (typeof(game) === 'string') {
  game = game.toLowerCase(); 
}

switch (game) {
case 'call of duty' :
  alert('C\'mon have some class..');
  break;
case 'skyrim' :
  alert('Yes! Isn\'t it great?');
  break;
case 'dark souls' :
  alert('Very Close!');
  break;
default:
  alert('I don\'t know that game. Any good?');
}

let movie = prompt('What is my favorite movie?'); 
if (typeof(movie) === 'string') {
  movie = movie.toLowerCase(); 
}

switch (movie) {
case 'there will be blood' :
  alert('You nailed it!');
  break;
default:
  alert('Nope thats not it');
}

let book = prompt('What is my favorite book?'); 
if (typeof(book) === 'string') {
  book = book.toLowerCase(); 
}
switch (book) {
case 'dune' :
  alert('no, but thats cool.');
  break;
case 'harry potter' :
  alert('No, I didnt get into that until I was an old man.');
  break;
case 'lord of the rings' :
  alert('Very Close!');
  break;
case 'the hobbit' :
  alert('You guessed it!');
  break;
default:
  alert('I don\'t know that book. Any good?');
}

let wordsPer = prompt('How many words per minute can  I type?'); 
if (typeof(wordsPer) === 'string') {
  wordsPer = wordsPer.toLowerCase(); 
}
switch (wordsPer) {
case '60' :
  alert('I wish..');
  break;
case '80' :
  alert('You are hilarious.');
  break;
case '100' :
  alert('I hate you.');
  break;
default:
  alert('guess again.');
}

alert('Thank you for playing, ' + user);

