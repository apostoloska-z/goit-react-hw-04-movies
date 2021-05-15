import { Component } from 'react';
import { fetchTrendingMovies } from "../services/movies-api.js";
import MovieList from "../components/MovieList"

class HomeView extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetchTrendingMovies()
            .then(result => this.setState({ movies: result }))
    }

    render() {
        return (
            <MovieList
                movies={this.state.movies}
            />
        )
    }

}

export default HomeView;