import './App.css';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { productList, productCreate } from './Components/productList';
import dataProvider from './dataProvider';



function App() {
  return <Admin dataProvider={dataProvider}>
    <Resource 
    name='products' 
    list={productList}
    create={productCreate}
    />
  </Admin>
}

export default App;
