import ColorSelector from "./ColorSelector";
import { useState } from "react";
function App() {
  const [backgroundColor, setBackgroundColor] = useState("pink");

  return (
    <>
      <div
        style={{
          margin: "0px",
          padding: "0px",
          backgroundColor: `${backgroundColor}`,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <ColorSelector setBackgroundColor={setBackgroundColor} />
      </div>
    </>
  );
}

export default App;
