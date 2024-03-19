import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData, login, logout } from '../thunks/authThunk'

const initialState = {
	token: null,
	userData: {},
	loading: false,
	error: null
}

export const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.token = action.payload.jwtToken
				state.userData = action.payload.user
				state.loading = false
				state.error = null
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})

			.addCase(fetchUserData.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchUserData.fulfilled, (state, action) => {
				state.token = action.payload.token
				state.userData = action.payload.user
				state.loading = false
			})
			.addCase(fetchUserData.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})

			.addCase(logout.fulfilled, (state) => {
				state.token = null
				state.userData = {}
			})
	}
})

export default AuthSlice.reducer
