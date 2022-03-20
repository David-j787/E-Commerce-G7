import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './components/ProductDetail';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './components/Login/config/context/userContext';

function App() {
  return (
    <div className="App">
      <Router>
          <SearchBar/> 
          <Navbar />
        <Switch>
          <Route path='/create-user' component={CreateUser}/>
          <Route path='/update-product/:id' component={UpdateProduct}/>
          <Route path='/product-detail/:id' component={ProductDetail}/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </Router>
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
