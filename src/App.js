import './App.css';
import './index.css';
import Navbar from './components/navbar.js';
import Home from './components/Home.js';
import Create from './components/Create.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound.js';
import BlogDetails from './components/BlogDetails.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogdetails/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

