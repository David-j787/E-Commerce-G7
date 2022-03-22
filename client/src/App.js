import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './components/Login/context/userContext';
import { userLogin, restoreCart } from './redux/actions';

//components
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import CreateUser from './components/CreateUser';
import Login from './components/Login/Login.jsx';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductDetail from './components/ProductDetail';

// styles
import './styles/styles.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state)

  useEffect(() => {
    if(cart.length && localStorage.getItem("cart")){
      localStorage.removeItem("cart")
      return localStorage.setItem("cart", JSON.stringify(cart))
    }
    cart.length && localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  useEffect(()=> {
    if(localStorage.getItem("cart")){
      let cartStorage = localStorage.getItem('cart')
      cartStorage = JSON.parse(cartStorage)
      dispatch(restoreCart(cartStorage))
    }
    if(sessionStorage.getItem('jwt')){
      axios.post('http://localhost:3001/authenticate', {token: sessionStorage.getItem('jwt')})
      .then(res => {
        dispatch(userLogin(res.data.user))
      })
      .catch(res => sessionStorage.removeItem('jwt'))
    }
    if(localStorage.getItem('jwt')){
      axios.post('http://localhost:3001/authenticate', {token: localStorage.getItem('jwt')})
      .then(res => {
        dispatch(userLogin(res.data.user))
      })
      .catch(res => localStorage.removeItem('jwt'))
    }
  }, []) // eslint-disable-line

  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          
          <Switch>
            <Route exact path="/">
              <SearchBar />
              <Home />
            </Route>
            <Route exact path='/register' component={CreateUser}/>
            <Route exact path='/product/add' component={CreateProduct}/>
            <Route exact path='/product/update/:id' component={UpdateProduct}/>
            <Route exact path='/product/:id' component={ProductDetail}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
