import React from 'react';
import ProductDetail from './ProductDetail';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductDetail key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
