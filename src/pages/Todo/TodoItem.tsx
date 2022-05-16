import { useContext } from 'react';
import { ContextTodo } from './contextTodo';

export default function TodoItem({ id, title, completed }: any) {
  const { toggleTodo, removeTodo } = useContext(ContextTodo);

  const cls = ['todo'];
  if (completed) {
    cls.push('completed');
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        <span>{title}</span>
        <i className="material-icons red-text" onClick={() => removeTodo(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
