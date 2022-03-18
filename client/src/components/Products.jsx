import React from 'react';
import ProductDetail from './ProductDetail';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.length === 0 ? (
        <h2>No hay productos</h2>
      ) : (
        products.map((product) => (
          <ProductDetail key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default Products;
