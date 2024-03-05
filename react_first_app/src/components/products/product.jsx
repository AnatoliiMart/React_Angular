import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import classNames from "classnames";

const Product = ({ title, description, image, price, category }) => {
  const [hidden, sethidden] = useState(false);
  const toggleDescription = () => sethidden(!hidden, description);
  const [isInWishList, setIsInWishList] = useState(false);
  return (
    <div className="product">
      <FavoriteIcon
        fontSize="large"
        onClick={() => {
          setIsInWishList(!isInWishList);
        }}
        className={classNames(
          { "in-wishlist": isInWishList, "not-in-wishlist": !isInWishList },
          "wishlist-item"
        )}
      />
      <div className="product-info">
        <img src={image} alt="ProductImage" />
        <p>{title}</p>
        <p>{category}</p>
        <p>{price + " UAN"}</p>
        <button onClick={toggleDescription}>
          {hidden ? "HideDesc" : "ShowDesc"}
        </button>
        {hidden && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Product;
