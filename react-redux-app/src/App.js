import { useDispatch, useSelector } from 'react-redux'
import { setTheme, toggleTheme } from './slices/ThemeSlice'
import './App.css'
import { useEffect } from 'react'
import { Products } from './thunks/productsThunk'
import { NavLink, Outlet } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/login'>Login</NavLink>
				<NavLink to='/register'>Register</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}
// function App() {
//   const theme = useSelector((state) => state.theme);
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);
//   useEffect(() => {
//     dispatch(Products());
//   }, []);
//   if (loading === "pending") {
//     return "Loading...";
//   } else if (loading === "rejected") {
//     return error;
//   }
//   return (
//     <div className="App">
//       <button onClick={() => dispatch(toggleTheme())}>Toggle1</button>
//       <button onClick={() => dispatch(setTheme("light"))}>Toggle2</button>
//       <h1>{theme.value}</h1>
//       {products.map((product) => (
//         <div key={product.id}>{product.title}</div>
//       ))}
//     </div>
//   );
// }

export default App
