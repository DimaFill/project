"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDb = 
{
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  privat: false

};

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = +prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = +prompt("На сколько оцените его?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log (personalMovieDb);












