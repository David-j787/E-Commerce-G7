import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';
import Shop from './pages/Shop';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <CreateUser />
          <SearchBar />
          <Route path="/Login" component={Login} />
          <CreateProduct /> */}

          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
