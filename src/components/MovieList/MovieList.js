import "./MovieList.scss";
import { Link, withRouter } from 'react-router-dom';
import noImage from "../img/No-image.jpg"

const MovieList = ({movies, location}) => (
    <ul className="movie-list">
        {movies.map(movie => (
            <li className="movie-list__item" key={movie.id}>
                <Link to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                        from: location,
                    }
                }}>
                    <img
                        className ="movie-poster"
                        src={movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: noImage}
                        alt={movie.original_title}>
                    </img>
                    <h2 className="movie-title">{movie.title}</h2>

                </Link>
            </li>
        ))}
    </ul>
)

export default withRouter(MovieList);