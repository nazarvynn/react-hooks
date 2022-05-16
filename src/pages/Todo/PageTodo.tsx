import { useEffect, useState } from 'react';
import { ContextTodo } from './contextTodo';
import TodoList from './TodoList';

export default function PageTodo() {
  const [todos, setTodos] = useState([] as any[]);
  const [todoTitle, setTodoTitle] = useState('');
  const addTodo = (event: any) => {
    if (event.key === 'Enter') {
      setTodos([...todos, { id: '' + Date.now(), title: todoTitle, completed: false }]);
      setTodoTitle('');
    }
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')!) || [];
    setTodos(todos);
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return () => {};
  }, [todos]);

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };
  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  return (
    <ContextTodo.Provider value={{ toggleTodo, removeTodo }}>
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

      <TodoList todos={todos} />
    </ContextTodo.Provider>
  );
}
