'use strict';

let numberOfFilms = +prompt("how many movies have you watched?", "");
let personalMovieDb = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: {},
   private: false
};

let a = prompt("one of last movies?", "");
let b = +prompt("rate of movie?", "");
let c = prompt("one of last movies?", "");
let d = +prompt("rate of movie?", "");
personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);

//if else
let value = prompt('Official name of JavaScript?', '');

if (value == 'ECMAScript') {
   alert('Correct!');
} else {
   alert(`You're not right! It's ECMAScript!`);
}

