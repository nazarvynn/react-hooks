import { useCallback, useEffect, useRef, useState } from 'react';

function UseRefPage() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const ulRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<any>(null);

  const addNumber = () => {
    console.log('Added number');
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleScroll = useCallback(() => {
    console.log('onScroll');
  }, []);

  const removeScrollHandler = () => {
    ulRef.current!.removeEventListener('scroll', handleScroll);
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    ulRef.current!.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <h1>Use Ref page</h1>
      <div>
        <ul ref={ulRef} style={{ width: '300px', height: '100px', overflow: 'auto' }}>
          {numbers.map((number) => (
            <li key={number} style={{ margin: '10px 0' }}>
              {number}
            </li>
          ))}
        </ul>
        <button onClick={() => addNumber()}>Add number</button>
        <br />
        <br />
        <button onClick={() => removeScrollHandler()}>Remove scroll listener</button>
        <br />
        <br />
        <button onClick={() => start()}>Start</button>
        <br />
        <br />
        <button onClick={() => stop()}>Stop</button>
      </div>
    </>
  );
}

export default UseRefPage;
