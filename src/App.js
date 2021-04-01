import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <div className='bg'>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/articles" component={Articles} />
        <Route path="/articles/post" component={Post} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
