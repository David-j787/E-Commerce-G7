import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <CreateUser/>
          <SearchBar/>
          <Route path='/Login' component={Login}/>
          <Navbar />
          <CreateProduct/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
