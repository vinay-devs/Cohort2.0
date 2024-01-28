import { memo, useCallback, useEffect, useMemo, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(1);

  console.log("re-render");
  const sum = useMemo(() => {
    let s = 0;
    for (let i = 1; i <= value; i++) {
      s = s + i;
    }
    return s;
  }, [value]);

  return (
    <>
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <h2>The sum is {sum}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter({counter})
      </button>
      <CallMe input={"HEY"} fn={useCallback(() => console.log("Hello"), [])} />
    </>
  );
}
const CallMe = memo(({ input }) => {
  console.log("rerender");
  return <h2>{input}</h2>;
});

export default App;
