import { useState } from "react";
import AddMovieForm from "./AddMovieForm";

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1, // items in data collections need unique IDs
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2, // unique ID
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3, // unique ID
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const yearSortMovies = () => {
    let sortMovie = [...currentMovies];
    sortMovie.sort((a, b) => a.year - b.year);
    setCurrentMovies(sortMovie);
  };

  const sortTitles = () => {
    let sortMovie = [...currentMovies];
    sortMovie.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(sortMovie);
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie])
    }


  // separate component for displaying each movie
  function Movie({ title, year, synopsis }) {
    return (
      {
        /* no key prop here - only at top level inside .map */
      },
      (
        <>
          <li>
            <h3>{title}</h3> <span>({year})</span>
            <div>{synopsis}</div>
          </li>
        </>
      )
    );
  }

  return (
    <div className="MoviesList">
<h3>Movie Sort</h3>
<button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={yearSortMovies}>Sort by Year</button>
      <button onClick={sortTitles}>Sort by Titles</button>
      <ul>{movieItems}</ul>
      <AddMovieForm onAddMovie={handleAddMovie}/>
    </div>
  );
}
export default MoviesList;

// // add a new item to an array or object - RIGHT WAY using spread to clone original then adding in new item
// let newMovies = [...currentMovies, {
//   id: 4, title: "The Whale", year: 2022,
//   synopsis: "A morbidly obese teacher attempts to reconnect with his daughter.",
//   }]

//   // remove an item from an array - RIGHT WAY using filter to create a new array without the removed item
//   let idToDelete = 2;
//   let newMovies = currentMovies.filter(movie => movie.id != idToDelete);

//   // replace/update an item in an array - RIGHT WAY using map to create a new array including the updated item
//   let updatedSynopsis1 = 'Iconic heart-warming prison break movie';
//   let newMovies = currentMovies.map(movie => movie.id === 1 ? {...movie, synopsis: updatedSynopsis1} : movie);

//   // sort/reverse an array - RIGHT WAY cloning the original first
//   let newMovies = [...currentMovies];
//   newMovies.reverse();
//   newMovies.sort();
