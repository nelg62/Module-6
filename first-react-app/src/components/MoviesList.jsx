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
        
        const movieItems = movies.map(movie => (
            <Movie
            key={movie.id} // key prop is required for lists
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis}/>
            // can also destructure movie into individual props
            // <Movie key={movie.id} {...movie}/>
            )
            );
            
            // separate component for displaying each movie
            function Movie({title, year, synopsis}) {
            return (
            {/* no key prop here - only at top level inside .map */}
            ,<>
            <li>
            <h3>{title}</h3> <span>({year})</span>
            <div>{synopsis}</div>
            </li>
            </>
            )
            }

            return (
                <div className="MoviesList">
                <ul>{ movieItems }</ul>
                </div>
                )
    }
    export default MoviesList;