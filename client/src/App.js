import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
          <SearchBar/> 
          <Navbar />
        <Switch>
          <Route path='/create-user' component={CreateUser}/>
          <Route path='/create-product' component={CreateProduct}/>
          <Route path='/update-product/:id' component={UpdateProduct}/>
          <Route path='/product-detail/:id' component={ProductDetail}/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
