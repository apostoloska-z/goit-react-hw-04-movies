import { Route, Switch } from 'react-router-dom';
import HomeView from "./views/HomeView";
import MovieDetailsPageView from "./views/MovieDetailsPageView"; 
import MoviesPageView from "./views/MoviesPageView"
import AppBar from "./components/AppBar"
import { fetchReviewsById } from "./services/movies-api.js"

fetchReviewsById('290859');
  
function App() {
  return (
    <>
      <AppBar />
    
    <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/movies/:movieId' component={MovieDetailsPageView} />
        <Route exact path='/movies' component={MoviesPageView}/>
      
    </Switch>
    </>
   );
}

export default App;
