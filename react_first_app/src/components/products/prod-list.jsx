import React, { useState } from 'react';
import Product from './product.jsx';
import './prod-list.css';
import productsList from './products-data.js';
import ProdSorting from './prod-sorting.jsx';
const ProdList = () => {
  const [sorting, setSorting] = useState('name_Asc');
  const sortOrder = {
    name_Asc: (prod1, prod2) => prod1.title.localeCompare(prod2.title),
    name_Desc: (prod1, prod2) => prod2.title.localeCompare(prod1.title),
    price_Asc: (prod1, prod2) => +prod1.price - +prod2.price,
    price_Desc: (prod1, prod2) => +prod2.price - +prod1.price,
  };
  return (
    <div>
      <ProdSorting
        setSorting={setSorting}
        sortOrder={sortOrder}
        activeSort={sorting}
      />
      <div className="prod-container">
        {productsList.sort(sortOrder[sorting]).map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProdList;
