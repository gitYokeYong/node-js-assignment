//Array to hold movie objects
const movies = [];

async function createMovies(movie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Simulate potential errors during movie creation.  This could be a network request failure, etc.
      if (typeof movie !== "object" || !movie.title || !movie.storyline) {
        reject(
          new Error(
            "Invalid movie data. Movie must be an object with title and storyline properties."
          )
        );
      } else {
        movies.push(movie);
        resolve(movie);
      }
    }, 2000); // 2-second delay
  });
}

async function getMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (movies.length === 0) {
        reject(new Error("No movies to display yet."));
      } else {
        console.log("Movies List:");
        movies.forEach((movie) =>
          console.log(`Title: ${movie.title}, Storyline: ${movie.storyline}`)
        );
        resolve();
      }
    }, 1000); // 1-second delay
  });
}

async function init() {
  try {
    const newMovie = {
      title: "The Shawshank Redemption",
      storyline:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    };
    console.log("Creating movie...");
    await createMovies(newMovie);
    console.log("Movie created successfully!");
    console.log("Fetching movies...");
    await getMovies();
    console.log("Movies fetched successfully!");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

init();
