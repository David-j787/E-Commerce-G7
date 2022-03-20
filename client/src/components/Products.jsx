import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.length === 0 ? (
        <h2>No hay productos</h2>
      ) : (
        products.map((product) => (
          <Product key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default Products;
