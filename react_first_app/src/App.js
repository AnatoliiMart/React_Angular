import './App.css';
import Header from './components/Header';
import ThemeProvider from './providers/themeProvider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  );
}

export default App;