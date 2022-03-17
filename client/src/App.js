import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import Home from './components/Home';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      {/* <CreateUser /> */}
      {/* <SearchBar /> */}
      {/* <Login /> */}
      <Navbar />
      <Home/>
    {

    <CreateProduct/>
    } 
    </div>
  );
}

export default App;
