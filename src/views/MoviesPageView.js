import { Component } from 'react';
import Searchbar from "../components/Searchbar";
import MovieList from "../components/MovieList";
import { fetchMovieByQuery } from "../services/movies-api.js"


class MoviesPageView extends Component {
    state = {
        movies: [],
        searchQuery: '',
    }

    componentDidUpdate(prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.uploadMoviesPage();
        }
    
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