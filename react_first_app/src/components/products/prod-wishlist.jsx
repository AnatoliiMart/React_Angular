import React, { useEffect, useReducer } from 'react'
import { ProdWishlistReducer } from './product-reducer'
import Product from './product'

const ProdWishlist = () => {
	const [wishProducts, dispatch] = useReducer(ProdWishlistReducer, [])
	useEffect(() => {
		dispatch({
			type: 'getWishlist',
			payload: JSON.parse(localStorage.getItem('wishList'))
		})
	}, [])
	return (
		<div className='prod-container'>
			{wishProducts.map((wishProduct) => (
				<Product
					title={wishProduct.title}
					description={wishProduct.description}
					image={wishProduct.image}
					price={wishProduct.price}
					category={wishProduct.category}
					key={wishProduct.id}
				/>
			))}
		</div>
	)
}

export default ProdWishlist
