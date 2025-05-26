import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/navbar.js';
import Home from './components/Home.js';
import Create from './components/Create.js';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound.js';
import UseFetch from './components/UseFetch.js';
import BlogList from './components/BlogList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <div className="content">
     <Switch>
        <Route path="/Create">
          <Create/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
    
    <Route path="*">
      <NotFound/>
    </Route>
     </Switch>


    
     </div>
    </div>
     </Router>
  );
}

export default App;
