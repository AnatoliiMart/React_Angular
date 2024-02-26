import React from 'react';
import Product from './product';
import "./prod-list.css"
import productsList from './products-data.js';
const ProdList = () => {
    
    return (
        <div className='prod-container'>
                {
                    productsList.map(product =>
                        <Product {...product} key={product.id}/>
                    )
                }
        </div>
    );
}

export default ProdList;
