import "./MovieList.scss";

const MovieList = ({movies}) => (
    <ul>
        {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
        ))}
    </ul>
)

export default MovieList;