import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Post from './pages/Post';
import Infographic from './pages/Infographic';

function App() {
  return (
    <div className="App">
      <div className='bg'>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/infographic" component={Infographic} />
        <Route path="/post" component={Post} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
