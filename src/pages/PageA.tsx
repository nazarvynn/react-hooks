import { useEffect, useState } from 'react';

function PageA() {
  console.log('cmp');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect w/0 deps');
  });

  useEffect(() => {
    console.log('useEffect w/ deps');
  }, []);

  const fn = async () => {
    setCounter((prevState) => ++prevState);
  };

  return (
    <>
      <h1>Use Ref page</h1>
      <div>
        <p>Counter: {counter}</p>
        <p>
          <button
            onClick={async () => {
              setCounter((prevState) => ++prevState);
              setCounter((prevState) => ++prevState);
              // setTimeout(() => {
              //   setCounter((prevState) => ++prevState);
              // });
              await fn();
            }}
          >
            Increase counter
          </button>
        </p>
        <p>
          <button onClick={() => setCounter(0)}>Clear timer</button>
        </p>
      </div>
    </>
  );
}

export default PageA;
