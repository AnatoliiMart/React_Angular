import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import { getToken, removeToken, setToken } from '../utils/token'

export const login = createAsyncThunk(
	'auth/login',
	async (payload, { rejectWithValue }) => {
		try {
			const { data } = await api.post('/login', payload)
			setToken(data.jwtToken)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const fetchUserData = createAsyncThunk(
	'auth/fetchUserData',
	async (payload) => {
		const token = getToken()
		api.defaults.headers.Authorization = `Bearer ${token}`
		const response = await api.get('/auth-user')
		return { user: response.data, token }
	}
)
export const logout = createAsyncThunk('auth/logout', () => {
	removeToken()
})
