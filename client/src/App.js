import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import Home from './components/Home';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <Router>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/register' component={CreateUser}/>
          <Route path='/login' component={Login}/>
          <Route path='/newProduct' component={CreateProduct}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
