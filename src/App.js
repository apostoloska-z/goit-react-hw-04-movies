import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomeView from "./views/HomeView";
// import MovieDetailsPageView from "./views/MovieDetailsPageView"; 
// import MoviesPageView from "./views/MoviesPageView"
import AppBar from "./components/AppBar";
import "./styles.scss"


const HomeView = lazy(()=> import('./views/HomeView.js' /* webpackChunkName: "home-page" */));
const MoviesPageView = lazy(()=> import('./views/MoviesPageView.js' /* webpackChunkName: "movies-page" */));
const MovieDetailsPageView = lazy(()=> import('./views/MovieDetailsPageView.js' /* webpackChunkName: "movie-details-page" */));
  
function App() {
  return (
    <>
      <AppBar />
    <Suspense fallback={<h1>The page is loading...</h1>}>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/movies/:movieId' component={MovieDetailsPageView} />
        <Route exact path='/movies' component={MoviesPageView}/>
      </Switch>
    </Suspense>
    </>
   );
}

export default App;
