import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';
import Shop from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <CreateUser /> */}
          {/* <SearchBar /> */}
          {/* <CreateProduct /> */}
          {/* <Route path="/Login" component={Login} /> */}

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
