import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './components/Login/config/context/userContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <SearchBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <CreateUser />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/newProduct">
              <CreateProduct />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
