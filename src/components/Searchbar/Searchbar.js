import "./Searchbar.scss"
import { Component } from 'react';

class Searchbar extends Component {
    state = {
        query: "",
    }

    handleChange = event => {
        this.setState({query: event.currentTarget.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({query:''})
    }

    render() {
        return (

        <form className="form" onSubmit={this.handleSubmit}>
            <input
                className="form__input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={this.state.query}
                onChange={this.handleChange}
            >    
            </input>
            <button
                className="form__button"
                type="submit">
                 Search
            </button>
        </form>

        )
    }

}

export default Searchbar;