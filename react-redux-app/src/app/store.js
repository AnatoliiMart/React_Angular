import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '../slices/ThemeSlice'
import ProductsReducer from '../slices/ProductSlice'
import AuthReducer from '../slices/AuthSlice'

export const store = configureStore({
	reducer: {
		theme: ThemeReducer,
		products: ProductsReducer,
		auth: AuthReducer
	}
})
