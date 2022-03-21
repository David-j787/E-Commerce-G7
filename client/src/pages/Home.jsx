import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import Products from '../components/Products';
import Paginado from '../components/Paginado';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  const [currentPage, setCurrentPage]=React.useState(1);
  const [productsPerPage,setProductsPerPage] = React.useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  useEffect(() => {
    dispatch(getAllProducts());
  }, []); //eslint-disable-line

  return (
    <div className="container shop">
      <h2 className="shop__title">SHOP</h2>

      {!Array.isArray(products) ? (
        <h2>{products}</h2>
      ) : (
        <div>
           <div>


</div>
        <Products products={currentProducts} />
        <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <Paginado
    productsPerPage={productsPerPage}
    products={products.length}
    paginate={paginate}
/>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
          Next
        </button>
      </div>

      </div>
      )}
      </div>)
}
  
  


export default Home;
