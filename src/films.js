// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(function (movies) {
    return movies.director;
  });
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const directorMovies = movies.filter(moviesFromSame => moviesFromSame.director === director);
  //console.log(directorMovies);
  return directorMovies;

}

// Exercise 3: Calculate the average of the films of a given director.
/*function moviesAverageOfDirector(movies, director) {
  const directorMovies = getMoviesFromDirector(movies, director);
  const totalScore = directorMovies.reduce((acumulador, movie) => acumulador += movie.score, 0);
  let totalAverage = parseFloat(totalScore / directorMovies.length);
  console.log(totalAverage);
  return totalAverage;

}
*/

//REFACTORITZACIÓ EXERCICI 3:

function averageScore(array) {

  const moviesWithScore = array.filter(movie => movie.score !== '');

  const averageScore = moviesWithScore.reduce(function (acumulador, movie) {
    return acumulador + movie.score;
  }, 0);

  const total = parseFloat((averageScore / moviesWithScore.length).toFixed(2));
  //console.log("AVERAGE SCore", total);
  return total;

}

function moviesAverageOfDirector(movies, director) {
  const directorMovies = getMoviesFromDirector(movies, director);
  const result = averageScore(directorMovies);
  console.log('Ex 3 refactoritzat:', result);
  return result;

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
  //console.log(first20);
  return first20;

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const newMovies = [...movies];
  const orderYears = newMovies.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  //console.log(orderYears);
  return orderYears;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const genreMovies = movies.filter(movie => movie.genre.includes(genre));
  const result = averageScore(genreMovies);
  //console.log('Exercici 6:', result)
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const onlyMinutes = array.map(movie => {
    const durationMatch = movie.duration.match(/(\d+)h(?: (\d+)min)?/);
    if (durationMatch) {
      const hours = parseInt(durationMatch[1]);
      const minutes = durationMatch[2] ? parseInt(durationMatch[2]) : 0;
      const allInMinutes = hours * 60 + minutes;
      return {
        movie, duration: allInMinutes
      };

    } else {
      return movie;
    }
  });

  console.log(onlyMinutes);
  return onlyMinutes;



}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  const newArray =[...array];
  const bestMovie = newArray.filter(movie => movie.year === year).sort((a,b) => a.score - b.score);
  newArray.splice(1);
  
  console.log(newArray);
  return newArray;

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
