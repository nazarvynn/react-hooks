import { useMemo, useState } from 'react';

interface User {
  name: string;
  surname: string;
}

function createUser(name: string, surname: string): User {
  const user = { name, surname };
  console.log(user);
  return user;
}

function UseMemoPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [counter, setCounter] = useState(0);

  // useMemo hook
  const user = useMemo(() => createUser(name, surname), [name, surname]);

  return (
    <>
      <h1>Hooks Page</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Clicked {counter} times</button>
        <br />
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <br />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}

export default UseMemoPage;
