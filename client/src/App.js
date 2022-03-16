import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <CreateUser />
      <SearchBar />
      <Login />
      <Navbar />
    </div>
  );
}

export default App;
