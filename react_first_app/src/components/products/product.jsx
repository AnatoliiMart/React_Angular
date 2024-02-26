import React, { useState } from 'react';

const Product = ({title, description, image, price, category}) => {
    const [hidden, sethidden] = useState(false);
    const toggleDescription = () => sethidden(!hidden, description);
    return (
        <div className='product'>
            <img src={image} alt="ProductImage"/>
            <p>{title}</p>
            <p>{category}</p>
            <p>{price + " UAN"}</p>
            <button onClick={toggleDescription}>{hidden ? "HideDesc" : "ShowDesc"}</button> 
            {hidden && <p>{description}</p>}
        </div>
    );
}

export default Product;
