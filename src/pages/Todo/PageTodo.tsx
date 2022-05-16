import { useEffect, useState, useReducer } from 'react';
import { ContextTodo } from './contextTodo';
import reducerTodo from './reducerTodo';
import TodoList from './TodoList';

export default function PageTodo() {
  const [state, dispatch] = useReducer(reducerTodo, JSON.parse(localStorage.getItem('todos')!) || []);
  const [todoTitle, setTodoTitle] = useState('');
  const addTodo = (event: any) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'add', payload: todoTitle });
      setTodoTitle('');
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
    return () => {};
  }, [state]);

  return (
    <ContextTodo.Provider value={{ dispatch }}>
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          type="text"
          placeholder="Todo name"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyDown={addTodo}
        />
      </div>

      <TodoList todos={state} />
    </ContextTodo.Provider>
  );
}
