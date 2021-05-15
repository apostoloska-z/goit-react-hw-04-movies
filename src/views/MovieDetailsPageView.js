import { Component } from 'react';
import {fetchMovieInfoById, fetchCastById, fetchReviewsById} from "../services/movies-api.js"
import { NavLink, Route } from 'react-router-dom';
import Reviews from "../components/Reviews";
import Cast from "../components/Cast"


class MovieDetailsPageView extends Component {
    state = {
        poster_path: null,
        original_title: null,
        vote_average: null,
        overview: null,
        genres: [],
        cast: [],
        reviews: [],
    }

    componentDidMount() {
        fetchMovieInfoById(this.props.match.params.movieId)
            .then(result => this.setState({ ...result }));
        
        fetchCastById(this.props.match.params.movieId)
            .then(result => this.setState({ cast: result }));
        
        fetchReviewsById(this.props.match.params.movieId)
            .then(result => this.setState({ reviews: result }));
    }

    render() {
        return (
            <>
                <button type="button">Go back</button>
                <div>
                    <img
                        src={ `https://image.tmdb.org/t/p/w500${this.state.poster_path} `}
                        alt={this.state.original_title}>
                    </img>
                    <div>
                        <h2>{this.state.original_title}</h2>
                        <p>User Score: {this.state.vote_average}%</p>
                        <h3>Overview</h3>
                        <p>
                            {this.state.overview}
                        </p>

                        <h3>Genres</h3>
                        <p>
                            {this.state.genres.map(genre =>
                            <li key={genre.id}>{genre.name}</li>)}
                        </p>
                        

                    </div>
                </div>
                <div>
                    <h3>Additional information</h3>
                    <ul>
                        <li>
                            <NavLink
                            to={`${this.props.match.url}/cast`}
                            >
                            Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to={`${this.props.match.url}/reviews`}
                            >
                            Reviews
                            </NavLink>
                        </li>
                    </ul>
                    <Route
                        path={`${this.props.match.path}/cast`}
                        render={(props) => { return <Cast cast={this.state.cast} /> }} />
                    <Route
                        path={`${this.props.match.path}/reviews`}
                        render={(props) => { return <Reviews reviews={this.state.reviews} /> }} />
                </div>
            </>
        )
    }
}

export default MovieDetailsPageView;    