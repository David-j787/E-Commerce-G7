import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      {/* <Login /> */}
      <Navbar />
      {/* <CreateUser /> */}
      <CreateProduct/>
    </div>
  );
}

export default App;
