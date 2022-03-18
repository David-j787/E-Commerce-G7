import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';
import { UserContextProvider } from './components/Login/config/context/userContext';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <UserContextProvider>
=======
>>>>>>> 01f7331386e2dd82347db97c7b7ca5856db76c85
      <Router>
        <Navbar />
        <SearchBar/>
        <Switch>
<<<<<<< HEAD
          {/* <Route path='/' component={Home}/> */}
          <Route exact path='/register'>
            <CreateUser/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/newProduct' >
            <CreateProduct/>
          </Route>
        </Switch>
      </Router>
      </UserContextProvider>
=======
          <Navbar />
          <SearchBar/>
          <Route path='/register' component={CreateUser}/>
          <Route path='/Login' component={Login}/>
          <Route path='/newProduct' component={CreateProduct}/>
        </Switch>
      </Router>
>>>>>>> 01f7331386e2dd82347db97c7b7ca5856db76c85
    </div>
  );
}

export default App;
