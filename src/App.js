
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
