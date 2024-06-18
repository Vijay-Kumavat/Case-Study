import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import WeatherList from './Components/Weather/WeatherList';
import Favorites from './Components/Favorites';
import SearchCity from './Components/SearchCity';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
            <Route exact path="/" component={WeatherList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/search" component={SearchCity} />
        </div>
      </div>
    </Router>
  );
}

export default App;
