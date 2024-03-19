import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import PrivateRoute from './PrivateRoute'
import Optimize from '../pages/Optimize'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/register',
				element: <Register />
			},
			{
				path: '/profile',
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				)
			},
			{
				path: '/optimize',
				element: <Optimize />
			}
		]
	}
])
export default router
