import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <CreateUser/>
          <SearchBar/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
