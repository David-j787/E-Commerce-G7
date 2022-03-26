import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, useHistory, Redirect } from 'react-router-dom';
import { UserContextProvider } from './components/Login/context/userContext';
import { userLogin, restoreCart } from './redux/actions';
import swal from 'sweetalert';

//components
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import CreateUser from './components/CreateUser';
import Login from './components/Login/Login.jsx';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductDetail from './components/ProductDetail';
import OrderCheckout from './components/OrderCheckout';
import AdminPanel from './admincp/AdminPanel';
import ResetPassword from './components/ResetPassword';
import DashboardUser from './components/DashboardUser';
import UserAccount from './components/UserAccount';
import Orders from './components/Orders';

// styles
import './styles/styles.scss';
import Payment from './components/Payment';

function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state)
  const userLogged = useSelector(state => state.user);

  const resetPasswordAlert = () => {
    swal({
      title: "Password Reset",
      text: "Your password have been force to reset, please proceed",
      icon: "warning",
      buttons: "Ok"
    })
  }

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

  useEffect(() => {
    if(userLogged?.reset_password) resetPasswordAlert()
  }, [userLogged])

  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          
          <Switch>
            <Route exact path="/" render={() => {
              if(userLogged?.reset_password){
                return <ResetPassword />
              }else{
                return <>
                <SearchBar />
                <Home />
                </>
              }
            }}/>
            <Route exact path='/register' component={CreateUser}/>
            <Route exact path='/product/add' component={CreateProduct}/>
            <Route exact path='/product/update/:id' component={UpdateProduct}/>
            <Route exact path='/product/:id' component={ProductDetail}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/checkout' component={OrderCheckout}/>
            <Route exact path='/admincp' component={AdminPanel}/>
            <Route exact path='/user/account' component={DashboardUser}/>
            <Route exact path='/account' component={UserAccount}/>
            <Route exact path='/orders' component={Orders}/>
            <Route exact path='/payment/:paymentStatus' component={Payment}/>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
