import { Component } from 'react';
import Searchbar from "../components/Searchbar";
import MovieList from "../components/MovieList";
import { fetchMovieByQuery } from "../services/movies-api.js";


class MoviesPageView extends Component {
    state = {
        movies: [],
        searchQuery: '',
    }

    componentDidMount() {
        const { location } = this.props;

        if (location.search) {
        location.search = location.search.replace(/^\?+/, '');
        this.setState({ searchQuery: location.search });
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.uploadMoviesPage();
        }
        const { location } = this.props;
        location.search = this.state.searchQuery;
    }


    onChangeQuery = query => {
        this.setState({
            searchQuery: query,
            movies: [],
        })
    }

    uploadMoviesPage = () => {
        const { searchQuery } = this.state;
     
        fetchMovieByQuery(searchQuery)
            .then(result => {
                this.setState({ movies: result })
            });
    }

    render() {
        return (
            <>
            <Searchbar 
                onSubmit={this.onChangeQuery}
            />
            <MovieList
                movies={this.state.movies}
            />
            </>
        )
    }


}

export default MoviesPageView;