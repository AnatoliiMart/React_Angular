import React, { useState, useReducer, useEffect } from 'react'
import Product from './product.jsx'
import './prod-list.css'
import productsList from './products-data.js'
import ProdSorting from './prod-sorting.jsx'
import { ProdWishlistReducer } from './product-reducer.js'
const ProdList = () => {
	const [wishProducts, dispatch] = useReducer(
		ProdWishlistReducer,
		JSON.parse(localStorage.getItem('wishList')) || []
	)

	useEffect(() => {
		localStorage.setItem('wishList', JSON.stringify(wishProducts))
	}, [wishProducts])
	const [sorting, setSorting] = useState('name_Asc')

	const sortOrder = {
		name_Asc: (prod1, prod2) => prod1.title.localeCompare(prod2.title),
		name_Desc: (prod1, prod2) => prod2.title.localeCompare(prod1.title),
		price_Asc: (prod1, prod2) => +prod1.price - +prod2.price,
		price_Desc: (prod1, prod2) => +prod2.price - +prod1.price
	}

	const addToWishList = (product) => {
		dispatch({
			type: 'addToWishlist',
			payload: product
		})
	}
	const removeFromWishList = (id) => {
		dispatch({
			type: 'removeFromWishlist',
			payload: id
		})
	}
	return (
		<div>
			<ProdSorting
				setSorting={setSorting}
				sortOrder={sortOrder}
				activeSort={sorting}
			/>
			<div className='prod-container'>
				{productsList.sort(sortOrder[sorting]).map((product) => (
					<Product
						{...product}
						key={product.id}
						addToWishList={addToWishList}
						removeFromWishList={removeFromWishList}
					/>
				))}
			</div>
		</div>
	)
}

export default ProdList
