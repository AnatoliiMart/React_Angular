import {createBrowserRouter} from 'react-router-dom'
import TodoList from '../components/todo/todo-list'
import App from '../App'
import ProdList from '../components/products/prod-list'
import Users from '../components/users/users'
import User from '../components/users/user'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: '/todo',
                element: <TodoList/>
            },
            {
                path: "/products",
                element: <ProdList/>
            },
            {
                path: "/users",
                element: <Users/>,
                children: [
                    {
                        path: ":id",
                        element: <User/>
                    }
                ]
            },
        ]
    },
])