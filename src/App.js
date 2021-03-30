import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='bg'>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
