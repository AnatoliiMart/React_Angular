import React, { useEffect, useState } from 'react';

const ProdWishlist = () => {
  const [wishProducts, setWishProducts] = useState([]);
  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishProducts));
  }, [wishProducts]);
  return <div></div>;
};

export default ProdWishlist;
