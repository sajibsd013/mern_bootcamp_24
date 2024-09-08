/**
 
Problem: Write a program that creates an array of your favorite movies. Add two more movies to the list using push, remove the first movie using shift, and then use map to print each movie title in uppercase.

 */
// Solution: Favorite Movies

let movies = ['Inception', 'The Matrix', 'Interstellar'];
movies.push('The Dark Knight', 'Memento');
movies.shift();

let upperCaseMovies = movies.map(movie => movie.toUpperCase());
console.log(upperCaseMovies);
