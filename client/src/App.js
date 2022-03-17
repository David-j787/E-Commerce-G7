import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      {/* <CreateUser /> */}
      {/* <SearchBar /> */}
      <Navbar />
      <CreateProduct/>
      <Login />
    </div>
  );
}

export default App;
