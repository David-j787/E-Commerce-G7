import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx'
import Logout from './components/Login/Logout'
import Profile from './components/Login/Profile'
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <CreateUser/>
      <SearchBar/>
      <Login/>
      <Profile/>
      <Logout/>
    </div>
  );
}

export default App;
