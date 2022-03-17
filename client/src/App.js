import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
<<<<<<< HEAD
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
=======
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
>>>>>>> mirror
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Switch>
          <CreateUser/>
          <SearchBar/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </Router>
=======
      {/* <CreateUser /> */}
      {/* <SearchBar /> */}
      {/* <Login /> */}
      <Navbar />
      <CreateProduct/>
>>>>>>> mirror
    </div>
  );
}

export default App;
