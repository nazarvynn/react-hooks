import { useCallback, useEffect, useState } from 'react';

function UseCallbackPage() {
  const [message, setMessage] = useState('Nazar');
  const [counter, setCounter] = useState(0);

  const greeting = useCallback((name: string) => {
    console.log(`Hello: ${name}`);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <>
      <h1>Use Callback page</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Clicked {counter} times</button>
      </div>
    </>
  );
}

export default UseCallbackPage;
