import { useContext } from 'react';

import { ContextTodo } from './contextTodo';

export default function TodoItem({ id, title, completed }: any) {
  const { dispatch } = useContext(ContextTodo);

  return (
    <li className={`todo ${completed ? 'completed' : ''}`}>
      <label>
        <input type="checkbox" checked={completed} onChange={() => dispatch({ type: 'toggle', payload: id })} />
        <span>{title}</span>
        <i className="material-icons red-text" onClick={() => dispatch({ type: 'remove', payload: id })}>
          delete
        </i>
      </label>
    </li>
  );
}
