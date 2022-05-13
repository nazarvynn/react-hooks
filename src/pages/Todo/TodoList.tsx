import TodoItem from './TodoItem';

export default function TodoList({ todos }: any) {
  return (
    <ul>
      {todos.map((item: any) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
