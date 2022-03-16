import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <CreateUser/>
      <SearchBar/>
      <Login/>
    </div>
  );
}

export default App;
