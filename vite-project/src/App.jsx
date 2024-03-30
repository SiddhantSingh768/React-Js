import { useState } from "react";
function App() {
  let [Counter, SetCounter] = useState(15);
  const addValue = () => {
    Counter++;
    console.log("clicked", Counter);
    SetCounter(Counter);
  };
  const subValue = () => {
    Counter--;
    console.log("clicked", Counter);
    SetCounter(Counter);
  };
  return (
    <>
      <h1>React</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={subValue}>Remove value</button>
    </>
  );
}

export default App;
