import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here

  const expensiveValue = useMemo(() => {
    let factorial = 1;

    if (input == 1 || 0) {
      return 1;
    }
    let i = 1;
    while (input >= i) {
      factorial = factorial * i;
      i++;
    }
    return factorial;
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
