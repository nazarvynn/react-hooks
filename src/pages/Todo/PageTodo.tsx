import TodoList from './TodoList';

export default function PageTodo() {
  const todos = [
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: true },
  ];
  return (
    <>
      <h1>Todo app</h1>

      <div className="input-field">
        <input type="text" />
        <label>Todo name</label>
      </div>

      <TodoList todos={todos} />
    </>
  );
}
