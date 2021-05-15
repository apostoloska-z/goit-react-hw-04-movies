import "./MovieList.scss";
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => (
    <ul>
        {movies.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                    <img
                        src={ `https://image.tmdb.org/t/p/w500${movie.poster_path} `}
                        alt={movie.original_title}>
                    </img>
                    <h2>{movie.title}</h2>

                </Link>
            </li>
        ))}
    </ul>
)

export default MovieList;