import { Route } from 'react-router-dom';
import HomeView from "./views/HomeView"
import { fetchReviewsById } from "./services/movies-api.js"

fetchReviewsById('290859');
  
function App() {
  return (
    <Route path='/' component={HomeView} />
    
   );
}

export default App;
