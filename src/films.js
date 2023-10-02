// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(function (movies) {
    return movies.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const directorMovies = movies.filter(moviesFromSame => moviesFromSame.director === director);
  console.log(directorMovies);
  return directorMovies;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const directorMovies = getMoviesFromDirector(movies, director);
  const totalScore = directorMovies.reduce((acumulador, movie) => acumulador += movie.score, 0);
  let totalAverage = parseFloat(totalScore / directorMovies.length);
  console.log(totalAverage);
  return totalAverage;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  let moviesTitle = movies.map(movie => movie.title);
  const ordenAlfa = moviesTitle.sort((a, b) => {
    const titleA = a.toLowerCase();
    const titleB = b.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  const first20 = ordenAlfa.slice(0, 20);
  console.log(first20);
  return first20;

}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
