import { nanoid } from 'nanoid'

export const ProdWishlistReducer = (state, action) => {
	switch (action.type) {
		case 'addToWishlist':
			return [
				...state,
				{
					id: nanoid(),
					title: action.payload.title,
					description: action.payload.description,
					image: action.payload.image,
					price: action.payload.price,
					category: action.payload.category
				}
			]
		case 'removeFromWishlist':
			return state.filter((item) => item.id !== action.payload)
		case 'getWishlist':
			return action.payload
		default:
			break
	}
}
