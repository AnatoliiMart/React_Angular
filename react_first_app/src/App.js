import './App.css';
import Example from './components/example/example';
import ProdList from './components/products/prod-list';
import TodoList from './components/todo/todo-list';

function App() {
  return (
    <div>
      <Example />
      <TodoList />
      <ProdList/>
    </div>
  );
}

export default App;


