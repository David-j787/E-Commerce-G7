import React from 'react';
import Product from './Product';
import { FormattedMessage } from 'react-intl'

const Products = ({ products }) => {
  return (
    <div className="products">
      {Array.isArray(products) && products.length === 0 ? (
        <h2><FormattedMessage id="app.show-products" defaultMessage="There are no products to show"/></h2>
      ) : (
        products?.map((product) => (
          <Product key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default Products;
