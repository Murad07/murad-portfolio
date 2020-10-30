
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
