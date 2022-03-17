import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
          <SearchBar/>
          <Route path='/register' component={CreateUser}/>
          <Route path='/Login' component={Login}/>
          <Route path='/newProduct' component={CreateProduct}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
