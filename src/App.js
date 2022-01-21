import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <h1>Router Demo</h1>
      <p>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </p>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
